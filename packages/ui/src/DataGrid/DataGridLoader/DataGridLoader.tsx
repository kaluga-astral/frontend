import { LoaderWrapper, StyledDivider, StyledLinearProgress } from './styles';

export type DataGridLoaderProps = {
  loading?: boolean;
};

const DataGridLoader = ({ loading = false }: DataGridLoaderProps) => {
  return (
    <LoaderWrapper>
      {loading && <StyledLinearProgress />}
      {!loading && <StyledDivider />}
    </LoaderWrapper>
  );
};

export default DataGridLoader;
