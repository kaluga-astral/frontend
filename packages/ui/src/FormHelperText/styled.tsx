import { ErrorFillSm, SuccessFillSm } from '@astral/icons';

import { Theme } from '../theme';
import { styled } from '../styles';

const getStyles = (theme: Theme) => {
  return `display: inline-flex;
  justify-content: center;
  font-size: ${theme.typography.h5.fontSize};
  vertical-align: middle;`;
};

export const SuccessIcon = styled(SuccessFillSm)`
  ${({ theme }) => getStyles(theme)}
`;

export const ErrorIcon = styled(ErrorFillSm)`
  ${({ theme }) => getStyles(theme)}
`;

export const Content = styled.span`
  vertical-align: middle;
`;
