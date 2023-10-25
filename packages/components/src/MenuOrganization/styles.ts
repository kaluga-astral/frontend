import { typographyClasses } from '@mui/material';

import { Grid } from '../Grid';
import { styled } from '../styles/styled';

export const OrganizationsButtonWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const OrganizationGroupTitle = styled.div`
  > li.${typographyClasses.root} {
    position: sticky;
    top: 0;
    z-index: 1;

    padding: ${({ theme }) => theme.spacing(3, 2, 1, 2)};

    background: ${({ theme }) => theme.palette.background.paper};
  }
`;

export const OrganizationsWrapper = styled.div`
  width: 260px;
  max-height: 310px;
  overflow-y: auto;
`;

export const OrganizationData = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;
