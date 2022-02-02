import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Stack,
} from '@mui/material';
import { Story } from '@storybook/react';

import { Radio } from './Radio';

export default {
  title: 'Components/RadioGroup',
  component: Radio,
};

const Template: Story = (args) => <Radio {...args} />;

export const RadioGroups: Story = () => (
  <Stack direction="row" gap={4}>
    <Stack sx={{ maxWidth: 300 }} gap={2}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Название группы
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Один" />
          <FormControlLabel value="male" control={<Radio />} label="Два" />
          <FormControlLabel value="other" control={<Radio />} label="Три" />
        </RadioGroup>
      </FormControl>
    </Stack>
    <Stack sx={{ maxWidth: 300 }} gap={2}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Название группы
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Один" />
          <FormControlLabel value="male" control={<Radio />} label="Два" />
          <FormControlLabel value="other" control={<Radio />} label="Три" />
        </RadioGroup>
      </FormControl>
    </Stack>
    <Stack sx={{ maxWidth: 300 }} gap={2}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Название группы
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="other"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Один" />
          <FormControlLabel value="male" control={<Radio />} label="Два" />
          <FormControlLabel value="other" control={<Radio />} label="Три" />
        </RadioGroup>
      </FormControl>
    </Stack>
  </Stack>
);

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
