import { styled } from '../styles';
import { Menu } from '../Menu';

export const StyledMenu = styled(Menu)`
  .MuiPaper-root > .MuiList-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 285px;
    min-height: 100px;
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }
`;
