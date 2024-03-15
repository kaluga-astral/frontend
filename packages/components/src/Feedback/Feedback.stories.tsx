import { type PropsWithChildren, useState } from 'react';
import { type Meta } from '@storybook/react';

import errorIllustration from '../../../ui/illustrations/error.svg';
import { ConfigProvider } from '../ConfigProvider';
import { Button } from '../Button';
import { styled } from '../styles';

import { Feedback } from './Feedback';

/**
 * ### Feedback позволяет собирать обратную связь от пользователей о продукте.
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=21898-85561&mode=design&t=6jE4Wj4m0ijKFVSo-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Feedback> = {
  title: 'Components/Feedback',
  component: Feedback,
};

export default meta;

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
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
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

      <Feedback
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
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

      <Feedback
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
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

      <Feedback
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
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

      <Feedback
        isOpen={isOpen}
        question="Вам было сложно получить электронную подпись?"
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

      <Feedback
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
