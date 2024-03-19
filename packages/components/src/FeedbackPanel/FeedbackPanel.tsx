import { type ChangeEvent, type FormEvent, useState } from 'react';
import { CrossOutlineSm } from '@astral/icons';

import { ContentState } from '../ContentState';
import { Paper } from '../Paper';
import { Button } from '../Button';
import { Grow } from '../Grow';
import { IconButton } from '../IconButton';

import { useLogic } from './hooks';
import { DEFAULT_TEXTFILED_LABEL } from './constants';
import { SuccessPlaceholder } from './SuccessPlaceholder';
import {
  Container,
  Footer,
  Form,
  Header,
  StyledCollapse,
  StyledEmojiRating,
  StyledTextArea,
  StyledTypography,
} from './styles';

export type FeedbackPanelProps = {
  /**
   * Флаг, отвечающий за отображение компонента
   */
  isOpen?: boolean;

  /**
   * Флаг состояния загрузки
   */
  isLoading?: boolean;

  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;

  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Текст ошибки
   */
  errorMsg?: string;

  /**
   * Ссылка на изображение, отображающееся после успешной отправки данных
   * по умолчанию берется из ConfigContext
   */
  successImgSrc?: string;

  /**
   * Текст вопроса
   */
  question: string;

  /**
   * Текстовые значения для шкал рейтинга
   */
  hints?: string[];

  /**
   * Флаг, отвечающий за отображение подсказок, при наведении на emoji
   * @default false
   */
  isVisibleHints?: boolean;

  /**
   * Флаг, добавляющий текстовое поле для обратной связи
   * @default true
   */
  isExtended?: boolean;

  /**
   * Конфигурация для текстового поля
   */
  textFieldProps?: {
    /**
     * Название текстового поля
     */
    label?: string;

    /**
     * Краткая подсказка, отображаемая во входных данных перед вводом пользователем значения.
     */
    placeholder: string;
  };

  /**
   * Функция, вызываемая при отправке данных
   */
  onSubmit: ({
    rating,
    feedback,
  }: {
    rating: number;
    feedback?: string | null;
  }) => void;

  /**
   * Функция для закрытия компонента
   */
  onClose: () => void;
};

export const FeedbackPanel = ({
  isOpen,
  isLoading,
  isError,
  className,
  question,
  hints,
  errorMsg,
  successImgSrc,
  isVisibleHints,
  isExtended = true,
  textFieldProps,
  onSubmit,
  onClose,
}: FeedbackPanelProps) => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>();

  const handleClose = () => {
    setRating(null);
    setFeedback(null);
    onClose();
  };

  const { isSuccess } = useLogic({
    isOpen,
    isLoading,
    isError,
    endHook: handleClose,
  });

  const handleChangeFeedback = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFeedback(event.target.value);

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    onSubmit({ rating, feedback } as {
      rating: number;
      feedback?: string | null;
    });
  };

  if (!isOpen) {
    return;
  }

  const { label = DEFAULT_TEXTFILED_LABEL, placeholder } = textFieldProps || {};

  return (
    <Grow in={isOpen}>
      <Container>
        <Paper className={className} elevation={2}>
          <Header>
            <IconButton size="small" variant="text" onClick={handleClose}>
              <CrossOutlineSm />
            </IconButton>
          </Header>

          <ContentState
            isError={isError}
            errorState={{ onRetry: handleSubmit, errorList: [errorMsg || ''] }}
          >
            {!isSuccess ? (
              <Form onSubmit={handleSubmit}>
                <StyledTypography variant="h5">{question}</StyledTypography>

                <StyledEmojiRating
                  isVisibleHints={isVisibleHints}
                  hints={hints}
                  onChange={setRating}
                />

                <StyledCollapse in={Boolean(rating)}>
                  {isExtended && (
                    <StyledTextArea
                      label={label}
                      placeholder={placeholder}
                      rows={3}
                      value={feedback}
                      margin="none"
                      onChange={handleChangeFeedback}
                    />
                  )}

                  <Footer>
                    <Button size="large" loading={isLoading} type="submit">
                      Отправить
                    </Button>
                  </Footer>
                </StyledCollapse>
              </Form>
            ) : (
              <SuccessPlaceholder imgSrc={successImgSrc} />
            )}
          </ContentState>
        </Paper>
      </Container>
    </Grow>
  );
};
