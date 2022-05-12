import { Grid, SvgIconProps } from '@mui/material';
import { Story } from '@storybook/react';

// Автогенерация
// eslint-disable-next-line import/extensions
import * as themedIcons from './generated-themed-icons';
// eslint-disable-next-line import/extensions
import * as customIcons from './generated-custom-icons';

const getIcons = (
  name: string,
  size: number,
  type: 'themed' | 'custom' | 'all' = 'all'
) => {
  const icons = (() => {
    if (type === 'themed') {
      return themedIcons;
    }
    if (type === 'custom') {
      return customIcons;
    }

    return { ...themedIcons, ...customIcons };
  })();

  return Object.keys(icons)
    .filter((iconName) => iconName.includes(name))
    .map((iconName) => {
      return {
        size,
        name: iconName,
        Component: icons[iconName] as React.FC<SvgIconProps>,
      };
    });
};

const [
  fillMdIcons,
  fillSmIcons,
  outlineMdIcons,
  outlineSmIcons,
  coloredFillMdIcons,
] = [
  getIcons('FillMd', 24),
  getIcons('FillSm', 16),
  getIcons('OutlineMd', 24),
  getIcons('OutlineSm', 16),
  getIcons('FillMd', 24, 'themed'),
];

export default {
  title: 'Components/Icons',
};

const Icon = ({ component: Component, name, size, ...props }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Component
      {...props}
      style={{ ...props.style, width: size, height: size }}
    />
    <span style={{ fontSize: '0.85rem', marginTop: '20px' }}>{name}</span>
  </div>
);

const Template: Story = ({ color, style }: SvgIconProps) => {
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
            <Icon size={size} name={name} component={Component} color={color} />
          </Grid>
        ))}
      </Grid>
      <Grid key="fillsm" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Fill Sm 16</h2>
        </Grid>
        {fillSmIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} color={color} />
          </Grid>
        ))}
      </Grid>
      <Grid key="outlinemd" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Outline Md 24</h2>
        </Grid>
        {outlineMdIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} color={color} />
          </Grid>
        ))}
      </Grid>
      <Grid key="outlinesm" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Outline Sm 16</h2>
        </Grid>
        {outlineSmIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} color={color} />
          </Grid>
        ))}
      </Grid>

      <Grid key="fillmdcolored" container spacing={4} m={4}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Fill md 24 colored</h2>
        </Grid>
        {coloredFillMdIcons.map(({ name, size, Component }) => (
          <Grid item key={`${name}_${size}`} xs={2}>
            <Icon size={size} name={name} component={Component} style={style} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  style: {
    color: 'red',
  },
};
Default.parameters = {
  options: { showPanel: false },
};
