import { styled } from '../../styles';

export const Wrapper = styled.li<{
  $gridColumns: string;
  $isHovered?: boolean;
  $isSelected?: boolean;
}>`
  display: grid;
  grid-template-columns: ${({ $gridColumns }) => $gridColumns};

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.palette.primary[100] : 'transparent'};

  transition: ${({ theme }) => {
    return theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.short,
    });
  }};

  &:hover {
    cursor: ${({ $isHovered }) => ($isHovered ? 'pointer' : 'default')};

    background-color: ${({ theme, $isHovered }) =>
      $isHovered ? theme.palette.background.elementHover : 'transparent'};
  }
`;

export const CheckboxCell = styled.div`
  align-self: center;
`;
