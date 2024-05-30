import { type ElementType } from 'react';
import { type SkeletonProps as MuiSkeletonProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledSkeleton } from './styles';

export type SkeletonProps<
  TComponent extends ElementType,
  TComponentProps = {},
> = Omit<
  WithoutEmotionSpecific<MuiSkeletonProps<TComponent, TComponentProps>>,
  'variant' | 'animation'
> & {
  /**
   * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонент
   */
  component?: TComponent;

  /**
   * Тип контента, который будет отображаться
   */
  variant?: 'text' | 'rounded' | 'circular';
};

export const Skeleton = <
  TComponent extends ElementType = 'span',
  TComponentProps = {},
>(
  props: SkeletonProps<TComponent, TComponentProps>,
) => <StyledSkeleton {...props} />;
