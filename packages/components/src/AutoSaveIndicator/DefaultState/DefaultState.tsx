import { AutosaveFillMd } from '@astral/icons';

import { DEFAULT_STATE, POPOVER_MESSAGE } from '../constants';

import { StyledTooltip, StyledTypography } from './styles';

export const DefaultState = () => {
  return (
    <>
      <StyledTypography variant="caption">{DEFAULT_STATE}</StyledTypography>
      <StyledTooltip
        title={POPOVER_MESSAGE}
        placement="bottom"
        // withoutContainer=false необходим для размещения тултипа на иконку
        withoutContainer={false}
      >
        <AutosaveFillMd />
      </StyledTooltip>
    </>
  );
};
