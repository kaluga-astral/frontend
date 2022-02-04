import { SvgIconProps } from '@mui/material';
import { Story } from '@storybook/react';

// Автогенерация
// eslint-disable-next-line import/extensions
import * as themedIcons from './generated-themed-icons';
// eslint-disable-next-line import/extensions
import * as customIcons from './generated-custom-icons';

const icons = { ...themedIcons, ...customIcons };

const iconsAsComponents = Object.keys(icons).map((iconName) => {
  return {
    name: iconName,
    Component: icons[iconName] as React.FunctionComponent<SvgIconProps>,
  };
});

export default {
  title: 'Components/Icons',
};

const Template: Story = (args: SvgIconProps) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {iconsAsComponents.map(({ name, Component }) => {
        return (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '30px',
              width: '100px',
              height: '100px',
            }}
          >
            <Component {...args} />
            <span style={{ fontSize: '0.85rem', marginTop: '20px' }}>
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Icons';
Default.args = {
  color: 'primary',
};
Default.parameters = {
  options: { showPanel: false },
};
