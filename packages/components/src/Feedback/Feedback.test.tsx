import { fireEvent, renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect, vi } from 'vitest';

import { Feedback } from './Feedback';

describe('Feedback', () => {
  it('Текст вопроса отображается и соответствует переданному в prop question', () => {
    const question = 'Вам было сложно получить электронную подпись?';

    renderWithTheme(
      <Feedback
        isOpen
        question={question}
        onClose={() => {}}
        onSubmit={() => {}}
      />,
    );

    const questionMsg = screen.getByText(question);

    expect(questionMsg).toBeVisible();
  });

  describe('Tooltip с подсказкой', () => {
    it('Не отображается по умолчанию при наведении на элемент рейтинга', async () => {
      renderWithTheme(
        <Feedback
          isOpen
          question="Вам было сложно получить электронную подпись?"
          onClose={() => {}}
          onSubmit={() => {}}
        />,
      );

      const happyRatingInput = screen.getByText('🙂');

      await userEvents.hover(happyRatingInput);

      const tooltip = screen.queryByRole('tooltip');

      expect(tooltip).not.toBeInTheDocument();
    });

    it('Отображается при isVisibleHints=true при наведении на элемент рейтинга', async () => {
      renderWithTheme(
        <Feedback
          isOpen
          isVisibleHints
          question="Вам было сложно получить электронную подпись?"
          onClose={() => {}}
          onSubmit={() => {}}
        />,
      );

      const happyRatingInput = screen.getByText('🙂');

      await userEvents.hover(happyRatingInput);

      const tooltip = await screen.findByRole('tooltip');

      expect(tooltip).toBeInTheDocument();
    });
  });

  describe('Текстовое поле', () => {
    it('Недоступно при isExtended=false', () => {
      renderWithTheme(
        <Feedback
          isOpen
          isExtended={false}
          question="Вам было сложно получить электронную подпись?"
          textFieldProps={{
            placeholder: 'Что оказалось сложным, а что удобным?',
          }}
          onClose={() => {}}
          onSubmit={() => {}}
        />,
      );

      expect(
        screen.queryByPlaceholderText('Что оказалось сложным, а что удобным?'),
      ).not.toBeInTheDocument();
    });

    it('Недоступно пока не выбрана оценка', () => {
      renderWithTheme(
        <Feedback
          isOpen
          question="Вам было сложно получить электронную подпись?"
          textFieldProps={{
            placeholder: 'Что оказалось сложным, а что удобным?',
          }}
          onClose={() => {}}
          onSubmit={() => {}}
        />,
      );

      const textAreaInput = screen.queryByPlaceholderText(
        'Что оказалось сложным, а что удобным?',
      );

      expect(textAreaInput).not.toBeVisible();
    });
  });

  it('Кнопка отправки данных недоступна пока не указана оценка', () => {
    const question = 'Вам было сложно получить электронную подпись?';

    renderWithTheme(
      <Feedback
        isOpen
        question={question}
        onClose={() => {}}
        onSubmit={() => {}}
      />,
    );

    const submitButton = screen.getByText('Отправить');

    expect(submitButton).not.toBeVisible();
  });

  it('Placeholder c ошибкой отображается при isError=true', () => {
    renderWithTheme(
      <Feedback
        isOpen
        isError
        question=""
        onClose={() => {}}
        onSubmit={() => {}}
      />,
    );

    const title = screen.getByText('Произошла ошибка');

    expect(title).toBeVisible();
  });

  it('OnClose вызывается при нажатии на кнопку закрытия', () => {
    const onCloseSpy = vi.fn();

    renderWithTheme(
      <Feedback
        isOpen
        question="Вам было сложно получить электронную подпись?"
        onClose={onCloseSpy}
        onSubmit={() => {}}
      />,
    );

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onCloseSpy).toHaveBeenCalled();
  });

  it('OnSubmit вызывается с заполненными значениями', () => {
    const question = 'Вам было сложно получить электронную подпись?';
    const onSubmitSpy = vi.fn();

    renderWithTheme(
      <Feedback
        isOpen
        isExtended
        question={question}
        textFieldProps={{
          placeholder: 'Что оказалось сложным, а что удобным?',
        }}
        onClose={() => {}}
        onSubmit={onSubmitSpy}
      />,
    );

    const happyRatingInput = screen.getByText('🙂');

    fireEvent.click(happyRatingInput);

    const textAreaInput = screen.getByPlaceholderText(
      'Что оказалось сложным, а что удобным?',
    );

    fireEvent.change(textAreaInput, { target: { value: 'Test comment' } });

    const submitButton = screen.getByText('Отправить');

    fireEvent.click(submitButton);

    expect(onSubmitSpy).toHaveBeenCalledWith({
      rating: 4,
      feedback: 'Test comment',
    });
  });
});
