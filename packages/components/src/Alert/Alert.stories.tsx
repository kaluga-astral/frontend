import { Story } from '@storybook/react';
import { Link, Paper, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import { DialogActions } from '../DialogActions';
import { DialogContent } from '../DialogContent';
import { DialogTitle } from '../DialogTitle';
import { ExampleTemplate } from '../docs';
import { Grid } from '../Grid';
import { Button } from '../Button';
import { Typography } from '../Typography';

import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const AlertShowcase: Story = () => {
  const [closed, setClosed] = useState(false);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('xl'));
  const autoFlow = matches ? 'row' : 'column';

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClosed(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [closed]);

  const handleClose = () => setClosed(true);

  return (
    <ExampleTemplate>
      <Typography paragraph variant="h3">
        Alert
      </Typography>
      <Typography paragraph>
        Предупреждение — это короткое важное сообщение, которое используется для
        привлечения внимание пользователя, не прерывая его задачи.
      </Typography>
      <Typography>
        Предупреждение предлагает четыре уровня серьезности:
      </Typography>
      <ul>
        <li>Information - информационное оповещение</li>
        <li>Success - сообщение об успехе</li>
        <li>Warning - предупреждение</li>
        <li>Error - сообщение об ошибке</li>
      </ul>

      <br />
      <Typography variant="h4" paragraph>
        Анатомия компонента Alert
      </Typography>

      <Typography>Компонент состоит из:</Typography>
      <ol>
        <li>Иконки, соответствующей уровню серьезности;</li>
        <li>Заголовка;</li>
        <li>Поясняющего текста;</li>
        <li>Кнопки действия;</li>
        <li>Кнопка “Закрыть”.</li>
      </ol>

      <Typography paragraph>
        Ширина блока компонента зависит от ширины контента, к которому относится
        предупреждение.
      </Typography>

      <Typography paragraph>
        В компоненте могут отсутствовать заголовок / поясняющий текст / кнопки
        действия / кнопка “Закрыть”.
      </Typography>

      <ExampleTemplate.Case title="">
        <Grid
          container
          justifyContent="center"
          autoFlow={matches ? autoFlow : 'false'}
          templateColumns={matches ? '' : 'repeat(3, 30%)'}
          spacing={4}
        >
          <Alert
            severity="info"
            title="Заголовок"
            onClose={handleClose}
            actions={
              <>
                <Link underline="hover" href="https://www.google.com/">
                  Кнопка-ссылка
                </Link>
              </>
            }
          >
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>

          <Alert
            severity="info"
            title="Заголовок"
            onClose={handleClose}
            actions={
              <>
                <Link underline="hover" href="https://www.google.com/">
                  Кнопка-ссылка
                </Link>
              </>
            }
          >
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>

          <Alert
            severity="info"
            onClose={handleClose}
            actions={
              <>
                <Link underline="hover" href="https://www.google.com/">
                  Кнопка-ссылка
                </Link>
              </>
            }
          >
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>

          <Alert severity="info" title="Заголовок" onClose={handleClose}>
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>

          <Alert severity="info" title="Заголовок" onClose={handleClose}>
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>

          <Alert severity="info" onClose={handleClose}>
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>
        </Grid>
      </ExampleTemplate.Case>

      <br />
      <Typography variant="h4" paragraph>
        Типы компонента
      </Typography>

      <ExampleTemplate.Case
        title="Information"
        descriptionList={[
          'Информационное оповещение это стандартное состояние оповещения. ',
          'Используется, когда необходимо подсветить изменения или обозначить важную информацию на странице.',
        ]}
      >
        <Grid container templateColumns="70%" justifyContent="center">
          <Alert
            severity="info"
            title="Редактирование ограничено"
            onClose={handleClose}
            actions={
              <>
                <Link underline="hover" href="https://www.google.com/">
                  Кнопка-ссылка
                </Link>
              </>
            }
          >
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Success"
        descriptionList={[
          'Данный тип компонента используется, когда необходимо оповестить пользователя, что действие или событие произошло успешно.',
        ]}
      >
        <Grid container templateColumns="70%" justifyContent="center">
          <Alert severity="success" onClose={handleClose}>
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Warning"
        descriptionList={[
          'Сообщение раздела, которое используется для помощи во избежание ошибок.',
        ]}
      >
        <Grid container templateColumns="70%" justifyContent="center">
          <Alert
            severity="warning"
            title="Был изменён сертификат"
            onClose={handleClose}
          >
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>
        </Grid>
      </ExampleTemplate.Case>

      <Typography variant="h5" paragraph>
        Error
      </Typography>

      <Typography>
        Используется, когда необходимо сообщить пользователю:
      </Typography>

      <ul>
        <li>
          Произошло что-то критическое, что мешает дальнейшей работе в разделе;
        </li>
        <li>Доступ к разделу запрещен;</li>
        <li>Есть проблемы с подключением;</li>
      </ul>

      <ExampleTemplate.Case title="">
        <Grid container templateColumns="70%" justifyContent="center">
          <Alert
            severity="error"
            title="Что-то пошло не так с подбором тарифа"
            onClose={handleClose}
          >
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Кнопка действия"
        descriptionList={[
          'Используется, когда необходимо дать возможность принять решение в соответствии с содержимым сообщения раздела.',
          'Действие в сообщении отображается в виде текста ссылки. Действий может быть несколько в одном сообщении. Чаще всего не более двух.',
        ]}
      >
        <Grid container templateColumns="70%" justifyContent="center">
          <Alert
            severity="warning"
            onClose={handleClose}
            actions={
              <>
                <Link underline="hover" href="https://www.google.com/">
                  Подробнее
                </Link>
              </>
            }
          >
            Заголовок и действия опциональны, их можно отключить, если
            требуется.
          </Alert>
        </Grid>
      </ExampleTemplate.Case>

      <br />
      <Typography variant="h4" paragraph>
        Пример использования
      </Typography>

      <Paper style={{ width: 500 }}>
        <DialogTitle>Загрузка списка владельцев ЭП</DialogTitle>
        <DialogContent>
          Заглушка примера текста страницы, который несет очень важный смысл для
          пользователя и предлагает ему варианты выбора действий с контентом и в
          рамках работы приложения.
        </DialogContent>
        <DialogActions>
          <Button variant="text">Загрузить другой список</Button>
          <Button disabled={true}>Добавить в заявление</Button>
        </DialogActions>
      </Paper>
    </ExampleTemplate>
  );
};

AlertShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => {
  const [closedList, setClosedList] = useState<string[]>([]);

  const handleClose = (id: string) => () => setClosedList([...closedList, id]);

  const handleReset = () => setClosedList([]);

  return (
    <Grid spacing={4}>
      <Alert
        {...args}
        onClose={handleClose('1')}
        display={!closedList.includes('1')}
        actions={
          <>
            <Link underline="hover" href="https://www.google.com/">
              Кнопка-ссылка
            </Link>
            <Link underline="hover" href="https://www.google.com/">
              Другая кнопка-ссылка
            </Link>
          </>
        }
      >
        Заголовок и действия опциональны, их можно отключить, если требуется.
      </Alert>

      <br />
      <Button onClick={handleReset}>Сбросить</Button>
    </Grid>
  );
};

export const AlertStory = Template.bind({});

AlertStory.storyName = 'Alert';

AlertStory.args = {
  severity: 'info',
  title: 'Заголовок',
  closeText: 'Скрыть',
  square: false,
  elevation: 1,
};

AlertStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
