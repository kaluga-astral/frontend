import { Fragment, useMemo } from 'react';

import { FormHelperTextProps } from './types';
import { Content, ErrorIcon, SuccessIcon } from './styled';

export const FormHelperText: React.FC<FormHelperTextProps> = (props) => {
  const { success, error, children } = props;

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
      <Fragment>
        {Icon}
        <Content>{children}</Content>
      </Fragment>
    );
  }

  return null;
};

export default FormHelperText;
