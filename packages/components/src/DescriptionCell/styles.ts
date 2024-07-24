import { typographyClasses } from '@mui/material';

import { styled } from '../styles';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop != '$iconPosition',
})<{ $iconPosition?: string }>`
  display: flex;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'right' && 'row-reverse'};
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;

  transition: ${({ theme }) =>
    theme.transitions.create('background-color', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    })};

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.elementHover};
  }
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
