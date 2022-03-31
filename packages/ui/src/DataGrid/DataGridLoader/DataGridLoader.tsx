import { LinearProgress } from '@mui/material';

import { Backdrop, LoaderWrapper, StyledDivider } from './styled';
import { DataGridLoaderProps } from './types';

const DataGridLoader = ({ loading = false }: DataGridLoaderProps) => {
  return (
    <LoaderWrapper>
      {loading && <Backdrop />}
      {loading ? <LinearProgress /> : <StyledDivider />}
    </LoaderWrapper>
  );
};

export default DataGridLoader;
