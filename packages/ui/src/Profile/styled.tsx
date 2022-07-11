import { Button } from '../Button';
import { styled } from '../styles';

export const ProfileRoot = styled(Button)`
  display: flex;
  align-items: center;
  height: auto;
  padding: ${({ theme }) => theme.spacing(0.5, 0.5, 0.5, 2)};

  text-align: right;
`;

export const ProfileUser = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

export const ProfileCredentials = styled.div`
  display: block;
`;

export const ProfileDisplayName = styled.span`
  display: block;

  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: ${({ theme }) => theme.typography.pxToRem(14)};
`;

export const ProfileAnnotation = styled.span`
  display: block;

  color: ${({ theme }) => theme.palette.grey[500]};
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: ${({ theme }) => theme.typography.pxToRem(16)};
`;
