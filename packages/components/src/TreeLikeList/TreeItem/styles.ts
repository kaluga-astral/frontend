import { typographyClasses } from '@mui/material';

import { TreeItem } from '../../Tree';
import { styled } from '../../styles';

export const StyledItemContent = styled(TreeItem)`
  & > div > div {
    padding-top: 0;
    padding-bottom: 0;

    & > .${typographyClasses.root} {
      margin-left: ${({ theme }) => theme.spacing(8)};
    }
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
