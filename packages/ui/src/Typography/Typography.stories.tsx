import { Grid } from '@mui/material';
import { Story } from '@storybook/react';

import { Typography, TypographyColor, TypographyProps } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
};

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
];

const Template: Story<TypographyProps> = (args) => {
  return (
    <>
      <Typography mb={5} {...args} />
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
              <Typography color={color} variant={variant}>
                {variant} x {color}
              </Typography>
            ))}
          </>
        ))}
      </Grid>
    </>
  );
};

export const Showcase = Template.bind({});

Showcase.args = {
  children: 'Съешь же ещё этих мягких французских булок да выпей чаю',
  variant: 'h1',
};

Showcase.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
