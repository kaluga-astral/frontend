import { Story } from '@storybook/react';
import { FC, MouseEventHandler, PropsWithChildren, useState } from 'react';
// ???
// Cannot find module '@astral/illustrations/src/no-certificates.svg' or its corresponding type declarations
// @ts-ignore
import NoCertificates from '@astral/illustrations/src/no-certificates.svg';

import { Button, ContentState, Grid, TextField, Typography, styled } from '..';
import { PlaceholderProps } from '../Placeholder';

export default {
  title: 'Components/ContentState',
  component: ContentState,
};

const BaseContentContainer = styled(Grid)`
  width: 384px;
  height: 384px;
  padding: 8px;
  overflow: hidden;

  border: 1px solid gray;
`;

const BaseContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BaseContentContainer
      alignContent="center"
      justifyContent="center"
      container
    >
      {children}
    </BaseContentContainer>
  );
};

const Form: FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = ({
  onClick,
}) => {
  return (
    <>
      <TextField label="Название" />
      <Button onClick={onClick}>Отправить</Button>
    </>
  );
};

const Case = ({
  title,
  customState,
  loadingContent,
}: {
  title: string;
  customState?: PlaceholderProps;
  loadingContent?: JSX.Element | string;
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorList, setErrorList] = useState<string[]>([]);
  const isError = !!errorList.length;

  const handleClick = () => {
    const TIMEOUT_MS = 3000;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setErrorList(['Ошибка с текстом 1', 'Ошибка с текстом 2']);
    }, TIMEOUT_MS);
  };

  return (
    <BaseContent>
      <ContentState
        loadingContent={loadingContent}
        isLoading={isLoading}
        isError={isError}
        errorState={{
          imgSrc: NoCertificates,
          imgAlt: 'Не сертификатов',
          onRetry: handleClick,
          errorList,
        }}
        isCustom={customState ? isError : false}
        customState={customState}
      >
        <Typography variant="h4" paragraph>
          {title}
        </Typography>
        <Form onClick={handleClick} />
      </ContentState>
    </BaseContent>
  );
};

const Template: Story = () => {
  return (
    <Grid
      templateColumns="repeat(2, 400px)"
      templateRows="repeat(2, 400px)"
      container
    >
      <Case
        title="Вариант isCustom"
        customState={{
          imgAlt: 'Нет сертификатов',
          imgSrc: NoCertificates,
          title: 'Произошла Custom-ошибка',
        }}
      />
      <Case title="Вариант isError" />
      <Case
        title="Вариант с Custom Loading"
        loadingContent="Пожалуйста подождите..."
      />
    </Grid>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
