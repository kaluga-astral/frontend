import React, { type ReactNode } from 'react';

import { ConfigContext } from '../ConfigProvider';
import { InternalErrorPlaceholder } from '../InternalErrorPlaceholder';
import { OutdatedReleasePlaceholder } from '../OutdatedReleasePlaceholder';

import { TypeError } from './enums';
import { CONDITION_TYPE_ERROR } from './constants';

export type State = {
  /**
   * Флаг наличия перехваченной ошибки
   */
  hasError: boolean;
  /**
   * Тип перехваченной ошибки
   */
  typeError: TypeError;
};

type Props = {
  /**
   * Компонент, ошибки которого будут перехвачены
   */
  children: ReactNode;
};

/**
 * Отображение при определенной ошибке
 */
const PLACEHOLDER_TYPE_ERROR: Record<TypeError, ReactNode> = {
  [TypeError.OutdatedRelease]: <OutdatedReleasePlaceholder />,
  [TypeError.Default]: <InternalErrorPlaceholder />,
};

/**
 * Компонент, который перехватывает ошибки в обернутых в него компонентах.
 * При перехвате ошибки осуществляется ее отправка в captureException
 * @example <ErrorBoundary><InsecureComponent/></ErrorBoundary>
 */
class ErrorBoundary extends React.Component<Props, State> {
  static contextType = ConfigContext;

  context!: React.ContextType<typeof ConfigContext>;

  public state: State = {
    hasError: false,
    typeError: TypeError.Default,
  };

  public static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      typeError:
        CONDITION_TYPE_ERROR.find(({ condition }) => condition(error))?.type ??
        TypeError.Default,
    };
  }

  public componentDidCatch(error: Error) {
    this.context.captureException(error);
  }

  public render() {
    if (this.state.hasError) {
      return PLACEHOLDER_TYPE_ERROR[this.state.typeError];
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
