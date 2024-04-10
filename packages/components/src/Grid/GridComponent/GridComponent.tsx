import {
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from 'react';

export type GridComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /**
   * Тип элемента
   * @default 	'div'
   */
  component?: ElementType;
  children?: ReactNode;
};

export const GridComponent = forwardRef<HTMLDivElement, GridComponentProps>(
  ({ component: Component = 'div', ...props }, ref) => {
    return <Component ref={ref} {...props} />;
  },
);
