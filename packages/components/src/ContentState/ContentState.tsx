import { type ReactNode, useContext } from 'react';

import { Placeholder, type PlaceholderProps } from '../Placeholder';
import { CircularProgress } from '../CircularProgress';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { ErrorBoundary } from '../ErrorBoundary';
import { ConfigContext } from '../ConfigProvider';

import { LoadingContainer } from './styles';
import { type ContentStateErrorProps } from './types';

export type ContentStateProps = {
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
  errorState?: Omit<ContentStateErrorProps, 'imgAlt'> & { imgAlt?: string };
  /**
   * Флаг для отображения custom состояния ошибки
   */
  isCustom?: boolean;
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
  isCustom,
  errorState,
  customState,
  children,
  loadingContent: LoadingContent = <CircularProgress color="primary" />,
}: ContentStateProps) => {
  const { imagesMap } = useContext(ConfigContext);

  if (isLoading) {
    return <LoadingContainer>{LoadingContent}</LoadingContainer>;
  }

  if (isCustom && customState) {
    return <Placeholder {...customState} />;
  }

  if (isError && errorState) {
    const {
      title = 'Произошла ошибка',
      imgAlt,
      imgSrc = imagesMap.defaultErrorImgSrc,
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

  return <ErrorBoundary>{children}</ErrorBoundary>;
};
