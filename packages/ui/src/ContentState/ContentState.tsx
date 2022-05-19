import { Fragment, ReactNode } from 'react';

import { Button, CircularProgress, Placeholder, Typography } from '..';
import { PlaceholderProps } from '../Placeholder/types';

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

export const ContentState = (props: ContentStateProps) => {
  const {
    isLoading,
    loadingContent: LoadingContent = <CircularProgress color="primary" />,
    isError,
    errorState,
    isCustom,
    customState,
    children,
  } = props;

  if (isLoading) return <Fragment>{LoadingContent}</Fragment>;

  if (isCustom && customState) {
    return <Placeholder {...customState} />;
  }

  if (isError && errorState) {
    const {
      title = 'Произошла ошибка',
      imgAlt,
      imgSrc,
      errorList,
      onRetry,
      Actions = <Button onClick={onRetry}>Попробовать снова</Button>,
    } = errorState;

    const description = errorList.map((item, index) => (
      <Fragment key={index}>
        <Typography component="span">{item}</Typography>
        <br />
      </Fragment>
    ));

    return (
      <Placeholder
        title={title}
        description={description}
        imgAlt={imgAlt}
        imgSrc={imgSrc}
        Actions={Actions}
      />
    );
  }

  return <Fragment>{children}</Fragment>;
};

export default ContentState;
