import { Avatar, type AvatarProps } from '../Avatar';
import { Button } from '../Button';
import { OverflowTypography } from '../OverflowTypography';
import { styled } from '../styles';

export const ProfileRoot = styled(Button)`
  overflow: hidden;
  display: flex;
  align-items: center;

  max-width: 300px;
  height: auto;
  padding: ${({ theme }) => theme.spacing(0.5, 0.5, 0.5, 2)};

  text-align: right;
`;

export const ProfileUser = styled.div`
  overflow: hidden;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

export const ProfileCredentials = styled.div`
  overflow: hidden;
`;

export const ProfileDisplayName = styled(OverflowTypography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  line-height: ${({ theme }) => theme.typography.pxToRem(14)};
`;

export const ProfileAnnotation = styled(OverflowTypography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: ${({ theme }) => theme.typography.pxToRem(16)};
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const ProfileAvatar = styled(Avatar)<AvatarProps>`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 32px;
    height: 32px;
  }
`;
