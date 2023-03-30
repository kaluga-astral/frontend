import { HTMLAttributes, MouseEvent, ReactNode } from 'react';
import {
  ListItemAvatar,
  OverflowTypography,
  Radio,
  Typography,
} from '@astral/ui';

import { CertificateType } from '../types';

import {
  AutocompleteListItemContent,
  AutocompleteListItemLabel,
  AvatarIcon,
  GroupMenuItem,
  ItemIcon,
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

const GROUP_FONT_WEIGHT = '600';

const AutocompleteListItemLabelGroup = ({
  title,
  subtitle,
}: AutocompleteListItemLabelGroupProps) => (
  <AutocompleteListItemLabel>
    <Typography>{title}</Typography>
    <Typography color="grey" colorIntensity="600">
      {subtitle}
    </Typography>
  </AutocompleteListItemLabel>
);

type AutocompleteListItemLabelCheckboxProps = {
  checked?: boolean;
};

const AutocompleteListItemLabelCheckbox = ({
  checked,
}: AutocompleteListItemLabelCheckboxProps) => {
  return (
    <ItemIcon>
      <Radio checked={checked} />
    </ItemIcon>
  );
};

type AutocompleteListItemControlProps = {
  checked?: boolean;
};

export const AutocompleteListItemControl = ({
  checked,
}: AutocompleteListItemControlProps) => {
  return <AutocompleteListItemLabelCheckbox checked={checked} />;
};

export const AutocompleteListItem = ({
  title,
  inn,
  notAfter,
  checked,
  type,
  disabled = false,
  ...restProps
}: AutocompleteListItemProps) => {
  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    if (!restProps.onClick) {
      return;
    }

    event.preventDefault();
    restProps.onClick(event);
  };

  return (
    <GroupMenuItem {...restProps} onClick={handleClick} disabled={disabled}>
      <ItemIcon>
        <ListItemAvatar>
          <AvatarIcon>{type}</AvatarIcon>
        </ListItemAvatar>
      </ItemIcon>
      <AutocompleteListItemContent
        labelPlacement="start"
        control={<AutocompleteListItemControl checked={checked} />}
        label={
          <AutocompleteListItemLabelGroup
            title={
              <OverflowTypography
                variant="div"
                fontSize={14}
                fontWeight={GROUP_FONT_WEIGHT}
              >
                {title}
              </OverflowTypography>
            }
            subtitle={
              <>
                <OverflowTypography variant="div">
                  {inn}&bull;
                  {notAfter}
                </OverflowTypography>
              </>
            }
          />
        }
      />
    </GroupMenuItem>
  );
};
