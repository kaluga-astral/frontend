import React, { ReactNode } from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { Grid } from '../Grid';

type Props = {
  children: ReactNode;
  /*
   * Callback для отправки ошибки в Sentry
   */
  // eslint-disable-next-line
  captureException: (error: any) => void;
};

type State = {
  error: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    error: false,
  };

  public static getDerivedStateFromError() {
    return { error: true };
  }

  public componentDidCatch(error: Error) {
    this.props.captureException(error);
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

export default ErrorBoundary;
