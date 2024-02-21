import { type ReactNode, useMemo } from 'react';

import { ErrorIcon, Message, SuccessIcon, Wrapper } from './styles';

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
      return <SuccessIcon />;
    }

    if (error) {
      return <ErrorIcon />;
    }

    return null;
  }, [success, error]);

  if (children) {
    return (
      <Wrapper error={error} success={success}>
        {Icon}
        <Message>{children}</Message>
      </Wrapper>
    );
  }

  return null;
};
