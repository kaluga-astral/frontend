import { styled } from '../../styles';

export const StyledDrawer = styled.aside`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};

  grid-area: sidebar;

  background-color: ${({ theme }) => theme.palette.background.element};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;
