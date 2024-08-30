import { ERROR_STATE, ON_RETRY_MESSAGE } from '../constants';
import { Tooltip } from '../../Tooltip';

import {
  ErrorIcon,
  ErrorWrapper,
  StyledButton,
  StyledTypography,
} from './styles';

type ErrorStateProps = {
  /**
   * Функция обработки нажатия на кнопку "Повторить попытку"
   */
  onRetry: () => void;
  /**
   * Текст тултипа при ошибке автосохранения
   */
  errorMsg: string;
};

export const ErrorState = (props: ErrorStateProps) => {
  const { onRetry, errorMsg } = props;

  return (
    <>
      <ErrorWrapper>
        <StyledTypography variant="caption">{ERROR_STATE}</StyledTypography>
        <StyledButton onClick={onRetry} variant="link" color="primary">
          {ON_RETRY_MESSAGE}
        </StyledButton>
      </ErrorWrapper>
      <Tooltip title={errorMsg} placement="bottom" withoutContainer={false}>
        <ErrorIcon />
      </Tooltip>
    </>
  );
};
