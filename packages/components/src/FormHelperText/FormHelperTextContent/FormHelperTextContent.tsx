import { ReactNode, useMemo } from 'react';

import {
  FormHelperTextErrorIcon,
  FormHelperTextMessage,
  FormHelperTextSuccessIcon,
  FormHelperTextWrapper,
} from './styles';

export type FormHelperTextContentProps = {
  success?: boolean;
  error?: boolean;
  children?: ReactNode;
};

export const FormHelperTextContent = ({
  success,
  error,
  children,
}: FormHelperTextContentProps) => {
  const Icon = useMemo(() => {
    if (success) {
      return (
        <FormHelperTextSuccessIcon aria-label="FormHelperTextContentSuccessIcon" />
      );
    }

    if (error) {
      return (
        <FormHelperTextErrorIcon aria-label="FormHelperTextContentErrorIcon" />
      );
    }

    return null;
  }, [success, error]);

  if (children) {
    return (
      <FormHelperTextWrapper error={error} success={success}>
        {Icon}
        <FormHelperTextMessage>{children}</FormHelperTextMessage>
      </FormHelperTextWrapper>
    );
  }

  return null;
};
