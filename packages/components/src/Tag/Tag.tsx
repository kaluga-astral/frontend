import { forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';

import { LegacyGrid } from '../LegacyGrid';

import { StyledTag, getBadgeColor } from './styles';
import { TagProps } from './types';

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      color,
      variant,
      deleteIcon,
      size = 'small',
      label,
      startAddon: StartAddon,
      endAddon: EndAddon,
      ...props
    },
    ref,
  ) => {
    const labelContent = (
      <LegacyGrid
        container
        component="span"
        justifyContent="flex-start"
        alignItems="center"
        autoFlow="column"
        spacing={1}
      >
        {StartAddon && (
          <StartAddon color={getBadgeColor({ variant, tagColor: color })} />
        )}
        {label}
        {EndAddon && (
          <EndAddon color={getBadgeColor({ variant, tagColor: color })} />
        )}
      </LegacyGrid>
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
