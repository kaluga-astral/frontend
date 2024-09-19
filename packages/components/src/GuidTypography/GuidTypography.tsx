import {
  OverflowTypography,
  type OverflowedTypographyProps,
} from '../OverflowTypography';

export type GuidTypographyProps = OverflowedTypographyProps;

export const GuidTypography = (props: GuidTypographyProps) => {
  return <OverflowTypography visibleLastSymbolsCount={4} {...props} />;
};
