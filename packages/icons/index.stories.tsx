import { Grid, SvgIconProps } from '@mui/material';
import { Story } from '@storybook/react';

// Автогенерация
// eslint-disable-next-line import/extensions
import * as themedIcons from './generated-themed-icons';
// eslint-disable-next-line import/extensions
import * as customIcons from './generated-custom-icons';

const iconsObject = { ...themedIcons, ...customIcons };
const names = Object.keys(iconsObject);

const getIconsByName = (name) => {
  return names
    .filter((iconName) => iconName.includes(name))
    .map((iconName) => {
      return {
        name: iconName,
        Component: iconsObject[
          iconName
        ] as React.FunctionComponent<SvgIconProps>[],
      };
    });
};

const [fillMdIcons, fillSmIcons, outlineMdIcons, outlineSmIcons] = [
  getIconsByName('FillMd'),
  getIconsByName('FillSm'),
  getIconsByName('OutlineMd'),
  getIconsByName('OutlineSm'),
];

export default {
  title: 'Components/Icons',
};

const Icon = ({ component: Component, name, ...props }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Component {...props} />
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
          <h2 style={{ textAlign: 'center' }}>Fill Md</h2>
        </Grid>
        {fillMdIcons.map(({ name, Component }) => (
          <Grid item xs={2}>
            <Icon name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
      <Grid key="fillsm" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Fill Sm</h2>
        </Grid>
        {fillSmIcons.map(({ name, Component }) => (
          <Grid item xs={2}>
            <Icon name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
      <Grid key="outlinemd" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Outline Md</h2>
        </Grid>
        {outlineMdIcons.map(({ name, Component }) => (
          <Grid item xs={2}>
            <Icon name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
      <Grid key="outlinesm" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Outline Sm</h2>
        </Grid>
        {outlineSmIcons.map(({ name, Component }) => (
          <Grid item xs={2}>
            <Icon name={name} component={Component} {...args} />
          </Grid>
        ))}
      </Grid>
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
