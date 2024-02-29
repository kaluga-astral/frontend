import { type SyntheticEvent, forwardRef, useState } from 'react';

import { ContentState, type ContentStateProps } from '../ContentState';

import { IframeStyled, Root } from './styles';

type IframeProps = {
  /*
   * URL для отображения в iframe
   */
  src: string;
  /*
   * Будет вызван после загрузки
   */
  onLoading?: (event?: SyntheticEvent) => void;
  /*
   * Будет вызван при получении ошибки в iframe
   */
  onError?: (event?: SyntheticEvent) => void;
  /*
   * Политики безопасности
   */
  sandbox?: string;
  /*
   * Наименование iframe
   */
  title?: string;
} & Pick<ContentStateProps, 'loadingContent'>;

export const Iframe = forwardRef<HTMLIFrameElement, IframeProps>(
  (
    { src, loadingContent, onLoading, onError, sandbox, title }: IframeProps,
    ref,
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const isIframeHidden = isLoading || isError;

    const startRefetch = () => {
      setIsError(false);
      setIsLoading(true);
    };

    const handleErrorIframe = (event: SyntheticEvent) => {
      setErrorMessage((event.nativeEvent as ErrorEvent)?.message);
      setIsError(true);
      onError?.(event);
    };

    const handleEndLoadingIframe = (event: SyntheticEvent) => {
      setIsLoading(false);
      onLoading?.(event);
    };

    return (
      <Root>
        <ContentState
          isLoading={isLoading}
          isError={isError}
          loadingContent={loadingContent}
          errorState={{
            errorList: [errorMessage || ''],
            imgAlt: 'Произошла ошибка',
            onRetry: startRefetch,
          }}
        >
          <></>
        </ContentState>
        {!isError && (
          <IframeStyled
            src={src}
            ref={ref}
            hidden={isIframeHidden}
            sandbox={
              sandbox ||
              'allow-forms allow-modals allow-scripts allow-same-origin'
            }
            onLoad={handleEndLoadingIframe}
            onError={handleErrorIframe}
            onErrorCapture={handleErrorIframe}
            title={title}
          />
        )}
      </Root>
    );
  },
);
