import { type Ref } from 'react';

import { type FileNameProps } from '../Filename';
import { useOverflowed } from '../../OverflowTypography/hooks';
import { type TypographyProps } from '../../Typography';

import { truncateString } from './utils';

type SpanProps = {
  children: string;
  ref?: Ref<HTMLElement>;
};

type UseLogicParams = FileNameProps & {
  ref: Ref<HTMLElement>;
};

type UseLogicResult = {
  isOverflowed: boolean;
  children: string;
  baseNameProps: SpanProps;
  extensionProps: SpanProps;
  typographyProps: TypographyProps;
};

export const useLogic = (params: UseLogicParams): UseLogicResult => {
  const {
    ref: forwardedRef,
    children,
    tooltipProps,
    variant = 'inherit',
    ...props
  } = params;
  const { ref, isOverflowed } = useOverflowed(forwardedRef);

  const { baseName, suffixWithExtension } = truncateString(children);

  const typographyProps = {
    variant,
    ...props,
  };

  const baseNameProps = {
    ref,
    children: baseName,
  };

  const extensionProps = {
    children: suffixWithExtension,
  };

  return {
    typographyProps,
    baseNameProps,
    isOverflowed,
    extensionProps,
    children,
  };
};
