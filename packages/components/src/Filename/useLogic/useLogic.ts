import { type Ref } from 'react';

import { type FileNameProps } from '../Filename';
import { useOverflowed } from '../../OverflowTypography/hooks';

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
  baseNameProps: SpanProps;
  suffixWithExtension: string;
};

export const useLogic = ({
  ref: forwardedRef,
  children,
}: UseLogicParams): UseLogicResult => {
  const { ref, isOverflowed } = useOverflowed(forwardedRef);

  const { baseName, suffixWithExtension } = truncateString(children);

  return {
    baseNameProps: { ref, children: baseName },
    isOverflowed,
    suffixWithExtension,
  };
};
