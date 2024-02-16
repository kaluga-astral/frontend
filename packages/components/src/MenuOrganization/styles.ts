import { typographyClasses } from '@mui/material';

import { styled } from '../styles/styled';

export const OrganizationsButtonWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const OrganizationGroupTitle = styled.div`
  > li.${typographyClasses.root} {
    position: sticky;
    z-index: 1;
    top: 0;

    padding: ${({ theme }) => theme.spacing(3, 2, 1, 3)};

    background: ${({ theme }) => theme.palette.background.paper};
  }
`;

export const OrganizationsWrapper = styled.div`
  overflow-y: auto;

  max-height: 310px;
`;
