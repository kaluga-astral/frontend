import { type PropsWithChildren, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import mailIllustration from '../../../ui/illustrations/mail.svg';
import errorIllustration from '../../../ui/illustrations/error.svg';
import { ConfigProvider } from '../ConfigProvider';
import { Button } from '../Button';
import { styled } from '../styles';
import { SideDialog } from '../SideDialog';
import { SideDialogContent } from '../SideDialogContent';
import { Alert } from '../Alert';
import { SideDialogContentText } from '../SideDialogContentText';
import { SideDialogActions } from '../SideDialogActions';

import { FeedbackPanel } from './FeedbackPanel';

/**
 * FeedbackPanel позволяет собирать обратную связь от пользователей о продукте.
 * 
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=21898-85561&mode=design&t=6jE4Wj4m0ijKFVSo-0)
 * ### [Guide]()
 */
const meta: Meta<typeof FeedbackPanel> = {
  title: 'Components/FeedbackPanel',
  component: FeedbackPanel,
};

export default meta;

type Story = StoryObj<typeof FeedbackPanel>;

export const Interaction: Story = {
  args: {
    isOpen: true,
    question: "Вам было сложно получить электронную подпись?",
    successImgSrc: mailIllustration,
    textFieldProps: {
      placeholder: 'Что оказалось сложным, а что удобным?',
    },
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

const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 360px;
`;

const Container = ({ children }: PropsWithChildren) => (
  <ConfigProvider
    imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: '',
      outdatedReleaseErrorImgSrc: '',
    }}
  >
    <WrapperContainer>{children}</WrapperContainer>
  </ConfigProvider>
);

export const Example = () => {
  const [isOpen, setOpen] = useState(false);

  const { isLoading, fetch } = useSimulateLoading();

  const handeToggle = () => setOpen((prevState) => !prevState);

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log(JSON.stringify(values, null, 2));
    fetch();
  };

  return (
    <Container>
      <Button onClick={handeToggle}>Оценить</Button>

      <FeedbackPanel
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
        successImgSrc={mailIllustration}
        isVisibleHints
        hints={[
          'Очень сложно',
          'Сложно',
          'Справился, но были трудности',
          'Достаточно просто',
          'Очень легко',
        ]}
        textFieldProps={{
          placeholder: 'Что оказалось сложным, а что удобным?',
        }}
        isLoading={isLoading}
        onClose={handeToggle}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

/**
 * Prop ```isExtended``` с значением ```false``` отключает отображение текстового поля
 */
export const WithoutTextField = () => {
  const [isOpen, setOpen] = useState(false);

  const { isLoading, fetch } = useSimulateLoading();

  const handeToggle = () => setOpen((prevState) => !prevState);

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log(JSON.stringify(values, null, 2));
    fetch();
  };

  return (
    <Container>
      <Button onClick={handeToggle}>Оценить</Button>

      <FeedbackPanel
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
        successImgSrc={mailIllustration}
        isLoading={isLoading}
        isExtended={false}
        onClose={handeToggle}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

/**
 * Prop ```isVisibleHints``` включает отображение подсказок в виде тултипа, при наведении на элемент
 */
export const VisibleHints = () => {
  const [isOpen, setOpen] = useState(false);

  const { isLoading, fetch } = useSimulateLoading();

  const handeToggle = () => setOpen((prevState) => !prevState);

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log(JSON.stringify(values, null, 2));
    fetch();
  };

  return (
    <Container>
      <Button onClick={handeToggle}>Оценить</Button>

      <FeedbackPanel
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
        successImgSrc={mailIllustration}
        isVisibleHints
        isLoading={isLoading}
        isExtended={false}
        onClose={handeToggle}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

/**
 * Prop ```hints``` предназначен для замены дефолтных подсказок на кастомные
 */
export const CustomHints = () => {
  const [isOpen, setOpen] = useState(false);

  const { isLoading, fetch } = useSimulateLoading();

  const handeToggle = () => setOpen((prevState) => !prevState);

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log(JSON.stringify(values, null, 2));
    fetch();
  };

  return (
    <Container>
      <Button onClick={handeToggle}>Оценить</Button>

      <FeedbackPanel
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
        successImgSrc={mailIllustration}
        isVisibleHints
        hints={[
          'Очень сложно',
          'Сложно',
          'Справился, но были трудности',
          'Достаточно просто',
          'Очень легко',
        ]}
        isLoading={isLoading}
        isExtended={false}
        onClose={handeToggle}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export const Error = () => {
  const [isOpen, setOpen] = useState(false);

  const { isLoading, error, fetchWithError } = useSimulateLoading();

  const handeToggle = () => setOpen((prevState) => !prevState);

  const handleSubmit = () => {
    fetchWithError();
  };

  return (
    <Container>
      <Button onClick={handeToggle}>Оценить</Button>

      <FeedbackPanel
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
        errorMsg={error}
        isLoading={isLoading}
        isError={Boolean(error)}
        isExtended={false}
        onClose={handeToggle}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

/**
 * При использовании компонента вместе с модальными окнами, не забывайте добавлять им [disableEnforceFocus](https://mui.com/material-ui/react-modal/#focus-trap)
 */
export const WithOpenSideDialog = () => {
  const [isFeedbackPanelOpen, setIsFeedbackPanelOpen] = useState(false);
  const [isSideDialogOpen, setIsSideDialogOpen] = useState(false);

  const { isLoading, error, fetchWithError } = useSimulateLoading();

  const handeFeedbackPanelToggle = () =>
    setIsFeedbackPanelOpen((prevState) => !prevState);

  const handeSideDialogToggle = () =>
    setIsSideDialogOpen((prevState) => !prevState);

  const handleSubmit = () => {
    fetchWithError();
  };

  return (
    <>
      <Container>
        <Button onClick={handeSideDialogToggle}>SideDialog</Button>

        <SideDialog
          title="Заголовок"
          disableEnforceFocus
          open={isSideDialogOpen}
          onClose={handeSideDialogToggle}
        >
          <SideDialogContent>
            <Alert severity="warning">
              Purus faucibus ornare suspendisse sed nisi lacus sed viverra.
              Quisque id diam vel quam.
            </Alert>
            <br />
            <SideDialogContentText id="alert-dialog-description">
              Заглушка примера текста страницы, который несет очень важный смысл
              для пользователя и предлагает ему варианты выбора действий с
              контентом и в рамках работы приложения.
              {/* cSpell:disable */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus aenean. Sit amet luctus
              venenatis lectus magna. Vitae auctor eu augue ut lectus arcu
              bibendum. Dui accumsan sit amet nulla facilisi morbi tempus.
              Condimentum lacinia quis vel eros donec. Dis parturient montes
              nascetur ridiculus. Purus faucibus ornare suspendisse sed nisi
              lacus sed viverra. Quisque id diam vel quam. Magna sit amet purus
              gravida quis blandit turpis cursus in. Dolor morbi non arcu risus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Arcu cursus
              vitae congue mauris rhoncus aenean. Sit amet luctus venenatis
              lectus magna. Vitae auctor eu augue ut lectus arcu bibendum.
              {/* cSpell:enable */}
            </SideDialogContentText>
          </SideDialogContent>
          <SideDialogActions>
            <Button variant="text" onClick={handeSideDialogToggle}>
              Отмена
            </Button>
            <Button onClick={handeFeedbackPanelToggle}>Оценить</Button>
          </SideDialogActions>

          <FeedbackPanel
            isOpen={isFeedbackPanelOpen}
            question="Вам было сложно получить электронную подпись?"
            errorMsg={error}
            isLoading={isLoading}
            isError={Boolean(error)}
            onClose={handeFeedbackPanelToggle}
            onSubmit={handleSubmit}
          />
        </SideDialog>
      </Container>
    </>
  );
};
