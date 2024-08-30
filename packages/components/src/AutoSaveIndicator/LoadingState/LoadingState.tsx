import { LOADING_STATE } from '../constants';

import { LoadingIcon, StyledTypography } from './styles';

export const LoadingState = () => {
  return (
    <>
      <StyledTypography variant="caption">{LOADING_STATE}</StyledTypography>
      <LoadingIcon />
    </>
  );
};
