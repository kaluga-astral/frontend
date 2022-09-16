import { styled } from '../styles';
import { Menu } from '../Menu';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  min-height: 150px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const WidgetMenu = styled(Menu)`
  .MuiList-root {
    padding: 0;
  }
`;
