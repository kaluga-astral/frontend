import { DragOutlineMd } from '@astral/icons';

import { styled } from '../../styles';

type StyledItemProps = {
  $isDragging: boolean;
  $isDisabled?: boolean;
  $transform?: string;
  $transition?: string;
  $isActionsExists?: boolean;
};

export const ListItem = styled('div', {
  shouldForwardProp: (prop) =>
    ![
      '$isDragging',
      '$isDisabled',
      '$transform',
      '$transition',
      '$isActionsExists',
    ].includes(prop),
})<StyledItemProps>`
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'grab')};

  transform: ${({ $transform }) => $transform};

  display: grid;
  grid-template-columns: ${({ $isActionsExists }) =>
    $isActionsExists ? 'auto 104px' : 'auto'};
  align-items: center;

  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(4)};

  opacity: ${({ $isDragging }) => ($isDragging ? 0.2 : 1)};
  border: ${({ theme, $isDisabled }) =>
    `1px solid ${$isDisabled ? theme.palette.grey[100] : theme.palette.grey[200]}}`};
  border-radius: ${({ theme }) => theme.shape.medium};
  box-shadow: ${({ theme, $isDragging, $isDisabled }) => {
    if ($isDisabled) {
      return 'none';
    }

    if ($isDragging) {
      return theme.elevation[200];
    }

    return theme.elevation.lightShadow;
  }};

  transition: ${({ $transition }) => $transition};
`;

export const DragIcon = styled(DragOutlineMd)`
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: end;
`;

export const IconWrapper = styled('div')`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
`;

export const Content = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
`;
