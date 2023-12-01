import { type HTMLAttributes, type ReactNode } from 'react';
import { ListItemAvatar, OverflowTypography } from '@astral/ui';

import { type CertificateType } from '../../../constants';

import {
  AutocompleteListAvatarIcon,
  AutocompleteListItemContent,
  AutocompleteListItemIcon,
  AutocompleteListItemLabel,
  AutocompleteListItemLabelTitle,
  AutocompleteListItemSideLabel,
  GroupMenuItem,
} from './styles';
import { getShortFullName } from './utils';

type AutocompleteListItemProps = Omit<
  HTMLAttributes<HTMLLIElement>,
  'title'
> & {
  title: ReactNode;
  sidetitle: string | null;
  inn: ReactNode;
  notAfter: ReactNode;
  type: CertificateType;
  checked?: boolean;
  disabled?: boolean;
};

type AutocompleteListItemLabelGroupProps = {
  title: ReactNode;
  subtitle: ReactNode;
  sidetitle: string;
};

const AutocompleteListItemLabelGroup = ({
  title,
  subtitle,
  sidetitle,
}: AutocompleteListItemLabelGroupProps) => (
  <>
    <AutocompleteListItemLabel>
      <OverflowTypography>
        <AutocompleteListItemLabelTitle>{title}</AutocompleteListItemLabelTitle>
      </OverflowTypography>
      <OverflowTypography color="grey" colorIntensity="600">
        {subtitle}
      </OverflowTypography>
    </AutocompleteListItemLabel>
    <AutocompleteListItemSideLabel>
      <OverflowTypography color="grey" colorIntensity="600">
        {sidetitle}
      </OverflowTypography>
    </AutocompleteListItemSideLabel>
  </>
);

export const AutocompleteListItem = ({
  title,
  sidetitle,
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
          title={title}
          subtitle={
            <>
              {inn}&bull;
              {notAfter}
            </>
          }
          sidetitle={getShortFullName(sidetitle)}
        />
      </AutocompleteListItemContent>
    </GroupMenuItem>
  );
};
