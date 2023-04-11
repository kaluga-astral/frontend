import { HTMLAttributes, ReactNode } from 'react';
import { ListItemAvatar, OverflowTypography, Typography } from '@astral/ui';

import { CertificateType } from '../../../constants';

import {
  AutocompleteListAvatarIcon,
  AutocompleteListItemContent,
  AutocompleteListItemIcon,
  AutocompleteListItemLabel,
  AutocompleteListItemLabelTitle,
  GroupMenuItem,
} from './styles';

type AutocompleteListItemProps = Omit<
  HTMLAttributes<HTMLLIElement>,
  'title'
> & {
  title: ReactNode;
  inn: ReactNode;
  notAfter: ReactNode;
  type: CertificateType;
  checked?: boolean;
  disabled?: boolean;
};

type AutocompleteListItemLabelGroupProps = {
  title: ReactNode;
  subtitle: ReactNode;
};

const AutocompleteListItemLabelGroup = ({
  title,
  subtitle,
}: AutocompleteListItemLabelGroupProps) => (
  <AutocompleteListItemLabel>
    <OverflowTypography>{title}</OverflowTypography>
    <Typography color="grey" colorIntensity="600">
      {subtitle}
    </Typography>
  </AutocompleteListItemLabel>
);

export const AutocompleteListItem = ({
  title,
  inn,
  notAfter,
  checked,
  type,
  disabled = false,
  ...restProps
}: AutocompleteListItemProps) => {
  return (
    <GroupMenuItem {...restProps} disabled={disabled} checked={checked}>
      <AutocompleteListItemIcon>
        <ListItemAvatar>
          <AutocompleteListAvatarIcon>{type}</AutocompleteListAvatarIcon>
        </ListItemAvatar>
      </AutocompleteListItemIcon>
      <AutocompleteListItemContent>
        <AutocompleteListItemLabelGroup
          title={
            <AutocompleteListItemLabelTitle>
              {title}
            </AutocompleteListItemLabelTitle>
          }
          subtitle={
            <>
              <OverflowTypography>
                {inn}&bull;
                {notAfter}
              </OverflowTypography>
            </>
          }
        />
      </AutocompleteListItemContent>
    </GroupMenuItem>
  );
};
