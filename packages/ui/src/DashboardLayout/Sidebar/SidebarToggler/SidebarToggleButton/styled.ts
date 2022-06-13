import { styled } from '../../../../styles';
import { Button } from '../../../../Button';

export const SidebarTogglerButtonRoot = styled(Button)`
  width: 100%;
  gap: 0;
  justify-content: flex-start;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(2)};
  &.MuiButton-root .MuiButton-startIcon {
    margin: 0;
  }
`;
