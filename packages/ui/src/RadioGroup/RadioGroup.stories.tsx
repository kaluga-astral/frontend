import { FormControl, FormLabel, RadioGroup, Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { Radio } from '../Radio';
import { FormControlLabel } from '../FormControlLabel';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

const Template: Story = (args) => <Radio {...args} />;

export const RadioGroups: Story = () => (
  <Stack direction="row" gap={10}>
    <Stack sx={{ maxWidth: 300 }} gap={2}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" required>
          Название группы
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="one"
          name="radio-buttons-group"
        >
          <FormControlLabel value="one" control={<Radio />} label="Один" />
          <FormControlLabel value="two" control={<Radio />} label="Два" />
          <FormControlLabel value="three" control={<Radio />} label="Три" />
          <FormControlLabel
            value="four"
            control={<Radio disabled />}
            label="Четыре"
          />
          <FormControlLabel
            value="five"
            control={<Radio checked disabled />}
            label="Пять"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
    <Stack sx={{ maxWidth: 300 }} gap={2}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" required>
          Название группы
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="two"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="one"
            control={<Radio disabled />}
            label="Один"
          />
          <FormControlLabel value="two" control={<Radio />} label="Два" />
          <FormControlLabel value="three" control={<Radio />} label="Три" />
          <FormControlLabel value="four" control={<Radio />} label="Четыре" />
          <FormControlLabel
            value="five"
            control={<Radio checked disabled />}
            label="Пять"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
    <Stack sx={{ maxWidth: 300 }} gap={2}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" required>
          Название группы
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="three"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="one"
            control={<Radio disabled />}
            label="Один"
          />
          <FormControlLabel
            value="two"
            control={<Radio checked disabled />}
            label="Два"
          />
          <FormControlLabel value="three" control={<Radio />} label="Три" />
          <FormControlLabel value="four" control={<Radio />} label="Четыре" />
          <FormControlLabel value="five" control={<Radio />} label="Пять" />
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
