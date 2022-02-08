import { Fragment } from 'react';
import { Box } from '@mui/material';

export type FormHelperTextFactoryProps = {
  path: React.SVGProps<SVGPathElement>;
  text: string;
};

export const FormHelperTextFactory: React.FC<FormHelperTextFactoryProps> = (
  props
) => {
  const { path, text } = props;

  return (
    <Fragment>
      <Box
        component="svg"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          verticalAlign: 'middle',
        }}
        width="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {path}
      </Box>
      <Box
        component="span"
        sx={{
          verticalAlign: 'middle',
        }}
      >
        {text}
      </Box>
    </Fragment>
  );
};

export default FormHelperTextFactory;
