import { type Ref } from 'react';
import { type TypographyVariant } from '@mui/material';

import { type FileNameProps } from '../Filename';
import { useOverflowed } from '../../OverflowTypography/hooks';
import { type TypographyProps } from '../../Typography';

import { truncateString } from './utils';

type UseLogicParams = {
  children: string;
  ref: Ref<HTMLElement>;
  props: Omit<FileNameProps, 'children' | 'tooltipProps' | 'style'>;
  variant: 'inherit' | TypographyVariant;
};

type UseLogicResult = {
  typographyProps: TypographyProps;
  isOverflowed: boolean;
  ExtensionProps: TypographyProps;
};

export const useLogic = (params: UseLogicParams): UseLogicResult => {
  const { ref: forwardedRef, children, props, variant } = params;
  const { ref, isOverflowed } = useOverflowed(forwardedRef);

  const { baseName, suffixWithExtension } = truncateString(children);

  const typographyProps = {
    ...props,
    ref,
    children: baseName,
    variant,
  };

  const ExtensionProps = {
    ...props,
    children: suffixWithExtension,
    variant,
  };

  return { typographyProps, isOverflowed, ExtensionProps };
};
