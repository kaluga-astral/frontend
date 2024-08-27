import { AutosaveFillMd, CrossOutlineMd } from '@astral/icons';
import { forwardRef } from 'react';

import { Tooltip } from '../Tooltip';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { useForwardedRef } from '../hooks';
import { IconButton } from '../IconButton';

import {
  ErrorIcon,
  ErrorWrapper,
  LoadingIcon,
  PopoverContent,
  StyledTooltip,
  StyledTypography,
  SuccessIcon,
  Wrapper,
} from './styles';
import {
  DEFAULT_STATE,
  ERROR_STATE,
  LOADING_STATE,
  ON_RETRY_MESSAGE,
  POPOVER_MESSAGE,
  SUCCESS_STATE,
} from './constants';
import { useLogic } from './useLogic';

export type AutoSaveProps = {
  /**
   * Функция обработки нажатия на кнопку "Повторить попытку"
   */
  onRetry: () => void;
  /**
   * Текст тултипа при ошибке автосохранения
   */
  errorMsg: string;
  /**
   * Состояние сохранения, если состояние не указано, то `default`
   */
  state?: 'isLoading' | 'isError' | 'isSuccess';
};

export const AutoSave = forwardRef<HTMLDivElement, AutoSaveProps>(
  (props, forwardedRef) => {
    const ref = useForwardedRef<HTMLDivElement>(forwardedRef);
    const { state, errorMsg, onRetry } = props;

    const { popoverProps, handleClose } = useLogic({ ref });

    const renderContent = () => {
      switch (state) {
        case 'isLoading':
          return (
            <>
              <StyledTypography variant="caption">
                {LOADING_STATE}
              </StyledTypography>
              <LoadingIcon />
            </>
          );
        case 'isError':
          return (
            <>
              <ErrorWrapper>
                <StyledTypography variant="caption">
                  {ERROR_STATE}
                </StyledTypography>
                <StyledTypography
                  onClick={onRetry}
                  variant="caption"
                  color="primary"
                >
                  {ON_RETRY_MESSAGE}
                </StyledTypography>
              </ErrorWrapper>
              <Tooltip
                title={errorMsg}
                placement="bottom"
                withoutContainer={false}
              >
                <ErrorIcon />
              </Tooltip>
            </>
          );
        case 'isSuccess':
          return (
            <>
              <StyledTypography variant="caption">
                {SUCCESS_STATE}
              </StyledTypography>
              <SuccessIcon />
            </>
          );
        default:
          return (
            <>
              <StyledTypography variant="caption">
                {DEFAULT_STATE}
              </StyledTypography>
              <StyledTooltip
                title={POPOVER_MESSAGE}
                placement="bottom"
                //withoutContainer=false необходим для размещения тултипа на иконку
                withoutContainer={false}
              >
                <AutosaveFillMd />
              </StyledTooltip>
            </>
          );
      }
    };

    return (
      <>
        <Wrapper ref={ref}>{renderContent()}</Wrapper>
        <Popover {...popoverProps}>
          <PopoverContent>
            <Typography>{POPOVER_MESSAGE}</Typography>
            <IconButton variant="text" onClick={handleClose}>
              <CrossOutlineMd />
            </IconButton>
          </PopoverContent>
        </Popover>
      </>
    );
  },
);
