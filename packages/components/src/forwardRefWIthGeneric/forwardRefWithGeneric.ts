import { ReactElement, Ref, RefAttributes, forwardRef } from 'react';

/**
 * Proxy для forwardRef, который позволяет использовать generic для forwardRef. Из коробки forwardRef пользоваться generic'ом не дает
 * @example
 * ```ts
 * type Props<T> = {
 *   prop: T;
 * };
 *
 * const InnerComponent = <T,>({ prop }: Props<T>) => null;
 *
 * const Component = forwardRefWithGeneric(InnerComponent);
 * ```
 */
export const forwardRefWithGeneric = <T, P = {}>(
  render: (props: P, ref: Ref<T>) => ReactElement | null,
): ((props: P & RefAttributes<T>) => ReactElement | null) =>
  forwardRef<T, P>(render) as any;
