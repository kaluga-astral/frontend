import { styled } from '../../../../styles';
import { Button } from '../../../../Button';

export const SidebarTogglerButtonRoot = styled(Button)`
  gap: 0;
  justify-content: flex-start;
  width: 100%;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(2)};

  &.MuiButton-root .MuiButton-startIcon {
    margin: 0;
  }
`;

export const SidebarTogglerIconWrapper = styled.div`
  height: 24px;
`;

export const SidebarTogglerOffIconWrapper = styled('div', {
  shouldForwardProp: (props) => props !== 'isOpen',
})<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const SidebarTogglerOnIconWrapper = styled('div', {
  shouldForwardProp: (props) => props !== 'isOpen',
})<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (!isOpen ? 'block' : 'none')};
`;
