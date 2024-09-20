import { AutosaveFillMd } from '@astral/icons';

import { DEFAULT_MESSAGE } from '../constants';

import { StyledTooltip, StyledTypography } from './styles';

export const DefaultState = () => {
  return (
    <>
      <StyledTypography variant="caption">{DEFAULT_MESSAGE}</StyledTypography>
      <StyledTooltip
        title="Изменения на этой странице сохраняются автоматически"
        placement="bottom"
        // withoutContainer=false необходим для размещения тултипа на иконку
        withoutContainer={false}
      >
        <AutosaveFillMd />
      </StyledTooltip>
    </>
  );
};
