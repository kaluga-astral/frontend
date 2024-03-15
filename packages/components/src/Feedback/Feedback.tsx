import { useState } from 'react';
import { CrossOutlineSm } from '@astral/icons';

import { ContentState } from '../ContentState';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { useLogic } from './hooks';
import { DEFAULT_TEXTFILED_LABEL } from './constants';
import { SuccessPlaceholder } from './SuccessPlaceholder';
import {
  Content,
  Footer,
  Header,
  LastStep,
  StyledEmojiRating,
  StyledPaper,
  StyledTextArea,
  StyledTypography,
} from './styles';

export type FeedbackProps = {
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
    rating?: number | null;
    feedback?: string | null;
  }) => void;

  /**
   * Функция для закрытия компонента
   */
  onClose: () => void;
};

export const Feedback = ({
  isOpen,
  isLoading,
  isError,
  className,
  question,
  hints,
  errorMsg,
  isVisibleHints,
  isExtended = true,
  textFieldProps,
  onSubmit,
  onClose,
}: FeedbackProps) => {
  const [rating, setRating] = useState<number | null>();
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

  const handleSubmit = () => onSubmit({ rating, feedback });

  if (!isOpen) {
    return;
  }

  const { label = DEFAULT_TEXTFILED_LABEL, placeholder } = textFieldProps || {};

  return (
    <StyledPaper className={className} elevation={2}>
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
          <Content>
            <StyledTypography variant="h5">{question}</StyledTypography>

            <StyledEmojiRating
              isVisibleHints={isVisibleHints}
              hints={hints}
              onChange={setRating}
            />

            <LastStep
              isShow={Boolean(rating)}
              {...{ inert: !Boolean(rating) ? '' : undefined }}
            >
              {isExtended && (
                <StyledTextArea
                  label={label}
                  placeholder={placeholder}
                  rows={3}
                  value={feedback}
                  margin="none"
                  onChange={(event) => setFeedback(event.target.value)}
                />
              )}

              <Footer>
                <Button
                  size="large"
                  loading={isLoading}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Отправить
                </Button>
              </Footer>
            </LastStep>
          </Content>
        ) : (
          <SuccessPlaceholder />
        )}
      </ContentState>
    </StyledPaper>
  );
};
