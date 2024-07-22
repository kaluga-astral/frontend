import { styled } from '../styles';
import { Typography } from '../Typography';

export const DescriptionCellWrapper = styled.div`
  display: flex;
  align-items: center;

  padding-left: ${({ theme }) => theme.spacing(2)};

  transition: ${({ theme }) =>
    theme.transitions.create('background-color', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    })};

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.elementHover};
  }
`;

export const IconWrapper = styled('div', {
  shouldForwardProp: (prop) => prop != '$iconPosition',
})<{ $iconPosition?: string }>`
  display: flex;

  padding-right: ${({ theme, $iconPosition }) =>
    $iconPosition === 'right' && theme.spacing(2)};

  & > svg {
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
