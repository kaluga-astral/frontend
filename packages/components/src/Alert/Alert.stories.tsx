import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Grid } from '../Grid';

import { Alert } from './Alert';

/**
 * Alert - Предупреждение. Короткое важное сообщение, которое используется для привлечения внимания пользователя, не прерывая его задачи.
 *
 * Для сворачивания контента использовать [CollapsableAlert](/docs/components-collapsablealert--docs)
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=825%3A13886)
 * ### [Guide]()
 */
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Interaction: Story = {
  args: {
    children: 'Формирование счета может занять до 15 минут',
    display: true,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const useToggleDisplay = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const toggleIsDisplay = () => setIsDisplay((prev) => !prev);

  return { isDisplay, toggleIsDisplay };
};

export const Example = () => (
  <Alert title="Внимание">Формирование счета может занять до 15 минут</Alert>
);

export const Severity = () => (
  <>
    <Alert severity="info" title="info">
      Формирование счета может занять до 15 минут
    </Alert>
    <Alert severity="success" title="success">
      Формирование счета может занять до 15 минут
    </Alert>
    <Alert severity="warning" title="warning">
      Формирование счета может занять до 15 минут
    </Alert>
    <Alert severity="error" title="error">
      Формирование счета может занять до 15 минут
    </Alert>
  </>
);

export const Actions = () => (
  <Alert actions={<Button variant="link">Перейти к счету</Button>}>
    Формирование счета может занять до 15 минут
  </Alert>
);

export const Title = () => (
  <Alert title="Внимание">Формирование счета может занять до 15 минут</Alert>
);

export const WithoutTitle = () => (
  <Alert>Формирование счета может занять до 15 минут</Alert>
);

/**
 * Prop ```onClose``` позволяет отобразить кнопку для закрытия Alert, и обработать клик по ней
 */
export const OnClose = () => {
  const { isDisplay, toggleIsDisplay } = useToggleDisplay();

  return isDisplay ? (
    <Alert onClose={toggleIsDisplay}>
      Формирование счета может занять до 15 минут
    </Alert>
  ) : (
    <Button onClick={toggleIsDisplay}>Показать Alert</Button>
  );
};

/**
 * Prop ```display``` позволяет задать видимость элемента
 */
export const Display = () => {
  const { isDisplay, toggleIsDisplay } = useToggleDisplay();

  return (
    <Grid container spacing={2}>
      <Button onClick={toggleIsDisplay}>Показать/спрятать Alert</Button>
      <Alert display={isDisplay}>
        Формирование счета может занять до 15 минут
      </Alert>
    </Grid>
  );
};

/**
 * Prop ```closeText``` позволяет задать текст подсказки про ховере на иконку закрытия Alert
 */
export const CloseText = () => (
  <Alert closeText="Кастомный текст" onClose={() => {}}>
    Формирование счета может занять до 15 минут
  </Alert>
);
