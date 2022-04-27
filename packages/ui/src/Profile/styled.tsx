import { Button } from '../Button';
import { styled } from '../styles';

export const Root = styled(Button)`
  display: flex;
  align-items: center;
  height: auto;
  padding: ${({ theme }) => theme.spacing(0.5, 0.5, 0.5, 2)};

  text-align: right;
`;

export const User = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

export const Credentials = styled.div`
  display: block;
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
