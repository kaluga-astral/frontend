import { styled } from '../styles/';
import { Typography } from '../Typography';

export const AccordionHeader = styled.header<{ withStartAdorment: boolean }>`
  display: grid;
  grid-column-gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: ${({ withStartAdorment }) =>
    withStartAdorment ? '24px 1fr 24px' : ' 1fr 24px'};

  cursor: pointer;
`;

export const AccordionContentWrapper = styled.div<{
  withStartAdorment: boolean;
}>`
  margin-left: ${({ theme, withStartAdorment }) =>
    theme.spacing(withStartAdorment ? 8 : 0)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const AccordionSummary = styled(Typography)`
  align-self: center;
`;

export const AccordionChevronWrapper = styled.div`
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
