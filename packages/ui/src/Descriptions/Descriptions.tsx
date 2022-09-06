import { ReactNode } from 'react';

import { Grid, GridProps } from '../Grid';
import { Typography } from '../Typography';

import { Item } from './Item';

export type DescriptionProps = GridProps & {
  /**
   * @example <Descriptions title="Заголовок">...</Descriptions>
   * Заголовок блока значений
   */
  title?: string;
  /**
   * Элемент Description.Item
   */
  children?: ReactNode;
};

export const Descriptions = ({
  children,
  title,
  ...props
}: DescriptionProps) => {
  return (
    <Grid container spacing={4}>
      {title && (
        <Grid row="1">
          <Typography variant="h5">{title}</Typography>
        </Grid>
      )}
      <Grid container {...props}>
        {children}
      </Grid>
    </Grid>
  );
};

Descriptions.Item = Item;
