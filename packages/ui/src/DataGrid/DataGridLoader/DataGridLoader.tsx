import {
  Backdrop,
  LoaderWrapper,
  StyledDivider,
  StyledLinearProgress,
} from './styles';

export type DataGridLoaderProps = {
  loading?: boolean;
};

const DataGridLoader = ({ loading = false }: DataGridLoaderProps) => {
  return (
    <LoaderWrapper>
      {loading && <Backdrop />}
      {loading ? <StyledLinearProgress /> : <StyledDivider />}
    </LoaderWrapper>
  );
};

export default DataGridLoader;
