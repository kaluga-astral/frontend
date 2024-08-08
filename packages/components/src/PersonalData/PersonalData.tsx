import {
  type FunctionComponentElement,
  cloneElement,
  isValidElement,
  useContext,
  useMemo,
} from 'react';

import { ConfigContext } from '../ConfigProvider';

type WithClassName = {
  className?: string;
};

type PersonalDataProps<TProps extends WithClassName> = {
  /**
   * дочерний элемент который должен уметь принимать className
   */
  children: FunctionComponentElement<TProps>;
};

/**
 * компонент для обогащения дочернего элемента цсс классом для сокрытия персональной информации от трекеров
 */
export const PersonalData = <TProps extends WithClassName>({
  children,
}: PersonalDataProps<TProps>) => {
  const { hidePersonalData, hidePersonalDataClassname } =
    useContext(ConfigContext);

  const className = useMemo(
    () =>
      [children.props.className, hidePersonalDataClassname]
        .filter(Boolean)
        .join(' '),
    [children.props.className, hidePersonalDataClassname],
  );

  if (!hidePersonalData) {
    return children;
  }

  const optimizedChildren = isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  return cloneElement(optimizedChildren, {
    ...children.props,
    className,
  });
};
