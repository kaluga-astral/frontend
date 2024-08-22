import { type Meta, type StoryObj } from '@storybook/react';
import {
  type MouseEventHandler,
  type PropsWithChildren,
  useState,
} from 'react';

import { Grid } from '../Grid';
import { styled } from '../styles';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { ConfigProvider } from '../ConfigProvider';
import errorIllustration from '../../../ui/illustrations/error.svg';
import certificatesNotFound from '../../../ui/illustrations/certificates-not-found.svg';
import noDataIllustration from '../../../ui/illustrations/no-data.svg';
import outdatedReleaseIllustration from '../../../ui/illustrations/outdated-release.svg';
import techSupIllustration from '../../../ui/illustrations/technical-support.svg';

import { ContentState } from './ContentState';

/**
 * ContentState - это компонент, позволяющий отображать статусы выполнения асинхронных операций (загрузка, успех и ошибка)
 *
 * ### [Guide]()
 */
const meta: Meta<typeof ContentState> = {
  title: 'Components/Data Display/ContentState',
  component: ContentState,
};

export default meta;

type Story = StoryObj<typeof ContentState>;

export const Interaction: Story = {
  args: {
    children: (
      <>
        <TextField label="Название" />
        <Button>Отправить</Button>
      </>
    ),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const useSimulateLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSucces] = useState(false);

  const TIMEOUT = 1000;

  const fetch = () => {
    setError('');
    setIsLoading(true);
    setIsSucces(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsSucces(true);
    }, TIMEOUT);
  };

  const fetchWithError = () => {
    setIsLoading(true);
    setIsSucces(false);

    setTimeout(() => {
      setIsLoading(false);
      setError('Сервис недоступен');
    }, TIMEOUT);
  };

  return { isLoading, error, fetch, fetchWithError, isSuccess };
};

const BaseContentContainer = styled(Grid)`
  overflow: hidden;
  place-content: center center;

  width: 384px;
  height: 384px;
`;

const Form = ({
  onSubmit,
  children,
}: PropsWithChildren<{ onSubmit: MouseEventHandler<HTMLButtonElement> }>) => {
  return (
    <Grid container spacing={2}>
      <TextField label="Название" />
      <Button onClick={onSubmit}>Отправить</Button>
      {children}
    </Grid>
  );
};

export const Example = () => {
  const { fetch, fetchWithError, isLoading, error } = useSimulateLoading();

  return (
    <BaseContentContainer container>
      <ContentState
        isError={Boolean(error)}
        isLoading={isLoading}
        errorState={{
          imgSrc: errorIllustration,
          imgAlt: 'Ошибка',
          onRetry: fetch,
          errorList: [error],
        }}
      >
        <Form onSubmit={fetch}>
          <Button onClick={fetchWithError}>Отправить с ошибкой</Button>
        </Form>
      </ContentState>
    </BaseContentContainer>
  );
};

export const IsLoading = () => {
  const { fetch, isLoading } = useSimulateLoading();

  return (
    <BaseContentContainer container>
      <ContentState isLoading={isLoading}>
        <Form onSubmit={fetch} />
      </ContentState>
    </BaseContentContainer>
  );
};

export const LoadingContent = () => {
  const { fetch, isLoading } = useSimulateLoading();

  return (
    <BaseContentContainer container>
      <ContentState
        isLoading={isLoading}
        loadingContent="Пожалуйста, подождите..."
      >
        <Form onSubmit={fetch} />
      </ContentState>
    </BaseContentContainer>
  );
};

/**
 * При ошибке по умолчанию отображается ```defaultErrorImgSrc``` из ```ConfigProvider```
 */
export const ErrorState = () => {
  const { fetchWithError, isLoading, error } = useSimulateLoading();

  return (
    <BaseContentContainer container>
      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noDataIllustration,
          outdatedReleaseErrorImgSrc: outdatedReleaseIllustration,
        }}
      >
        <ContentState
          isLoading={isLoading}
          isError={Boolean(error)}
          errorState={{
            imgAlt: 'Ошибка',
            onRetry: fetchWithError,
            errorList: [error],
          }}
        >
          <Form onSubmit={fetchWithError} />
        </ContentState>
      </ConfigProvider>
    </BaseContentContainer>
  );
};

/**
 * Переопределение картинки для ошибки
 *
 * По умолчанию (без указанного ```errorState.imgSrc```) отображается ```defaultErrorImgSrc``` из ```ConfigProvider```
 */
export const ErrorStateWithCustomImg = () => {
  const { fetchWithError, isLoading, error } = useSimulateLoading();

  return (
    <BaseContentContainer container>
      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noDataIllustration,
          outdatedReleaseErrorImgSrc: outdatedReleaseIllustration,
        }}
      >
        <ContentState
          isLoading={isLoading}
          isError={Boolean(error)}
          errorState={{
            imgSrc: techSupIllustration,
            imgAlt: 'Ошибка',
            onRetry: fetchWithError,
            errorList: [error],
          }}
        >
          <Form onSubmit={fetchWithError} />
        </ContentState>
      </ConfigProvider>
    </BaseContentContainer>
  );
};

/**
 * Prop ```CustomState``` позволяет отобразить кастомное состояние при ```isCustom === true```
 *
 * Prop ```CustomState``` принимает объект с props для [Placeholder](/docs/components-placeholder--docs)
 */
export const CustomState = () => {
  const { fetch, isLoading, isSuccess } = useSimulateLoading();

  return (
    <BaseContentContainer container>
      <ContentState
        isLoading={isLoading}
        isCustom={isSuccess}
        customState={{
          imgSrc: certificatesNotFound,
          imgAlt: 'Ваша заявка принята',
          title: 'Ваша заявка принята',
          description: 'Мы свяжемся с вами позже',
        }}
      >
        <Form onSubmit={fetch} />
      </ContentState>
    </BaseContentContainer>
  );
};
