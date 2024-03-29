import { ErrorFillSm, SuccessFillSm } from '@astral/icons';

import { type Theme } from '../../theme';
import { styled } from '../../styles';

const getStyles = (theme: Theme) => {
  return `display: inline-flex;
  justify-content: center;
  font-size: ${theme.typography.h5.fontSize};
  vertical-align: middle;`;
};

type WrapperProps = {
  success?: boolean;
  error?: boolean;
};

// flex необходим, для того, чтобы span не менял высоту полей и имел фиксированную высоту в 16px
export const Wrapper = styled.span<WrapperProps>`
  display: flex;

  color: ${({ success, error, theme }) => {
    if (success) {
      return theme.palette.success.dark;
    }

    if (error) {
      return theme.palette.error.dark;
    }

    return 'inherit';
  }};
`;

export const SuccessIcon = styled(SuccessFillSm)`
  ${({ theme }) => getStyles(theme)}
`;

export const ErrorIcon = styled(ErrorFillSm)`
  ${({ theme }) => getStyles(theme)}
`;

export const Message = styled.span`
  vertical-align: middle;
`;
