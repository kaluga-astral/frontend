import { type Meta, type StoryObj } from '@storybook/react';
import { Box, Paper } from '@mui/material';
import { type ChangeEvent, useState } from 'react';

import { LegacyGrid } from '../LegacyGrid';
import { DialogContent } from '../DialogContent';
import { DialogActions } from '../DialogActions';
import { DialogTitle } from '../DialogTitle';
import { FormControlLabel } from '../FormControlLabel';
import { Button } from '../Button';
import { TextField } from '../TextField';

import { Checkbox } from './Checkbox';

/**
 * Checkbox — это элемент графического пользовательского интерфейса, позволяющий пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=322-5837&t=NrGSkPDdR1WstBqT-0)
 * ### [Guide]()
 */

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Interaction: Story = {
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

/**
 * Пример использования
 */
export const Example = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => setLoading(true);

  return (
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
  );
};

export const CheckboxDefault = () => <Checkbox />;

export const CheckboxChecked = () => <Checkbox checked />;

export const CheckboxDisabled = () => (
  <>
    <Checkbox disabled />
    <Checkbox disabled checked />
  </>
);

/**
 * Обычно чекбокс используется с текстом, к которому он относится.
 */
export const CheckboxLabel = () => (
  <>
    <FormControlLabel control={<Checkbox />} label="Текст" />
    <FormControlLabel control={<Checkbox disabled />} label="Текст" />
    <FormControlLabel control={<Checkbox disabled checked />} label="Текст" />
  </>
);

/**
 * Неопределенное состояние.
 * В случаях, когда используется группировка элементов в списке и есть возможность выбора всех или определенного числа, может быть использован чексбокс в неопределенном состоянии. Он представляет собой выбранный чекбокс со знаком “-”.
 */
export const Indeterminate = () => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <>
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
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Вариант 2"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      </div>
    </>
  );
};

/**
 * Вид компонента для визуального отображения состояния ошибки
 */
export const Error = () => (
  <>
    <FormControlLabel control={<Checkbox isError={true} />} label="Текст" />
    <FormControlLabel
      control={<Checkbox checked isError={true} />}
      label="Текст"
    />
  </>
);
