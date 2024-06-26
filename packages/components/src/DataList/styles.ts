import { styled } from '../styles';

import { ITEM_CLASSNAME } from './constants';

export const Item = styled.li`
  list-style-type: none;

  ${`.${ITEM_CLASSNAME}`} {
    cursor: pointer;

    padding: ${({ theme }) => theme.spacing(3, 4)};

    background-color: ${({ theme }) => theme.palette.background.default};

    transition: ${({ theme }) =>
      theme.transitions.create('color', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      })};

    &:hover {
      background-color: ${({ theme }) => theme.palette.background.element};
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      padding: ${({ theme }) => theme.spacing(5, 4)};

      border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    }
  }
`;
