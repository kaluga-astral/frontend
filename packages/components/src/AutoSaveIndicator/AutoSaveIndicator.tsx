import { CrossOutlineSm } from '@astral/icons';

import { Popover } from '../Popover';
import { IconButton } from '../IconButton';

import { PopoverContent, PopoverTypography, Wrapper } from './styles';
import { useLogic } from './useLogic';
import { ErrorState } from './ErrorState';
import { LoadingState } from './LoadingState';
import { SuccessState } from './SuccessState';
import { DefaultState } from './DefaultState';

export type AutoSaveIndicatorProps = {
  /**
   * Функция обработки нажатия на кнопку "Повторить попытку"
   */
  onRetry: () => void;
  /**
   * Текст тултипа при ошибке автосохранения
   */
  errorMsg: string;
  /**
   * Состояние сохранения
   */
  isLoading?: boolean;
  /**
   * Состояние ошибки во время сохранения
   */
  isError?: boolean;
  /**
   * Состояние успешного сохранения
   */
  isSuccess?: boolean;
};

export const AutoSaveIndicator = (props: AutoSaveIndicatorProps) => {
  const { isSuccess, isError, isLoading, errorMsg, onRetry } = props;

  const { popoverProps, handleClose, ref } = useLogic();

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }

    if (isError) {
      return <ErrorState onRetry={onRetry} errorMsg={errorMsg} />;
    }

    if (isSuccess) {
      return <SuccessState />;
    }

    return <DefaultState />;
  };

  return (
    <>
      <Wrapper ref={ref}>{renderContent()}</Wrapper>
      <Popover
        {...popoverProps}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
      >
        <PopoverContent>
          <PopoverTypography>
            Изменения на этой странице сохраняются автоматически
          </PopoverTypography>
          <IconButton variant="text" onClick={handleClose}>
            <CrossOutlineSm />
          </IconButton>
        </PopoverContent>
      </Popover>
    </>
  );
};
