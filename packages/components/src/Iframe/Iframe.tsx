import {
  type IframeHTMLAttributes,
  type SyntheticEvent,
  forwardRef,
  useState,
} from 'react';

import { ContentState, type ContentStateProps } from '../ContentState';

import { StyledIframe, Wrapper } from './styles';
import { DEFAULT_SANDBOX_POLICY } from './constants';

export type IframeProps = {
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
  sandbox?: IframeHTMLAttributes<HTMLIFrameElement>['sandbox'];
  /*
   * Наименование iframe
   */
  title?: string;
} & Pick<ContentStateProps, 'loadingContent'>;

export const Iframe = forwardRef<HTMLIFrameElement, IframeProps>(
  (
    {
      src,
      loadingContent,
      onLoading,
      onError,
      sandbox = DEFAULT_SANDBOX_POLICY,
      title,
    }: IframeProps,
    ref,
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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
      <Wrapper>
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
          <StyledIframe
            src={src}
            ref={ref}
            hidden={isLoading}
            {...{ sandbox: sandbox || undefined }}
            onLoad={handleEndLoadingIframe}
            onError={handleErrorIframe}
            onErrorCapture={handleErrorIframe}
            title={title}
          />
        )}
      </Wrapper>
    );
  },
);
