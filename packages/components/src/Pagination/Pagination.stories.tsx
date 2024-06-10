import { type ChangeEvent, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Grid } from '../Grid';
import { Typography } from '../Typography';

import { Pagination } from './Pagination';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=376-5799)
 * ### [Guide]()
 */
const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Interaction: Story = {
  args: {
    count: 10,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <>
    <Pagination count={10} />
  </>
);

export const HideButtons = () => (
  <>
    <Pagination count={10} hidePrevButton hideNextButton />
  </>
);

export const PaginationRanges = () => (
  <Grid container rowSpacing={3} columns={1}>
    <Pagination count={10} defaultPage={6} siblingCount={0} />
    <Pagination count={10} defaultPage={6} />
    <Pagination count={10} defaultPage={6} siblingCount={0} boundaryCount={2} />
    <Pagination count={10} defaultPage={6} boundaryCount={2} />
  </Grid>
);

export const Controlled = () => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Grid container spacing={3} columns={1}>
      <Typography>Страница: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Grid>
  );
};
