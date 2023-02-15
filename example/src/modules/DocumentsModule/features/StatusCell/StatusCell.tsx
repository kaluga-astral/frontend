import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Indicator, Typography } from '@example/shared';
import { DocumentPackageState } from '@example/modules/DocumentsModule';

import { StatusContainer } from './styles';
import { createStatusStore } from './store';

export type Props = {
  status: DocumentPackageState;
  statusDisplayName?: string;
};

export const StatusCell = observer(({ status, statusDisplayName }: Props) => {
  const [{ getIndicatorColor, getLabelColor }] = useState(createStatusStore());

  if (!statusDisplayName) {
    return <Typography variant="ui">Нет информации о статусе</Typography>;
  }

  return (
    <StatusContainer>
      <Indicator color={getIndicatorColor(status)} />
      <Typography variant="ui" color={getLabelColor(status)}>
        {statusDisplayName}
      </Typography>
    </StatusContainer>
  );
});
