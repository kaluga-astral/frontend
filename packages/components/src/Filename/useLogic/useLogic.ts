import { type Ref } from 'react';

import { type FileNameProps } from '../Filename';
import { useOverflowed } from '../../OverflowTypography/hooks';
import { type TypographyProps } from '../../Typography';

import { truncateString } from './utils';

type UseLogicParams = {
  children: string;
  ref: Ref<HTMLElement>;
  props: Omit<FileNameProps, 'children' | 'tooltipProps'>;
};

type UseLogicResult = {
  typographyProps: TypographyProps;
  isOverflowed: boolean;
  suffixWithExtension: string;
};

export const useLogic = (params: UseLogicParams): UseLogicResult => {
  const { ref: forwardedRef, children, props } = params;
  const { ref, isOverflowed } = useOverflowed(forwardedRef);

  const { baseName, suffixWithExtension } = truncateString(children);

  const typographyProps = {
    ...props,
    ref,
    children: baseName,
  };

  return { typographyProps, isOverflowed, suffixWithExtension };
};
