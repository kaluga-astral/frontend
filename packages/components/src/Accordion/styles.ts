import { styled } from '../styles/';
import { Typography } from '../Typography';

export const Header = styled.header<{ withStartAdorment: boolean }>`
  cursor: pointer;

  display: grid;
  grid-column-gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: ${({ withStartAdorment }) =>
    withStartAdorment ? '24px 1fr 24px' : ' 1fr 24px'};
`;

export const ContentWrapper = styled.div<{
  withStartAdorment: boolean;
}>`
  margin-left: ${({ theme, withStartAdorment }) =>
    theme.spacing(withStartAdorment ? 8 : 0)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const Summary = styled(Typography)`
  align-self: center;
`;

export const ChevronWrapper = styled.div`
  overflow: hidden;

  width: 24px;
  height: 24px;
`;
