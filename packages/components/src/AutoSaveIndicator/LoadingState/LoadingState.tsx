import { LOADING_MESSAGE } from '../constants';

import { LoadingIcon, StyledTypography } from './styles';

export const LoadingState = () => {
  return (
    <>
      <StyledTypography variant="caption">{LOADING_MESSAGE}</StyledTypography>
      <LoadingIcon />
    </>
  );
};
