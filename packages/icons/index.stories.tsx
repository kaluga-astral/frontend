import { Grid, SvgIconProps } from '@mui/material';
import { Story } from '@storybook/react';

// Автогенерация
// eslint-disable-next-line import/extensions
import * as themedIcons from './generated-themed-icons';
// eslint-disable-next-line import/extensions
import * as customIcons from './generated-custom-icons';

const iconsObject = { ...themedIcons, ...customIcons };
const names = Object.keys(iconsObject);

const getIconsByName = (name: string, size: number) => {
  return names
    .filter((iconName) => iconName.includes(name))
    .map((iconName) => {
      return {
        size,
        name: iconName,
        Component: iconsObject[
          iconName
        ] as React.FunctionComponent<SvgIconProps>[],
      };
    });
};

const [fillMdIcons, fillSmIcons, outlineMdIcons, outlineSmIcons] = [
  getIconsByName('FillMd', 24),
  getIconsByName('FillSm', 16),
  getIconsByName('OutlineMd', 24),
  getIconsByName('OutlineSm', 16),
];

export default {
  title: 'Components/Icons',
};

const Icon = ({ component: Component, name, size, ...props }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Component {...props} style={{ width: size, height: size }} />
    <span style={{ fontSize: '0.85rem', marginTop: '20px' }}>{name}</span>
  </div>
);

const Template: Story = (args: SvgIconProps) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Grid key="fillmd" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Fill Md 24</h2>
        </Grid>
        {fillMdIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
      <Grid key="fillsm" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Fill Sm 16</h2>
        </Grid>
        {fillSmIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
      <Grid key="outlinemd" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Outline Md 24</h2>
        </Grid>
        {outlineMdIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
      <Grid key="outlinesm" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Outline Sm 16</h2>
        </Grid>
        {outlineSmIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};
Default.parameters = {
  options: { showPanel: false },
};
