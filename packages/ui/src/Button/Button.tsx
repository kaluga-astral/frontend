import MuiButton, { ButtonProps } from '@mui/material/Button';

export const Button = ({ ...props }: ButtonProps) => {
  return <MuiButton {...props}>Button</MuiButton>;
};

export default Button;
