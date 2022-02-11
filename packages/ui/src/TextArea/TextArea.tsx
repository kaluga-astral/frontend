import { TextField } from '../TextField';

import { TextAreaProps } from './types';

export const TextArea = ({ rows = 7, ...props }: TextAreaProps) => {
  return <TextField multiline rows={rows} {...props} />;
};
