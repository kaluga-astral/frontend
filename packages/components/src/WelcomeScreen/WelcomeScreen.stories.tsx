import { type PropsWithChildren, useEffect, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import errorIllustration from '../../../ui/illustrations/error.svg';
import { styled } from '../styles';
import { Button } from '../Button';
import { ConfigProvider } from '../ConfigProvider';
import { DashboardLayout } from '../DashboardLayout';

import { WelcomeScreen } from './WelcomeScreen';

/**
 * ### Приветственный экран для мобильных версий приложений
 * Отображается только при первичной загрузки приложения в рамках вкладки. При обновлении страницы не отображается
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=20192-42967&mode=design&t=OBUErQX5rM7PPiQQ-0)
 * ### [Guide]()
 */
const meta: Meta<typeof WelcomeScreen> = {
  title: 'Components/Utils/WelcomeScreen',
  component: WelcomeScreen,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof WelcomeScreen>;

const MainWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;

  /* Добавляем опциональность на dvh, для корректной проверки компонента через browserstack под старыми браузерами */
  @supports (height: 100dvh) {
    height: 100dvh;
  }
`;

const Container = ({ children }: PropsWithChildren) => (
  <ConfigProvider
    imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: '',
      outdatedReleaseErrorImgSrc: '',
    }}
  >
    <ContentWrapper>{children}</ContentWrapper>
  </ConfigProvider>
);

const MOCK_DATA = {
  logo: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 6.10352e-05C5.1195 6.10352e-05 4 1.11956 4 2.50006V3.00006H13.75C15.545 3.00006 17 4.45506 17 6.25006V11.2501C17 12.2166 16.2165 13.0001 15.25 13.0001H8.75C7.7835 13.0001 7 12.2166 7 11.2501V8.00006H5C4.4475 8.00006 4 8.44756 4 9.00006V13.5001C4 14.8806 5.1195 16.0001 6.5 16.0001H17.5C18.8805 16.0001 20 14.8806 20 13.5001V2.50006C20 1.11956 18.8805 6.10352e-05 17.5 6.10352e-05H6.5Z"
        fill="#8566FF"
      />
      <path
        d="M2.5 4.00006C1.1195 4.00006 0 5.11956 0 6.50006V17.5001C0 18.8806 1.1195 20.0001 2.5 20.0001H13.5C14.8805 20.0001 16 18.8806 16 17.5001V17.0001H6.25C4.455 17.0001 3 15.5451 3 13.7501V8.75006C3 7.78356 3.7835 7.00006 4.75 7.00006H11.25C12.2165 7.00006 13 7.78356 13 8.75006V12.0001H15C15.5525 12.0001 16 11.5526 16 11.0001V6.50006C16 5.11956 14.8805 4.00006 13.5 4.00006H2.5Z"
        fill="#5D3FD4"
      />
    </svg>
  ),
  productName: 'Астрал.ЭДО',
  userName: 'Иван Иванович',
};

type UseMockFetchResult<TData> = {
  data: null | TData;
  isLoading: boolean;
  isError: boolean;
  fetch: () => void;
};

const useMockFetch = function <TData>(
  mockData: TData,
): UseMockFetchResult<TData> {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);

    setTimeout(() => {
      setData(mockData);
      setIsLoading(false);
    }, 1000);
  };

  return {
    data,
    isLoading,
    isError: false,
    fetch: fetchData,
  };
};

export const Interaction: Story = {
  args: {
    productName: 'Астрал',
    userName: 'Иван Иванович',
    isLoading: false,
    isError: false,
    isSuccess: true,
    errorMsg: 'Ошибка 500',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const { data, isLoading, isError, fetch } = useMockFetch(MOCK_DATA);

  useEffect(() => {
    fetch();
  }, []);

  const handleClearStorage = () => sessionStorage.clear();

  const Logo = () => data?.logo;

  const isSuccess = !isLoading && !isError && Boolean(data);

  return (
    <Container>
      <WelcomeScreen
        {...data}
        isSuccess={isSuccess}
        isLoading={isLoading}
        isError={isError}
        onRetry={fetch}
      >
        <DashboardLayout>
          <DashboardLayout.Header
            product={{
              name: 'Астрал.ЭДО',
              logo: () => <Logo />,
            }}
          />
          <DashboardLayout.Main>
            <MainWrapper>
              <p>
                Приветствие отображается только при первичной загрузки
                приложения в рамках вкладки. Для повторного просмотра
                приветствия необходимо очистить sessionStorage
              </p>

              <Button onClick={handleClearStorage}>
                Очистить sessionStorage
              </Button>
            </MainWrapper>
          </DashboardLayout.Main>
        </DashboardLayout>
      </WelcomeScreen>
    </Container>
  );
};

export const Loading = () => (
  <Container>
    <WelcomeScreen isLoading isSuccess={false} onRetry={() => undefined}>
      Content
    </WelcomeScreen>
  </Container>
);

export const Error = () => {
  const handleRetry = () => alert('Повторить запрос');

  return (
    <Container>
      <WelcomeScreen
        isError
        isSuccess={false}
        errorMsg="Ошибка 500"
        onRetry={handleRetry}
      >
        Content
      </WelcomeScreen>
    </Container>
  );
};
