import { type ReactNode, useMemo } from 'react';

import { ErrorIcon, Message, SuccessIcon, Wrapper } from './styles';

type ContentProps = {
  success?: boolean;
  error?: boolean;
  children?: ReactNode;
};

export const Content = ({ success, error, children }: ContentProps) => {
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
