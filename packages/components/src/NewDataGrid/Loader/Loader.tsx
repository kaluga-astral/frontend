import {
  Backdrop,
  LoaderWrapper,
  StyledDivider,
  StyledLinearProgress,
} from './styles';

export type LoaderProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Loader = ({
  isLoading = false,
  isDisabled = false,
}: LoaderProps) => {
  return (
    <LoaderWrapper>
      {(isLoading || isDisabled) && <Backdrop />}
      {isLoading && <StyledLinearProgress />}
      {!isLoading && <StyledDivider />}
    </LoaderWrapper>
  );
};
