import { typographyClasses } from '@mui/material';
import { type ReactNode } from 'react';

import { styled } from '../styles';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !['$iconPosition', '$icon'].includes(prop),
})<{ $iconPosition?: string; $icon: ReactNode }>`
  display: flex;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'right' && 'row-reverse'};
  gap: ${({ theme, $icon }) => $icon && theme.spacing(2)};
  align-items: center;
`;

export const IconWrapper = styled.div`
  & > svg {
    display: block;

    width: 24px;
    height: 24px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  dl {
    .${typographyClasses.root} {
      font-size: unset;
      color: unset;
    }
  }
`;
