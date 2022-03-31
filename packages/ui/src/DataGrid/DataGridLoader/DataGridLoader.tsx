import {
  Backdrop,
  LoaderWrapper,
  StyledDivider,
  StyledLinearProgress,
} from './styled';
import { DataGridLoaderProps } from './types';

const DataGridLoader = ({ loading = false }: DataGridLoaderProps) => {
  return (
    <LoaderWrapper>
      {loading && <Backdrop />}
      {loading ? <StyledLinearProgress /> : <StyledDivider />}
    </LoaderWrapper>
  );
};

export default DataGridLoader;
