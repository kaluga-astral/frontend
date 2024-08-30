import { SUCCESS_STATE } from '../constants';

import { StyledTypography, SuccessIcon } from './styles';

export const SuccessState = () => {
  return (
    <>
      <StyledTypography variant="caption">{SUCCESS_STATE}</StyledTypography>
      <SuccessIcon />
    </>
  );
};
