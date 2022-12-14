import { ReactElement, useMemo } from 'react';
import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

import type { StepConnectorProps } from './StepConnector';
import { ArrowConnector } from './ArrowConnector';
import { ConnectorTypes } from './enums';

type StepperPropsWithoutEmotionSpecific =
  WithoutEmotionSpecific<MuiStepperProps>;

type ConnectorProp =
  | `${ConnectorTypes}`
  | ReactElement<StepConnectorProps>
  | null;

export type StepperProps = Omit<
  StepperPropsWithoutEmotionSpecific,
  'connector'
> & {
  connector?: ConnectorProp;
};

export const Stepper = (props: StepperProps) => {
  const { connector } = props;

  const connectorMemo = useMemo(() => {
    if (typeof connector !== 'string') {
      return connector;
    }

    if (ConnectorTypes.Arrow) {
      return <ArrowConnector />;
    }

    return null;
  }, [connector]);

  return <MuiStepper {...props} connector={connectorMemo} />;
};
