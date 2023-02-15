import React, { ReactNode } from 'react';

import { Button } from '../Button';
import { ConfigContext } from '../ConfigProvider';
import { Typography } from '../Typography';
import { Grid } from '../Grid';

type Props = {
  /**
   * Компонент, ошибки которого будут перехвачены
   */
  children: ReactNode;
};

type State = {
  /**
   * Флаг наличия перехваченной ошибки
   */
  error: boolean;
};

/**
 * Компонент, который перехватывает ошибки в оберутых в него компонентах.
 * При перехвате ошибки осуществляется ее отправка в captureException
 * @example <ErrorBoundary><InsecureComponent/></ErrorBoundary>
 */
class ErrorBoundary extends React.Component<Props, State> {
  static contextType = ConfigContext;

  context!: React.ContextType<typeof ConfigContext>;

  public state: State = {
    error: false,
  };

  public static getDerivedStateFromError() {
    return { error: true };
  }

  public componentDidCatch(error: Error) {
    this.context.captureException(error);
  }

  handleReloadPage() {
    location.reload();
  }

  public render() {
    if (this.state.error) {
      return (
        <Grid alignItems="center" justifyContent="center">
          <Typography variant="h4" paragraph>
            Произошла ошибка
          </Typography>
          <Button onClick={this.handleReloadPage}>
            Перезагрузить страницу
          </Button>
        </Grid>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
