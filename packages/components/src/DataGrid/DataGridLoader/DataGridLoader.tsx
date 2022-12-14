import {
  Backdrop,
  LoaderWrapper,
  StyledDivider,
  StyledLinearProgress,
} from './styles';

export type DataGridLoaderProps = {
  loading?: boolean;
  disabled?: boolean;
  withFooter: boolean;
  footerHeight: number;
};

const DataGridLoader = ({
  loading = false,
  disabled = false,
  withFooter,
  footerHeight,
}: DataGridLoaderProps) => {
  return (
    <LoaderWrapper>
      {(loading || disabled) && (
        <Backdrop withFooter={withFooter} footerHeight={footerHeight} />
      )}
      {loading && <StyledLinearProgress />}
      {!loading && <StyledDivider />}
    </LoaderWrapper>
  );
};

export default DataGridLoader;
