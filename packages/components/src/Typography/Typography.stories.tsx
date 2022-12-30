import { Grid } from '@mui/material';
import { Story } from '@storybook/react';

import { Typography, TypographyColor, TypographyProps } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
};

const intensities: TypographyProps['colorIntensity'][] = [
  '900',
  '800',
  '700',
  '600',
  '500',
  '400',
  '300',
  '200',
  '100',
];

const variants: TypographyProps['variant'][] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'h7',
  'h8',
  'h9',
  'button',
  'ui',
  'link',
  'pointer',
  'small',
  'code',
];

const colors: TypographyColor[] = [
  'text',
  'textSecondary',
  'primary',
  'secondary',
  'info',
  'success',
  'error',
  'warning',
  'grey',
  'red',
  'green',
  'yellow',
];

const Template: Story<TypographyProps> = (args) => {
  return <Typography mb={5} {...args} />;
};

export const Showcase = () => (
  <Grid
    container
    display="grid"
    gridTemplateColumns={`repeat(${colors.length}, 1fr)`}
    gap={4}
    justifyContent="center"
    alignItems="center"
  >
    {variants.map((variant) => (
      <>
        {colors.map((color) => (
          <Grid
            key={color}
            height="100%"
            justifyContent="space-between"
            container
            display="grid"
          >
            <Typography color={color} variant={variant}>
              {variant} x {color}
            </Typography>
            {intensities?.map((intensity) => (
              <Typography
                key={intensity}
                color={color}
                variant={variant}
                colorIntensity={intensity}
              >
                {variant} x {color} x {intensity}
              </Typography>
            ))}
          </Grid>
        ))}
      </>
    ))}
  </Grid>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Съешь же ещё этих мягких французских булок да выпей чаю',
  variant: 'h1',
  color: 'primary',
  intensity: 900,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
