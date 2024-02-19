import { CircularProgress } from '../../CircularProgress';

import { DataListLoaderRoot } from './styles';

export const DataListLoader = () => (
  <DataListLoaderRoot>
    <CircularProgress color="primary" />
  </DataListLoaderRoot>
);
