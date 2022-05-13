import { styled } from '../styles';
import { IconButton } from '../IconButton';
import { BaseButtonProps } from '../ButtonBase';

type IconDropdownButtonWrapperProps = BaseButtonProps & {
  selected: boolean;
};

export const IconDropdownButtonWrapper = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<IconDropdownButtonWrapperProps>`
  color: ${({ selected, theme }) =>
    selected ? theme.palette.primary.contrastText : 'default'};

  background-color: ${({ selected, theme }) =>
    selected ? theme.palette.grey['900'] : 'default'};
`;
