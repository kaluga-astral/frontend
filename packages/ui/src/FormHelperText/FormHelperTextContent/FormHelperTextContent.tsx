import { ReactNode, useMemo } from 'react';

import {
  Content,
  ErrorIcon,
  FormHelperTextWrapper,
  SuccessIcon,
} from './styles';

export type FormHelperTextContentProps = {
  success?: boolean;
  error?: boolean;
  children?: ReactNode;
};

export const FormHelperTextContent: React.FC<FormHelperTextContentProps> = ({
  success,
  error,
  children,
}) => {
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
      <FormHelperTextWrapper error={error} success={success}>
        {Icon}
        <Content>{children}</Content>
      </FormHelperTextWrapper>
    );
  }

  return null;
};
