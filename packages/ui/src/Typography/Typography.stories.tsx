import { Grid } from '@mui/material'

import { Typography } from './Typography'

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

const Template = (args) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={3}>
      <Typography variant='h1' value='Head size H1' paragraph />
      <Typography variant='h2' value='Head size H2' paragraph />
      <Typography variant='h3' value='Head size H3' paragraph />
      <Typography variant='h4' value='Head size H4' paragraph />
      <Typography variant='h5' value='Head size H5' paragraph />
      <Typography variant='h6' value='Head size H6' paragraph />
      <Typography variant='h7' value='Head size H7' paragraph />
      <Typography variant='h8' value='Head size H8' paragraph />
      <Typography variant='h9' value='Head size H9' paragraph />
      <Typography variant='button' value='Button text' paragraph />
      <Typography variant='ui' value='UI text' paragraph />
      <Typography variant='link' value='Link text' paragraph />
      <Typography variant='pointer' value='Pointer text' paragraph />
      <Typography variant='small' value='Small text' paragraph />
      <Typography variant='code' value='Code text' paragraph />
    </Grid>
    <Grid item xs={12} md={4}>
      <Typography {...args} />
    </Grid>
  </Grid>
)

export const AllTypography = Template.bind({})
AllTypography.args = {
  value: 'Съешь же ещё этих мягких французских булок да выпей чаю',
  variant: 'h1'
}
