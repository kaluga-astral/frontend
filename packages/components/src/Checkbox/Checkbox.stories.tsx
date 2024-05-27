import { type StoryFn } from '@storybook/react';
import { Box, Paper, useMediaQuery, useTheme } from '@mui/material';
import { type ChangeEvent, useEffect, useState } from 'react';

import { Typography } from '../Typography';
import { LegacyGrid } from '../LegacyGrid';
import { DialogContent } from '../DialogContent';
import { DialogActions } from '../DialogActions';
import { DialogTitle } from '../DialogTitle';
import { ExampleTemplate } from '../docs';
import { FormControlLabel } from '../FormControlLabel';
import { Button } from '../Button';
import { TextField } from '../TextField';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const CheckboxShowcase: StoryFn = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState([true, false]);
  const theme = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [loading]);

  const handleClick = () => setLoading(true);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const autoFlow = matches ? 'row' : 'column';

  return (
    <ExampleTemplate>
      <Typography paragraph variant="h3">
        Checkbox
      </Typography>
      <Typography paragraph>
        Checkbox — это элемент графического пользовательского интерфейса,
        позволяющий пользователю управлять параметром с двумя состояниями — ☑
        включено и ☐ отключено.
      </Typography>
      <Typography>
        Компонент полезен в использовании для следующих сценариев:
      </Typography>
      <ul>
        <li>
          Когда необходимо выбрать один или несколько элементов из набора.
        </li>
        <li>Когда необходимо включить/выключить какие-то опции.</li>
      </ul>

      <Typography variant="h4" paragraph>
        Типы компонента
      </Typography>

      <ExampleTemplate.Case
        title="Checkbox_Basic"
        descriptionList={['Базовый вид компонента.']}
      >
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
        >
          <Checkbox />
          <Checkbox disabled />
          <Checkbox disabled checked />
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Checkbox_Label"
        descriptionList={[
          'Обычно чекбокс используется с текстом, к которому он относится.',
        ]}
      >
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
        >
          <FormControlLabel control={<Checkbox />} label="Текст" />
          <FormControlLabel control={<Checkbox disabled />} label="Текст" />
          <FormControlLabel
            control={<Checkbox disabled checked />}
            label="Текст"
          />
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Indeterminate"
        descriptionList={[
          'Неопределенное состояние.',
          'В случаях, когда используется группировка элементов в списке и есть возможность выбора всех или определенного числа, может быть использован чексбокс в неопределенном состоянии.',
          'Он представляет собой выбранный чекбокс со знаком “-”.',
        ]}
      >
        <LegacyGrid container justifyContent="center">
          <div>
            <FormControlLabel
              label="Заголовок"
              control={
                <Checkbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              <FormControlLabel
                label="Вариант 1"
                control={
                  <Checkbox checked={checked[0]} onChange={handleChange2} />
                }
              />
              <FormControlLabel
                label="Вариант 2"
                control={
                  <Checkbox checked={checked[1]} onChange={handleChange3} />
                }
              />
            </Box>
          </div>
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Error"
        descriptionList={[
          'Вид компонента для визуального отображения состояния ошибки',
        ]}
      >
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
        >
          <FormControlLabel
            control={<Checkbox isError={true} />}
            label="Текст"
          />
          <FormControlLabel
            control={<Checkbox checked isError={true} />}
            label="Текст"
          />
        </LegacyGrid>
      </ExampleTemplate.Case>

      <Typography variant="h5" paragraph>
        Пример использования
      </Typography>
      <Paper style={{ width: 500 }}>
        <DialogTitle>Форма обратной связи</DialogTitle>
        <DialogContent>
          <Box>
            <LegacyGrid container templateColumns="repeat(2, 1fr)" spacing={2}>
              <TextField placeholder={'Поле 1'} />
              <TextField placeholder={'Поле 2'} />
            </LegacyGrid>
            <FormControlLabel
              control={<Checkbox />}
              label="Дополнительный параметр "
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="text">Отмена</Button>
          <Button loading={loading} onClick={handleClick}>
            Продолжить
          </Button>
        </DialogActions>
      </Paper>
    </ExampleTemplate>
  );
};

CheckboxShowcase.parameters = { options: { showPanel: false } };

const Template: StoryFn = (args) => (
  <FormControlLabel control={<Checkbox {...args} />} label="Текст" />
);

export const CheckboxStory = Template.bind({});

CheckboxStory.storyName = 'Checkbox';

CheckboxStory.args = {
  disabled: false,
};

CheckboxStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
