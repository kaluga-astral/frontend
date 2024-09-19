import { type TypographyProps } from '../Typography';
import { OverflowTypography } from '../OverflowTypography';

import { Wrapper } from './styles';

export type GuidTypographyProps = TypographyProps;

export const GuidTypography = (props: GuidTypographyProps) => {
  return (
    <Wrapper>
      <OverflowTypography
        visibleLastSymbolsCount={4}
        tooltipProps={{ title: undefined }}
        {...props}
      />
    </Wrapper>
  );
};
