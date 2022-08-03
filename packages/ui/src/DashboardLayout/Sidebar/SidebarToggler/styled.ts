import { styled } from '../../../styles';

import { SidebarTogglerButton } from './SidebarToggleButton';

export const SidebarTogglerRoot = styled(SidebarTogglerButton)`
  height: 40px;
  margin-top: auto;
`;

export const SidebarTogglerContent = styled.span`
  margin-left: ${({ theme }) => theme.spacing(4)};

  white-space: nowrap;
`;
