import { Story } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button
}

const Template: Story = (args) => <Button {...args} />

export const Default = Template.bind({})
