import { type SyntheticEvent, useState } from 'react';

import { type CopyTypographyProps } from '../CopyTypography';
import { CopyStatus } from '../enums';

type UseLogicParams = CopyTypographyProps;

export const useLogic = ({
  children,
  copyText,
  isShowCopyText,
}: UseLogicParams) => {
  const [status, setStatus] = useState<CopyStatus>(CopyStatus.CanCopy);

  const handleMouseLeave = () => {
    if (status !== CopyStatus.CanCopy) {
      setTimeout(() => {
        setStatus(CopyStatus.CanCopy);
      }, 100);
    }
  };

  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    event.stopPropagation();

    navigator.clipboard
      .writeText(copyText || (typeof children === 'string' ? children : ''))
      .then(() => setStatus(CopyStatus.Copied))
      .catch(() => setStatus(CopyStatus.Error));
  };

  const tooltipTitle = isShowCopyText ? `${status}: ${copyText}` : status;

  return { handleMouseLeave, handleClick, tooltipTitle };
};
