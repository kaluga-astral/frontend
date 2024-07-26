import { checkboxClasses, typographyClasses } from '@mui/material';

import { TreeItem } from '../../TreeItem';
import { styled } from '../../../styles';

export const StyledItemContent = styled(TreeItem)`
  & > div > div {
    display: flex;
    flex-direction: column;

    padding-top: 0;
    padding-bottom: 0;

    & > .${typographyClasses.root} {
      margin-left: ${({ theme }) => theme.spacing(8)};
    }

    & > div > .${typographyClasses.root} {
      margin-left: unset;

      & > label .${checkboxClasses.root} {
        padding: ${({ theme }) => theme.spacing(0, 2)};
      }
    }

    & > div::before {
      top: 0;

      height: 50%;
    }
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
