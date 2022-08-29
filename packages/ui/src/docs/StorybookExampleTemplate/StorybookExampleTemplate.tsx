import { ReactNode, useMemo } from 'react';

import { Typography } from '../../Typography';

type StorybookExampleTemplateProps = {
  title: string;
  descriptionList?: string[];
  children: ReactNode;
};

export const StorybookExampleTemplate = ({
  title,
  descriptionList = [],
  children,
}: StorybookExampleTemplateProps) => {
  const subtitles = useMemo(() => {
    return descriptionList?.map((text) => (
      <Typography paragraph>{text}</Typography>
    ));
  }, [descriptionList]);

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
