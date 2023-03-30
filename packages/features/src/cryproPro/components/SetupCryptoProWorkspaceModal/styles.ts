import { styled } from '@astral/components';

export const WorkspaceInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: ${({ theme }) => theme.spacing(2, 4)};

  & + & {
    border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
  }
`;

export const WorkspaceInfoWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ theme }) => theme.palette.grey[100]};
  border-radius: ${({ theme }) => theme.shape.small};
`;
