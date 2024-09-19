import { type TypographyProps } from '../Typography';
import { OverflowTypography } from '../OverflowTypography';

export type GuidTypographyProps = TypographyProps;

export const GuidTypography = (props: GuidTypographyProps) => {
  return (
    <OverflowTypography
      visibleLastSymbolsCount={4}
      tooltipProps={{ title: undefined }}
      {...props}
    />
  );
};
