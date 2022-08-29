import { ReactNode, useMemo } from 'react';

import { Typography } from '../../Typography';

type StorybookExampleTemplateProps = {
  title: string;
  description?: string[];
  children: ReactNode;
};

export const StorybookExampleTemplate = ({
  title,
  description = [],
  children,
}: StorybookExampleTemplateProps) => {
  const subtitles = useMemo(() => {
    return description?.map((text) => (
      <Typography paragraph>{text}</Typography>
    ));
  }, [description]);

  return (
    <>
      <Typography variant="h5" paragraph>
        {title}
      </Typography>
      {subtitles}
      <div style={{ padding: '32px 0', background: '#FAFBFC' }}>{children}</div>
    </>
  );
};
