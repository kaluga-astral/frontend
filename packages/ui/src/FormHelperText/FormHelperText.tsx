import { Fragment, useMemo } from 'react';
import { ErrorFillSm, SuccessFillSm } from '@astral/icons';

import { styled } from '../styles';

import { FormHelperTextProps } from './types';

const styles = `
    display: inline-flex;
    alignitems: center;
    justify-content: center;
    width: 16px;
    vertical-align: middle;
  `;

const SuccessIcon = styled(SuccessFillSm)(styles);

const ErrorIcon = styled(ErrorFillSm)(styles);

const Content = styled.span`
  vertical-align: middle;
`;

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

  return (
    <Fragment>
      {Icon}
      <Content>{children}</Content>
    </Fragment>
  );
};

export default FormHelperText;
