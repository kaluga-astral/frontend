import { type Ref } from 'react';

import { type FileNameProps } from '../Filename';
import { useOverflowed } from '../../OverflowTypography/hooks';

import { truncateString } from './utils';

export const useLogic = (
  children: string,
  forwardedRef: Ref<HTMLElement>,
  props: Omit<FileNameProps, 'children' | 'tooltipProps'>,
) => {
  const { ref, isOverflowed } = useOverflowed(forwardedRef);

  const { baseName, ext } = truncateString(children);

  const typographyProps = {
    ...props,
    ref,
    children: baseName,
  };

  return { typographyProps, isOverflowed, ext };
};
