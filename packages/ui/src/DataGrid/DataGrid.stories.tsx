import { Story } from '@storybook/react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box } from '@mui/material';

import { DataGrid } from './DataGrid';

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
};

const dataRows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 4, col1: 'Hello', col2: 'World' },
  { id: 5, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 6, col1: 'MUI', col2: 'is Amazing' },
  { id: 7, col1: 'Hello', col2: 'World' },
  { id: 8, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 9, col1: 'MUI', col2: 'is Amazing' },
  { id: 10, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 11, col1: 'MUI', col2: 'is Amazing' },
];

const dataColumns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  {
    field: 'col3',
    headerName: 'Column 3',
    renderCell: () => <b>kek</b>,
    sortable: false,
  },
];

export const Showcase: Story = () => (
  <Box height={540}>
    <DataGrid rows={dataRows} columns={dataColumns} />
  </Box>
);

const Template: Story = ({ rows, columns, ...args }) => (
  <DataGrid rows={rows} columns={columns} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  columns: dataColumns,
  rows: dataRows,
};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
