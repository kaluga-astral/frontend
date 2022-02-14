import { ErrorFillSm, SuccessFillSm } from '@astral/icons';

import { styled } from '../styles';

const styles = `
  display: inline-flex;
  justify-content: center;
  width: 16px;
  vertical-align: middle;
`;

export const SuccessIcon = styled(SuccessFillSm)(styles);

export const ErrorIcon = styled(ErrorFillSm)(styles);

export const Content = styled.span`
  vertical-align: middle;
`;
