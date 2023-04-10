import {
  Avatar,
  ListItemIcon,
  MenuItem,
  Typography,
  TypographyProps,
  styled,
} from '@astral/ui';

export const AutocompleteListAvatarIcon = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.primary[800]};
`;

export const AutocompleteListItemLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AutocompleteListItemLabelTitle = styled(
  Typography,
)<TypographyProps>`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize[14]};
`;

export const AutocompleteListItemIcon = styled(ListItemIcon)`
  display: flex;
  align-self: center;
  justify-self: center;
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

export const GroupMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== 'checked',
})<{ checked?: boolean }>`
  ${({ theme, checked }) =>
    checked && 'background-color: ' + theme.palette.primary[100] + ';'}
  align-items: flex-start;
  padding: 0;
`;

export const AutocompleteListItemContent = styled(MenuItem)`
  justify-content: space-between;
  justify-items: start;
  width: 100%;
  margin-left: 0;
  padding: ${({ theme }) => theme.spacing(1.5, 4, 1.5, 0)};

  && > span {
    margin-left: 0;

    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  }
`;
