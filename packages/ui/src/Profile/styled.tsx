import { ChevronDOutlineMd } from '@astral/icons';

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

export const Annotation = styled.div`
  color: ${({ theme }) => theme.palette.grey[500]};
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: ${({ theme }) => theme.typography.pxToRem(16)};
`;

export const Chevron = styled(ChevronDOutlineMd)<{ open: boolean }>`
  transform: ${({ open }) => {
    return open ? 'rotateZ(180deg)' : ' rotateZ(0deg)';
  }};

  transition: ${({ theme }) => {
    return theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }) ;
  }};
`;
