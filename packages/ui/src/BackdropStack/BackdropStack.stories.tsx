import { Story } from '@storybook/react';
import { useRef } from 'react';
import { Box, Popover } from '@mui/material';

import { Autocomplete } from '../Autocomplete';
import { Dialog } from '../Dialog';
import { Button } from '../Button';
import { Typography } from '../Typography';
import {
  BackdropStackProvider,
  useBackdropStackModalToggle,
  useBackdropStackToggle,
} from '../BackdropStack';

export default {
  title: 'Components/BackdropStack',
};

type IOption = {
  value: string;
  title: string;
};

type IndexedProps = {
  index: number;
};

const OPTIONS: IOption[] = [
  { value: '1', title: 'Value 1' },
  { value: '2', title: 'Value 2' },
  { value: '3', title: 'Value 3' },
  { value: '4', title: 'Value 4' },
  { value: '5', title: 'Value 5' },
  { value: '6', title: 'Value 6' },
  { value: '7', title: 'Value 7' },
  { value: '8', title: 'Value 8' },
];

const AutoCompleteExample = ({ index }: IndexedProps) => {
  const { handleClose, handleOpen } = useBackdropStackToggle(
    `autocomplete_${index}`,
  );

  return (
    <Autocomplete<IOption, true, false, false>
      options={OPTIONS}
      onOpen={handleOpen}
      onClose={handleClose}
      label="Multiple"
      multiple
      getOptionLabel={(params) => params.title}
    />
  );
};

const PopupExample = ({ index }: IndexedProps) => {
  const { isOpened, handleOpen, handleClose } = useBackdropStackToggle(
    `popup_${index}`,
  );
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
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box padding={4}>
          <Typography variant="h3">Popup #{index + 1}</Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            porro?
          </div>
          <AutoCompleteExample index={index + 1} />
          {isOpened && <PopupExample index={index + 1} />}
        </Box>
      </Popover>
    </>
  );
};

const DialogExample = () => {
  const { isOpened, handleOpen, handleClose } =
    useBackdropStackModalToggle('dialog');

  return (
    <>
      <Button onClick={handleOpen}>Открыть модалку</Button>
      <Dialog
        open={isOpened}
        onClose={handleClose}
        title="Example modal content"
      >
        <Box padding={4}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            eveniet, ipsum. Deserunt dicta eum facilis nihil perferendis
            quisquam rerum vero.
          </div>
          <AutoCompleteExample index={0} />
          <PopupExample index={0} />
        </Box>
      </Dialog>
    </>
  );
};

const Template: Story<{}> = () => {
  return (
    <BackdropStackProvider>
      <DialogExample />
    </BackdropStackProvider>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { expanded: true },
};
