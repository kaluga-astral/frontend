import { SvgIconProps } from '@mui/material';
import { Story } from '@storybook/react';

import * as icons from '..';

const iconsAsComponents = Object.keys(icons).map((iconName) => {
  return {
    name: iconName,
    Component: icons[iconName] as React.FunctionComponent<SvgIconProps>,
  };
});

export default {
  title: 'Components/icons',
};

const Template: Story = (args: React.SVGProps<SVGSVGElement>) => {
  return (
    <div style={{ display: 'flex' }}>
      {iconsAsComponents.map(({ name, Component }) => {
        return (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: '30px',
            }}
          >
            <Component {...args} />
            {name}
          </div>
        );
      })}
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};
