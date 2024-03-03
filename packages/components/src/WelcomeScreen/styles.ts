import { Typography } from '../Typography';
import { keyframes, styled } from '../styles';

import {
  APPEAR_DURATION_TEXT_IN_LAST_STEP_MS,
  FIRST_STEP_DURATION_MS,
  LAST_STEP_DURATION_MS,
} from './constants';

const createStepKeyframes = (
  stepStartShowing: string,
  stepEndShowing: string,
) => `
  from {
    opacity: 0;
  }
  ${stepStartShowing} {
    opacity: 1;
  }
  ${stepEndShowing} {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeFirstStep = keyframes`${createStepKeyframes('30%', '60%')}`;
const fadeLastStep = keyframes`${createStepKeyframes('20%', '99%')}`;

const appearText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FirstStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100dvh;

  opacity: 0;
  background-color: ${({ theme }) => theme.palette.background.paper};

  animation: ${fadeFirstStep} ${FIRST_STEP_DURATION_MS}ms linear;
  animation-fill-mode: both;
`;

export const LastStep = styled.div`
  position: absolute;
  top: 0;

  display: grid;
  grid-template-rows: max-content 1fr;
  gap: ${({ theme }) => theme.spacing(10)};

  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(10, 7)};

  opacity: 0;
  background-color: ${({ theme }) => theme.palette.background.paper};

  animation: ${fadeLastStep} ${LAST_STEP_DURATION_MS}ms linear;
  animation-fill-mode: both;
  animation-delay: ${FIRST_STEP_DURATION_MS}ms;
`;

export const ProductWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;

  font-size: ${({ theme }) => theme.typography.pxToRem(20)};

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Greeting = styled(Typography)`
  margin-top: -15vh;

  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: ${({ theme }) => theme.typography.pxToRem(28)};

  opacity: 0;

  animation: ${appearText} ${APPEAR_DURATION_TEXT_IN_LAST_STEP_MS}ms linear;
  animation-fill-mode: both;
  animation-delay: ${FIRST_STEP_DURATION_MS +
  APPEAR_DURATION_TEXT_IN_LAST_STEP_MS}ms;
`;

export const UserName = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(28)};
  line-height: ${({ theme }) => theme.typography.pxToRem(32)};

  opacity: 0;

  animation: ${appearText} ${APPEAR_DURATION_TEXT_IN_LAST_STEP_MS}ms linear;
  animation-fill-mode: both;
  animation-delay: ${FIRST_STEP_DURATION_MS +
  APPEAR_DURATION_TEXT_IN_LAST_STEP_MS * 2}ms;
`;
