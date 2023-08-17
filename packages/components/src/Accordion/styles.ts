import { styled } from '../styles/';
import { Typography } from '../Typography';

export const AccordionHeader = styled.header<{ $withStartAdorment: boolean }>`
  display: grid;
  grid-column-gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: ${({ $withStartAdorment }) =>
    $withStartAdorment ? '24px 1fr 24px' : ' 1fr 24px'};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  cursor: pointer;
`;

export const AccordionContentWrapper = styled.div<{
  $withStartAdorment: boolean;
}>`
  margin-left: ${({ theme, $withStartAdorment }) =>
    theme.spacing($withStartAdorment ? 8 : 0)};
`;

export const AccordionTitle = styled(Typography)`
  align-self: center;
`;
