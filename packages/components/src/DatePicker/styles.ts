import { styled } from '../styles';
import { Button } from '../Button';
import { rgba } from '../utils/colors';

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};

  box-shadow: 0 -1px 10px 0 ${({ theme }) => rgb(theme.palette.grey[900] 0.11)};
`;
