import {
  Backdrop,
  LoaderWrapper,
  StyledDivider,
  StyledLinearProgress,
} from './styles';

export type DataGridLoaderProps = {
  loading?: boolean;
  withFooter: boolean;
  footerHeight: number;
};

const DataGridLoader = ({
  loading = false,
  withFooter,
  footerHeight,
}: DataGridLoaderProps) => {
  return (
    <LoaderWrapper>
      {loading && (
        <Backdrop withFooter={withFooter} footerHeight={footerHeight} />
      )}
      {loading && <StyledLinearProgress />}
      {!loading && <StyledDivider />}
    </LoaderWrapper>
  );
};

export default DataGridLoader;
