import { type HTMLAttributes, type ReactNode } from 'react';
import { ListItemAvatar, OverflowTypography } from '@astral/ui';

import { type CertificateType } from '../../../constants';

import {
  AvatarIcon,
  Content,
  GroupMenuItem,
  Label,
  LabelTitle,
  SideLabel,
  StyledListItemIcon,
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
    <Label>
      <OverflowTypography>
        <LabelTitle>{title}</LabelTitle>
      </OverflowTypography>
      <OverflowTypography color="grey" colorIntensity="600">
        {subtitle}
      </OverflowTypography>
    </Label>
    <SideLabel>
      <OverflowTypography color="grey" colorIntensity="600">
        {sidetitle}
      </OverflowTypography>
    </SideLabel>
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
      <StyledListItemIcon>
        <ListItemAvatar>
          <AvatarIcon>{type}</AvatarIcon>
        </ListItemAvatar>
      </StyledListItemIcon>
      <Content>
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
      </Content>
    </GroupMenuItem>
  );
};
