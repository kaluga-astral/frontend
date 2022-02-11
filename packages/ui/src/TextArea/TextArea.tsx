import { TextField } from '../TextField';

import { TextAreaProps } from './types';

export const TextArea = ({ minRows = 7, ...props }: TextAreaProps) => {
  return <TextField multiline minRows={minRows} {...props} />;
};
