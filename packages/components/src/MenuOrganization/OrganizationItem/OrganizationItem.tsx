import { forwardRef } from 'react';

import { MenuItem } from '../../MenuItem';
import { OverflowTypography } from '../../OverflowTypography';
import { Typography } from '../../Typography';
import { Grid } from '../../Grid';

import { OrganizationWrapper } from './styles';

export type OrganizationItemProps = {
  onClick?: () => void;
  selected?: boolean;
  name: string;
  kpp: string;
  inn: string;
};

export const OrganizationItem = forwardRef<
  HTMLLIElement,
  OrganizationItemProps
>(({ onClick, selected, name, inn = '-', kpp = '-' }, ref) => {
  return (
    <MenuItem ref={ref} onClick={onClick} selected={selected} disableGutters>
      <OrganizationWrapper container rows={1}>
        <OverflowTypography
          tooltipProps={{ placement: 'top', title: name }}
          variant="h6"
        >
          {name}
        </OverflowTypography>
        <Grid direction="column" spacing={2}>
          <Typography variant="caption" color="textSecondary">
            ИНН {inn}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            КПП {kpp}
          </Typography>
        </Grid>
      </OrganizationWrapper>
    </MenuItem>
  );
});
