import { type PropsWithChildren, forwardRef } from 'react';

import { type ButtonProps } from '../Button';

import { StyledButton } from './styles';

export type ProductProps = ButtonProps & {
  logo: (props: PropsWithChildren<{}>) => JSX.Element;
  name: string;
};

export const Product = forwardRef<HTMLButtonElement, ProductProps>(
  (props, ref) => {
    const { logo: Logo, name, variant = 'text', ...restProps } = props;

    return (
      <StyledButton
        ref={ref}
        {...restProps}
        variant={variant}
        startIcon={<Logo />}
      >
        {name}
      </StyledButton>
    );
  },
);

export default Product;
