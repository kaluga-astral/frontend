import { type Ref } from 'react';

import { type FileNameProps } from '../Filename';
import { useOverflowed } from '../../OverflowTypography/hooks';
import { type TypographyProps } from '../../Typography';

import { truncateString } from './utils';

type UseLogicParams = FileNameProps & {
  ref: Ref<HTMLElement>;
};

type UseLogicResult = {
  typographyProps: TypographyProps;
  isOverflowed: boolean;
  children: string;
  ExtensionProps: TypographyProps;
};

export const useLogic = (params: UseLogicParams): UseLogicResult => {
  const {
    ref: forwardedRef,
    children,
    tooltipProps,
    style,
    variant = 'inherit',
    ...props
  } = params;
  const { ref, isOverflowed } = useOverflowed(forwardedRef);

  const { baseName, suffixWithExtension } = truncateString(children);

  const typographyProps = {
    ...props,
    variant,
    ref,
    children: baseName,
  };

  const ExtensionProps = {
    variant,
    ...props,
    children: suffixWithExtension,
  };

  return {
    typographyProps,
    isOverflowed,
    ExtensionProps,
    children,
  };
};
