import { type ReactNode } from 'react';

import { ContentState } from '../ContentState';
import { CircularProgress } from '../CircularProgress';

import { useLogic } from './hooks';
import {
  FirstStep,
  Greeting,
  GreetingWrapper,
  LastStep,
  ProductWrapper,
  UserName,
} from './styles';

export type WelcomeScreenProps = {
  /**
   * Логотип продукта
   */
  logo?: ReactNode;

  /**
   * Название продукта
   */
  productName?: string;

  /**
   * Имя пользователя
   */
  userName?: string;

  /**
   * Текст ошибки
   */
  errorMsg?: string;

  /**
   * Флаг наличия данных
   * Позволяет запускает анимацию сразу, применяется когда к моменту рендера компонента данные уже есть
   */
  isSuccessLoadData?: boolean;

  /**
   * Флаг загрузки данных
   */
  isLoading?: boolean;

  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;

  /**
   * Содержимое компонента, отображению которого должно предшествовать приветствие
   * В большинстве случаев это должен быть DashboardLayout
   */
  children: ReactNode;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   * Должна инициализировать повторный запрос данных
   */
  onRetry: () => void;
};

export const WelcomeScreen = ({
  logo,
  productName,
  userName,
  errorMsg,
  isSuccessLoadData,
  isLoading,
  isError,
  children,
  onRetry,
}: WelcomeScreenProps) => {
  const { isShowLoader, isShowGreetings, isShowContent } = useLogic({
    isSuccessLoadData,
    isLoading,
    isError,
  });

  return (
    <ContentState
      isLoading={isLoading}
      isError={isError}
      loadingContent={
        // Лоадер отображается с задержкой, указанной в константе LOADING_DISPLAY_DELAY_MS
        isShowLoader ? <CircularProgress color="primary" /> : <></>
      }
      errorState={{ errorList: [errorMsg || ''], onRetry }}
    >
      {isShowGreetings && (
        <>
          <FirstStep role="presentation">
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
      )}

      {isShowContent && <>{children}</>}
    </ContentState>
  );
};
