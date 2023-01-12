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
