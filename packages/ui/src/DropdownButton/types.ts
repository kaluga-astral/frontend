import { ButtonProps } from '../Button';

export type DropdownButtonProps = Omit<ButtonProps, 'endIcon' | 'loading'> & {
  name: string;
};
