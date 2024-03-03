import { type ReactNode, useEffect, useRef, useState } from 'react';

import { ContentState } from '../ContentState';
import { CircularProgress } from '../CircularProgress';

import {
  ALL_DURATION_MS,
  LOADING_DISPLAY_DELAY_MS,
  SESSION_KEY,
} from './constants';
import {
  FirstStep,
  Greeting,
  GreetingWrapper,
  LastStep,
  ProductWrapper,
  UserName,
} from './styles';

export type WelcomeScreenProps = {
  logo?: ReactNode;
  productName?: string;
  userName?: string;
  isLoading?: boolean;
  isError?: boolean;
  children: ReactNode;
  onRetry: () => void;
};

export const WelcomeScreen = ({
  logo,
  productName,
  userName,
  isLoading,
  isError,
  children,
  onRetry,
}: WelcomeScreenProps) => {
  const prevLoading = useRef<boolean>();

  const [isShowLoader, setShowLoader] = useState(false);
  const [isShowGreetings, setShowGreetings] = useState(false);

  useEffect(() => {
    if (isLoading && !prevLoading.current) {
      prevLoading.current = true;
    }
  }, [isLoading]);

  useEffect(() => {
    // Показываем приветствие только один раз в рамках сессии
    const isExistSession = Boolean(sessionStorage.getItem(SESSION_KEY));

    if (!isExistSession && !isLoading && !isError && prevLoading.current) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setShowGreetings(true);

      const timer = setTimeout(() => {
        setShowGreetings(false);
      }, ALL_DURATION_MS);

      return () => clearTimeout(timer);
    }
  }, [isLoading, isError]);

  useEffect(() => {
    // Отложенный запуск отображения лоадера, на случай получения данных < LOADING_DISPLAY_DELAY_MS
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, LOADING_DISPLAY_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContentState
      isLoading={isLoading}
      isError={isError}
      loadingContent={
        isShowLoader ? <CircularProgress color="primary" /> : <></>
      }
      errorState={{ errorList: [''], onRetry }}
    >
      {isShowGreetings ? (
        <>
          <FirstStep>
            <ProductWrapper>
              {logo}
              {productName}
            </ProductWrapper>
          </FirstStep>

          <LastStep>
            <ProductWrapper>
              {logo}
              {productName}
            </ProductWrapper>

            <GreetingWrapper>
              <Greeting variant="h2" color="grey" colorIntensity="500">
                Добро пожаловать{userName ? ',' : ''}
              </Greeting>
              {userName && (
                <UserName variant="h1" color="textSecondary">
                  {userName}
                </UserName>
              )}
            </GreetingWrapper>
          </LastStep>
        </>
      ) : (
        children
      )}
    </ContentState>
  );
};
