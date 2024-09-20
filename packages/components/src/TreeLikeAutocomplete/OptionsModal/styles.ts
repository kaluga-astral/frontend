import { styled } from '../../styles';
import { DialogContent } from '../../DialogContent';

export const StyledDialogContent = styled(DialogContent)`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content 1fr;
  gap: ${({ theme }) => theme.spacing(5)};

  width: 500px;
  height: 500px;
`;

export const TreeListWrapper = styled.div`
  overflow: auto;

  padding: ${({ theme }) => theme.spacing(2, 0)};

  background-color: ${({ theme }) => theme.palette.background.element};
  border: 2px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 3px;
`;
