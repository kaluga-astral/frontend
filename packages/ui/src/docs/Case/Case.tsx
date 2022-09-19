import { ReactNode, useMemo } from 'react';

import { Typography } from '../../Typography';

import { CaseWrapper } from './styles';

type CaseProps = {
  title: string;
  descriptionList?: string[];
  children: ReactNode;
};

export const Case = ({ title, descriptionList = [], children }: CaseProps) => {
  const subtitles = useMemo(() => {
    return descriptionList?.map((text, index) => (
      <Typography key={index} paragraph>
        {text}
      </Typography>
    ));
  }, [descriptionList]);

  return (
    <CaseWrapper>
      <Typography variant="h5" paragraph>
        {title}
      </Typography>
      {subtitles}
      <div
        style={{
          padding: '32px 0',
          background: '#FAFBFC',
          border: '1px solid #DDE2E8',
          borderRadius: 3,
        }}
      >
        {children}
      </div>
    </CaseWrapper>
  );
};
