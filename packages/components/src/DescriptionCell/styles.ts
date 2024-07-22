import { styled } from '../styles';
import { Typography } from '../Typography';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop != '$iconPosition',
})<{ $iconPosition?: string }>`
  display: flex;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'right' && 'row-reverse'};
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
  display: flex;

  & > svg {
    display: block;

    width: 24px;
    height: 24px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing(2)};
`;

export const SubTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[600]};
`;
