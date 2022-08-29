import { ReactNode, useMemo } from 'react';

import { Grid, GridProps } from '../Grid';
import { Typography } from '../Typography';

type StorybookExampleTemplateProps = {
  title: string;
  subtitle?: string[];
  children: ReactNode;
  gridProps?: GridProps;
};

export const StorybookExampleTemplate = ({
  title,
  subtitle = [],
  children,
  gridProps,
}: StorybookExampleTemplateProps) => {
  const subtitles = useMemo(() => {
    return subtitle?.map((text) => <Typography paragraph>{text}</Typography>);
  }, [subtitle]);

  return (
    <>
      <Typography variant="h5" paragraph>
        {title}
      </Typography>
      {subtitles}
      <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
        <Grid container spacing={4} {...gridProps}>
          {children}
        </Grid>
      </div>
    </>
  );
};
