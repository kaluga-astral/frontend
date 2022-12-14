import { styled } from '../styles';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { Breadcrumbs } from '../Breadcrumbs';

export const PageHeaderWrapper = styled.header`
  display: grid;
  grid-area: header;
  grid-template:
    'breadcrumbs breadcrumbs breadcrumbs'
    'back-btn title actions'
    'back-btn description description'
    'sub-header sub-header sub-header' / min-content 1fr auto;
  padding: ${({ theme }) => theme.spacing(0, 6)};
`;

export const PageHeaderBreadcrumbs = styled(Breadcrumbs)`
  grid-area: breadcrumbs;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const PageHeaderBackButton = styled(IconButton)`
  grid-area: back-btn;
  margin-right: ${({ theme }) => theme.spacing(2.5)};
`;

export const PageSubheader = styled.div`
  grid-area: sub-header;
  padding-top: ${({ theme }) => theme.spacing(6)};
`;

export const PageHeaderDescription = styled(Typography)`
  grid-area: description;
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const PageHeaderTitle = styled(Typography)`
  display: flex;
  grid-area: title;
  align-items: center;

  line-height: ${({ theme }) => theme.typography.pxToRem(32)};
`;
