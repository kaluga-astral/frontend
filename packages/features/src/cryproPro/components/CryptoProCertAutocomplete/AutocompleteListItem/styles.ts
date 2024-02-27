import {
  Avatar,
  ListItemIcon,
  MenuItem,
  OverflowTypography,
  type TypographyProps,
  styled,
} from '@astral/ui';

export const StyledAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.primary[800]};
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
`;

export const SideLabel = styled.div`
  display: flex;
  align-self: start;
  justify-content: end;

  width: 20%;
`;

export const LabelTitle = styled(OverflowTypography)<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  display: flex;
  place-self: center center;

  padding-left: ${({ theme }) => theme.spacing(4)};
`;

export const GroupMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== 'checked',
})<{ checked?: boolean }>`
  ${({ theme, checked }) =>
    checked && `background-color: ${theme.palette.primary[100]};`}
  align-items: flex-start;

  padding: 0;
`;

export const Content = styled(MenuItem)`
  justify-content: space-around;
  justify-items: start;

  width: 100%;
  margin-left: 0;
  padding: ${({ theme }) => theme.spacing(2, 4, 2, 0)};

  && > span {
    margin-left: 0;

    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  }
`;
