import { type Meta, type StoryObj } from '@storybook/react';
import { type PropsWithChildren, useRef, useState } from 'react';

import { Grid } from '../Grid';
import { ConfigProvider } from '../ConfigProvider';
import errorIllustration from '../../../ui/illustrations/error.svg';
import { Button } from '../Button';

import { Iframe } from './Iframe';

/**
 * Iframe позволяет отображать контент из указанного URL.
 */
const meta: Meta<typeof Iframe> = {
  title: 'Components/Data Display/Iframe',
  component: Iframe,
};

export default meta;

type Story = StoryObj<typeof Iframe>;

export const Interaction: Story = {
  args: {
    src: 'https://www.youtube.com/embed/k85mRPqvMbE',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Container = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: '',
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <div style={{ width: '430px', height: '250px' }}>{children}</div>
    </ConfigProvider>
  );
};

const ReloadContainer = ({ children }: PropsWithChildren) => {
  const [key, setKey] = useState(1);

  const reload = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <Grid container spacing={2}>
      <Button onClick={reload}>Перезагрузить</Button>

      <Container key={key}>{children}</Container>
    </Grid>
  );
};

export const Example = () => {
  return (
    <ReloadContainer>
      <Iframe src="https://www.youtube.com/embed/k85mRPqvMbE" />
    </ReloadContainer>
  );
};

export const LoadingContent = () => {
  return (
    <ReloadContainer>
      <Iframe
        loadingContent="loading..."
        src="https://www.youtube.com/embed/k85mRPqvMbE"
      />
    </ReloadContainer>
  );
};

export const Error = () => {
  const ref = useRef<HTMLIFrameElement>(null);

  const triggerIframeError = () => {
    ref.current?.dispatchEvent(
      new ErrorEvent('error', {
        message: 'Ошибка при нажатии на кнопку',
      }),
    );
  };

  return (
    <Grid container spacing={2}>
      <Button fullWidth onClick={triggerIframeError}>
        Вызвать ошибку
      </Button>
      <Container>
        <Iframe ref={ref} src="https://www.youtube.com/embed/k85mRPqvMbE" />
      </Container>
    </Grid>
  );
};
