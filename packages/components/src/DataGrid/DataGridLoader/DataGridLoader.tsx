import {
  Backdrop,
  LoaderWrapper,
  StyledDivider,
  StyledLinearProgress,
} from './styles';

export type DataGridLoaderProps = {
  loading?: boolean;
  disabled?: boolean;
};

const DataGridLoader = ({
  loading = false,
  disabled = false,
}: DataGridLoaderProps) => {
  return (
    <LoaderWrapper>
      {(loading || disabled) && <Backdrop />}
      {loading && <StyledLinearProgress />}
      {!loading && <StyledDivider />}
    </LoaderWrapper>
  );
};

export default DataGridLoader;
