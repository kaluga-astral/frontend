import { styled } from '../../../styles';

export const Root = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;

  text-align: right;
`;

export const DisplayName = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: ${({ theme }) => theme.typography.pxToRem(14)};
`;

export const Email = styled.div`
  color: ${({ theme }) => theme.palette.grey[500]};
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: ${({ theme }) => theme.typography.pxToRem(16)};
`;
