import { styled } from '../styles';
import { Menu } from '../Menu';

export const WidgetMenu = styled(Menu)`
  .MuiPaper-root > .MuiList-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 285px;
    min-height: 124px;
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }
`;
