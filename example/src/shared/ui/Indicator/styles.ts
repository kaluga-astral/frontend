import { styled } from '../external';

import { IndicatorColor } from './types';

export type IndicatorProps = {
  color: IndicatorColor;
};

export const Indicator = styled('span', {
  shouldForwardProp: (prop) => prop !== 'color',
})<IndicatorProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, color = 'primary' }) =>
    theme.palette[color].main};
  padding: ${({ theme }) => theme.spacing(0, 1)};
  border-radius: 50%;
`;
