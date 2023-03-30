import {
  ListItemIcon,
  MenuItem,
  FormControlLabel as UIFormControlLabel,
  styled,
} from '@astral/ui';
import { Avatar } from '@mui/material';

export const AvatarIcon = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.primary[800]};
`;

export const AutocompleteListItemLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemIcon = styled(ListItemIcon)`
  display: flex;
  align-self: center;
  justify-self: center;
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

export const GroupMenuItem = styled(MenuItem)`
  align-items: flex-start;
  padding: 0;
`;

export const GroupControlLabel = styled(UIFormControlLabel)`
  justify-content: space-between;
  width: 100%;
  margin-left: 0;
  padding: ${({ theme }) => theme.spacing(1.5, 4, 1.5, 0)};

  & > span {
    margin-left: 0 !important;

    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  }
`;

export const AutocompleteListItemContent = styled(GroupControlLabel)`
  justify-items: start;
`;
