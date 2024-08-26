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
  onRetry: () => void;
  errorMsg: string;
  state?: 'isLoading' | 'isError' | 'isSuccess';
};

export const AutoSave = forwardRef<HTMLDivElement, AutoSaveProps>(
  (props, forwardedRef) => {
    const ref = useForwardedRef<HTMLDivElement>(forwardedRef);
    const { state, errorMsg, onRetry } = props;

    const { popoverProps, handleClose } = useLogic({ ref });

    return (
      <>
        <Wrapper ref={ref}>
          {!state && (
            <>
              <StyledTypography variant="caption" {...props}>
                {DEFAULT_STATE}
              </StyledTypography>
              <AutosaveFillMd />
            </>
          )}
          {state === 'isLoading' && (
            <>
              <StyledTypography variant="caption" {...props}>
                {LOADING_STATE}
              </StyledTypography>
              <LoadingIcon />
            </>
          )}
          {state === 'isError' && (
            <>
              <ErrorWrapper>
                <StyledTypography variant="caption" {...props}>
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
          )}
          {state === 'isSuccess' && (
            <>
              <StyledTypography variant="caption" {...props}>
                {SUCCESS_STATE}
              </StyledTypography>
              <SuccessIcon />
            </>
          )}
        </Wrapper>
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
