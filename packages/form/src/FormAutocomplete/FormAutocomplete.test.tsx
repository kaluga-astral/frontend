import { describe, expect, it, vi } from 'vitest';
import {
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { useState } from 'react';
import { Button } from '@astral/components';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormAutocomplete } from './FormAutocomplete';

type FormValues = { user: string };

type Option = {
  name: string;
  surname: string;
};

const validationSchema = object<FormValues>({
  user: string(),
});

describe('FormAutocomplete', () => {
  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form
          name="form"
          form={form}
          onSubmit={form.handleSubmit(() => undefined)}
        >
          <FormAutocomplete name="user" options={[]} />
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const errorText = screen.getByText('Обязательно');

      expect(errorText).toBeVisible();
    });
  });

  it('В форму задается выбранный option', async () => {
    const user = userEvents.setup();
    const onSubmit = vi.fn();
    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    const TestComponent = () => {
      const form = useForm<{ user: Option }>();

      return (
        <Form name="form" form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormAutocomplete
            name="user"
            getOptionLabel={(option) => (option as Option).name}
            options={options}
          />
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByRole('option'));
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const [submitValues] = onSubmit.mock.calls[0];

      expect(submitValues).toEqual({
        user: { name: 'Vasya', surname: 'Pupkin' },
      });
    });
  });

  it('Фокус появляется на поле после клика на Submit, если передан inputRef', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormAutocomplete name="user" label="user" options={[]} />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const input = await screen.findByRole('combobox', { name: /user/i });

    expect(input).toHaveFocus();
  });

  it('В форму сетится значение из input при freeSolo=true', async () => {
    type FormFreeValues = { user: Option | string };

    const onSubmit = vi.fn();
    const TestComponent = () => {
      const form = useForm<FormFreeValues>({
        defaultValues: { user: '' },
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormAutocomplete<FormValues, Option, false, false, true>
            name="user"
            label="user"
            freeSolo
            options={[{ name: 'Vasya', surname: 'Pupkin' }]}
            getOptionLabel={(value) =>
              typeof value === 'string' ? value : value.name
            }
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.type(screen.getByRole('combobox'), 'Ivan');
    await userEvents.click(screen.getByText('submit'));

    await waitFor(() => {
      const [submitValues] = onSubmit.mock.calls[0];

      expect(submitValues).toEqual({
        user: 'Ivan',
      });
    });
  });

  it('Значение из списка задается в форму при freeSolo=true', async () => {
    type FormFreeValues = { user: Option | string };

    const onSubmit = vi.fn();
    const TestComponent = () => {
      const form = useForm<FormFreeValues>({
        defaultValues: { user: '' },
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormAutocomplete<FormValues, Option, false, false, true>
            name="user"
            label="user"
            freeSolo
            options={[
              { name: 'Vasya', surname: 'Pupkin' },
              { name: 'Ivan', surname: 'Ivanov' },
            ]}
            getOptionLabel={(value) =>
              typeof value === 'string' ? value : value.name
            }
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.type(screen.getByRole('combobox'), 'Ivan');
    await userEvents.click(screen.getByRole('option'));
    await userEvents.click(screen.getByText('submit'));

    await waitFor(() => {
      const [submitValues] = onSubmit.mock.calls[0];

      expect(submitValues).toEqual({
        user: { name: 'Ivan', surname: 'Ivanov' },
      });
    });
  });

  it('OnInputChange корректно вызывается вместе с freeSolo=true', async () => {
    type FormFreeValues = { user: Option | string };

    const onInputChange = vi.fn();

    const TestComponent = () => {
      const form = useForm<FormFreeValues>({
        defaultValues: { user: '' },
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormAutocomplete<FormValues, Option, false, false, true>
            name="user"
            label="user"
            freeSolo
            options={[]}
            onInputChange={onInputChange}
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.type(screen.getByRole('combobox'), 'Ivan');

    await waitFor(() => {
      expect(onInputChange.mock.calls).toHaveLength(4);
    });
  });

  it('Value инпута синхронизируется с формой при изменении значения поля формы', async () => {
    type FormFreeValues = {
      autocomplete: Option | string;
    };

    // eslint-disable-next-line quotes
    const formText = "It's sunday!";

    const TestComponent = () => {
      const [, setIsUpdate] = useState(false);

      const form = useForm<FormFreeValues>({
        reValidateMode: 'onChange',
      });

      const handleButtonClick = () => {
        form.setValue('autocomplete', formText);
        setIsUpdate(true);
      };

      return (
        <Form form={form}>
          <FormAutocomplete<FormFreeValues, Option, true, false, true>
            control={form.control}
            name="autocomplete"
            options={[]}
            freeSolo
            label="Form autocomplete with freeSolo"
            getOptionLabel={(params) =>
              typeof params === 'string' ? params : params.name
            }
          />

          <Button id="set-text-btn" onClick={handleButtonClick}>
            Set text
          </Button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);

    const setTextBtn = screen.getByRole('button');

    await userEvents.click(setTextBtn);
    expect(screen.getByDisplayValue(formText)).toBeInTheDocument();
  });

  it('Кнопка сброса отображается при наведении на инпут, если инпут содержит текст', async () => {
    type FormFreeValues = { user: Option | string };

    const onInputChange = vi.fn();

    const clearText = 'Очистить';

    const TestComponent = () => {
      const form = useForm<FormFreeValues>({
        defaultValues: { user: '' },
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormAutocomplete<FormValues, Option, false, false, true>
            name="user"
            label="user"
            freeSolo
            options={[]}
            onInputChange={onInputChange}
            clearText={clearText}
          />

          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    userEvents.type(screen.getByDisplayValue(''), 'some text');

    await waitFor(() => {
      expect(screen.getByTitle(clearText)).toBeInTheDocument();
    });
  });
});
