import { Grid } from '@mui/material'
import { Story } from '@storybook/react'

import { Typography, TypographyProps } from './Typography'

export default {
  title: 'Components/Typography',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
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
        'code'
      ]
    }
  }
}

const Template: Story<TypographyProps> = (args) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={3}>
      <Typography variant='h1' paragraph>Head size H1</Typography>
      <Typography variant='h2' paragraph>Head size H2</Typography>
      <Typography variant='h3' paragraph>Head size H3</Typography>
      <Typography variant='h4' paragraph>Head size H4</Typography>
      <Typography variant='h5' paragraph>Head size H5</Typography>
      <Typography variant='h6' paragraph>Head size H6</Typography>
      <Typography variant='h7' paragraph>Head size H7</Typography>
      <Typography variant='h8' paragraph>Head size H8</Typography>
      <Typography variant='h9' paragraph>Head size H9</Typography>
      <Typography variant='button' paragraph >Button text</Typography>
      <Typography variant='ui' paragraph>UI text</Typography>
      <Typography variant='link' paragraph>Link text</Typography>
      <Typography variant='pointer' paragraph>Pointer text</Typography>
      <Typography variant='small' paragraph>Small text</Typography>
      <Typography variant='code' paragraph>Code text</Typography>
    </Grid>
    <Grid item xs={12} md={4}>
      <Typography {...args} />
    </Grid>
  </Grid>
)

export const AllTypography = Template.bind({})
AllTypography.args = {
  children: 'Съешь же ещё этих мягких французских булок да выпей чаю',
  variant: 'h1'
}
