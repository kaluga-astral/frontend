import { ReactNode, useContext } from 'react';

import { Button, CircularProgress, Placeholder, Typography } from '..';
import { PlaceholderProps } from '../Placeholder';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { ConfigContext } from '../ConfigProvider';

import { LoadingContainer } from './styles';
import { ContentStateErrorProps } from './types';

type ContentStateProps = {
  /**
   * Флаг состояния загрузки
   */
  isLoading?: boolean;
  /**
   * Элемент для отображения состояния загрузки
   */
  loadingContent?: JSX.Element | string;
  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;
  /**
   * Параметры для отображения состояния ошибки
   */
  errorState?: ContentStateErrorProps;
  /**
   * Параметры для отображения custom состояния ошибки
   */
  customState?: PlaceholderProps;
  /**
   * Элементы для отображения состояния "Успех"
   */
  children: ReactNode;
};

export const ContentState = ({
  isLoading,
  isError,
  errorState,
  customState,
  children,
  loadingContent: LoadingContent = <CircularProgress color="primary" />,
}: ContentStateProps) => {
  const { captureException } = useContext(ConfigContext);

  if (isLoading) {
    return <LoadingContainer>{LoadingContent}</LoadingContainer>;
  }

  if (isError && customState) {
    return <Placeholder {...customState} />;
  }

  if (isError && errorState) {
    const {
      title = 'Произошла ошибка',
      imgAlt,
      imgSrc,
      errorList,
      onRetry,
      actions = <Button onClick={onRetry}>Попробовать снова</Button>,
    } = errorState;

    const description = errorList.map((errorMessage) => (
      <Typography key={errorMessage} component="p">
        {errorMessage}
      </Typography>
    ));

    return (
      <Placeholder
        title={title}
        description={description}
        imgAlt={imgAlt}
        imgSrc={imgSrc}
        Actions={actions}
      />
    );
  }

  return (
    <ErrorBoundary captureException={captureException}>
      {children}
    </ErrorBoundary>
  );
};
