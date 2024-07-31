import { styled } from '../../styles';
import { ROOT_ACTION_CELL_WIDTH } from '../constants';

export const Wrapper = styled('header', {
  shouldForwardProp: (prop) => !['$gridColumns'].includes(prop),
})<{
  $gridColumns: string;
}>`
  display: grid;
  grid-template-columns: ${({ $gridColumns }) => $gridColumns};

  border-bottom: 2px solid ${({ theme }) => theme.palette.divider};
`;

export const CheckboxCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${ROOT_ACTION_CELL_WIDTH}px;
`;
