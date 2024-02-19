import { styled } from '../styles';

export const DataListItemRoot = styled.li`
  cursor: pointer;

  padding: ${({ theme }) => theme.spacing(5, 4)};

  list-style-type: none;

  background-color: ${({ theme }) => theme.palette.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  transition: ${({ theme }) =>
    theme.transitions.create('color', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    })};

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.element};
  }
`;
