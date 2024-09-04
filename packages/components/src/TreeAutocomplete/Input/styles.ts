import { styled } from '../../styles';
import { IconButton } from '../../IconButton';

export const StyledIconButton = styled(IconButton)`
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;

    fill: ${({ theme }) => theme.palette.grey['500']};
  }

  &:hover {
    background-color: transparent;

    svg {
      fill: ${({ theme }) => theme.palette.grey['700']};
    }
  }
`;
