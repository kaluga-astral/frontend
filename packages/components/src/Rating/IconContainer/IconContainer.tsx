import { type ReactNode } from 'react';
import { type IconContainerProps as MuiIconContainerProps } from '@mui/material';

import { Tooltip } from '../../Tooltip';

import { TOOLTIP_ENTER_DELAY_MS } from './constants';
import { Container } from './styles';

type Props = MuiIconContainerProps & {
  isVisibleHints?: boolean;
  icon?: ReactNode;
  hint: string;
};

export const IconContainer = ({
  isVisibleHints,
  icon,
  children,
  hint,
  className,
}: Props) => {
  if (isVisibleHints) {
    return (
      <Tooltip
        title={hint}
        enterDelay={TOOLTIP_ENTER_DELAY_MS}
        enterNextDelay={TOOLTIP_ENTER_DELAY_MS}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -10],
                },
              },
            ],
          },
        }}
      >
        <Container className={className}>{icon || children}</Container>
      </Tooltip>
    );
  }

  return <Container className={className}>{icon || children}</Container>;
};
