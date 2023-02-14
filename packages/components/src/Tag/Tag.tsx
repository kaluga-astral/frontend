import { forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';
import { ChipProps as MuiTagProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';
import { BadgeColor } from '../Badge';

import { StyledTag, TagBadge, getBadgeColor } from './styles';
import { TagColor, TagSize, TagVariant } from './types';

export type TagProps = Omit<
  WithoutEmotionSpecific<MuiTagProps>,
  'color' | 'variant' | 'size'
> & {
  /**
   * Цвет тега
   */
  color?: TagColor;
  /**
   * Тип тега
   */
  variant?: TagVariant;
  /**
   * Скругленная форма тега
   */
  rounded?: boolean;
  /**
   * Размер тега
   */
  size?: TagSize;

  /**
   * Содержимое badge
   */
  badge?: string;
  /**
   * Кастомный цвет badge
   */
  badgeColor?: BadgeColor | null;
};

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      color,
      variant,
      deleteIcon,
      size = 'small',
      label,
      badge,
      badgeColor,
      ...props
    },
    ref,
  ) => {
    const preparedBadge = (badge || '').trim();

    const preparedBadgeColor =
      badgeColor ||
      getBadgeColor({
        variant: variant,
        tagColor: color,
      });

    const labelContent = (
      <>
        {label}{' '}
        {preparedBadge ? (
          <TagBadge
            withBorder={false}
            color={preparedBadgeColor}
            badgeContent={preparedBadge}
          />
        ) : (
          <></>
        )}
      </>
    );

    return (
      <StyledTag
        ref={ref}
        customColor={color}
        customVariant={variant}
        customSize={size}
        label={labelContent}
        {...props}
        deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
      />
    );
  },
);
