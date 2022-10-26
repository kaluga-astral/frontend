import { Story } from '@storybook/react';
import { useRef, useState } from 'react';
import { Box, MenuItem, Popover } from '@mui/material';

import { Select } from '../Select';
import { Autocomplete } from '../Autocomplete';
import { Dialog } from '../Dialog';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { useBackdropStackToggle } from '../BackdropStack';
import { DatePicker } from '../DatePicker';

export default {
  title: 'Components/BackdropStack',
};

type Option = {
  value: string;
  title: string;
};

type IndexedProps = {
  index: number;
};

const OPTIONS: Option[] = [
  { value: '1', title: 'Value 1' },
  { value: '2', title: 'Value 2' },
  { value: '3', title: 'Value 3' },
  { value: '4', title: 'Value 4' },
  { value: '5', title: 'Value 5' },
  { value: '6', title: 'Value 6' },
  { value: '7', title: 'Value 7' },
  { value: '8', title: 'Value 8' },
];

const AutocompleteExample = () => {
  const { handleClose, handleOpen } = useBackdropStackToggle();

  return (
    <Autocomplete<Option, true, false, false>
      options={OPTIONS}
      onOpen={handleOpen}
      onClose={handleClose}
      label="Multiple"
      multiple
      getOptionLabel={(params) => params.title}
    />
  );
};

const SelectExample = () => {
  const { handleClose, handleOpen } = useBackdropStackToggle();
  const [value, setValue] = useState('');

  return (
    <Select
      placeholder="Выберите вариант"
      label="Select"
      value={value}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      {OPTIONS.map((item, i) => (
        <MenuItem
          key={i}
          value={item.value}
          onClick={() => setValue(item.value)}
        >
          {item.title}
        </MenuItem>
      ))}
    </Select>
  );
};

const DatePickerExample = () => {
  const { handleOpen, handleClose } = useBackdropStackToggle();

  return <DatePicker onOpen={handleOpen} onClose={handleClose} />;
};

const PopupExample = ({ index }: IndexedProps) => {
  const { isOpened, handleOpen, handleClose } = useBackdropStackToggle();
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={ref} onClick={handleOpen}>
        Open popup {index + 1}
      </Button>
      <Popover
        open={isOpened}
        onClose={handleClose}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box padding={4}>
          <Typography variant="h3">Popup #{index + 1}</Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            porro?
          </div>
          <SelectExample />
          <AutocompleteExample />
          <DatePickerExample />
          {isOpened && <PopupExample index={index + 1} />}
        </Box>
      </Popover>
    </>
  );
};

const MotivationPart = () => {
  return (
    <>
      <Typography variant="h2">Мотивация</Typography>
      <Typography variant="code">
        Абстрактный компонент, предназначенный для предотвращения случаного
        нажатия пользователем по бэкдропу/оверлею/серой зоне модального окна.
        <br />
        Кейс состоит в том, что если внутри модального окна, пользователь
        взаимодействует с другими активными попап подобными элементами,
        автокомплитом, селектом, то для их закрытия пользователь может
        воспользоваться кликом мышкой "снаружи" окна взаимодействия, и тогда это
        приводит к клику по фоновой части модалки, и это приводит к закрытию не
        только селекта/автокомплита, но и самой модалки, чего пользователь
        совсем не ожидал
      </Typography>
      <Typography variant="h2" marginTop={3} marginBottom={2}>
        Пример
      </Typography>
    </>
  );
};

const Template: Story<{}> = () => {
  const { isOpened, handleOpen, handleClose } = useBackdropStackToggle();

  return (
    <>
      <MotivationPart />
      <Button onClick={handleOpen}>Открыть модалку</Button>
      <Dialog
        open={isOpened}
        onClose={handleClose}
        title="Example modal content"
      >
        <Box padding={6}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            eveniet, ipsum. Deserunt dicta eum facilis nihil perferendis
            quisquam rerum vero.
          </div>
          <SelectExample />
          <AutocompleteExample />
          <DatePickerExample />
          <PopupExample index={0} />
        </Box>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { expanded: true },
};
