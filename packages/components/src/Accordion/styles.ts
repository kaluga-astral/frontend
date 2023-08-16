import { styled } from '../styles/';
import { Grid } from '../Grid';
import { Typography } from '../Typography';

export const AccordionHeader = styled(Grid)`
  grid-column-gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: 24px 1fr 24px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  cursor: pointer;
`;

export const AccordionContentWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing(8)};
`;

export const AccordionTitle = styled(Typography)`
  align-self: center;
`;
