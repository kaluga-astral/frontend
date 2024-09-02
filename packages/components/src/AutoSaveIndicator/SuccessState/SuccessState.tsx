import { SUCCESS_MESSAGE } from '../constants';

import { StyledTypography, SuccessIcon } from './styles';

export const SuccessState = () => {
  return (
    <>
      <StyledTypography variant="caption">{SUCCESS_MESSAGE}</StyledTypography>
      <SuccessIcon />
    </>
  );
};
