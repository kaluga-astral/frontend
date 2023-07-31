import { SvgIconProps } from '@mui/material';
import { Story } from '@storybook/react';
import { FunctionComponent } from 'react';

import { LegacyGrid } from '../components/src/LegacyGrid';

// Автогенерация
// eslint-disable-next-line import/extensions
import * as themedIcons from './generated-themed-icons';
// eslint-disable-next-line import/extensions
import * as customIcons from './generated-custom-icons';

type GeneratedIcons = Record<string, FunctionComponent>;

const getIcons = (
  name: string,
  size: number,
  type: 'themed' | 'custom' | 'all' = 'all',
) => {
  const icons: GeneratedIcons = (() => {
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
  сompaniesLogos,
] = [
  getIcons('FillMd', 24),
  getIcons('FillSm', 16),
  getIcons('OutlineMd', 24),
  getIcons('OutlineSm', 16),
  getIcons('FillMd', 24).filter(
    (icon) =>
      icon.name === 'YoutubeFillMd' ||
      icon.name === 'FacebookFillMd' ||
      icon.name === 'GoogleFillMd' ||
      icon.name === 'VkFillMd' ||
      icon.name === 'TwitterFillMd',
  ),
];

export default {
  title: 'Components/Icons',
};

// @ts-ignore
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

const Template: Story = ({ color }: SvgIconProps) => {
  return (
    <>
      <LegacyGrid key="fillmd" container>
        <LegacyGrid>
          <h2 style={{ textAlign: 'center' }}>Fill Md 24</h2>
        </LegacyGrid>
        <LegacyGrid container templateColumns="repeat(6, 1fr)" rowSpacing={6}>
          {fillMdIcons.map(({ name, size, Component }) => (
            <Icon
              key={name}
              size={size}
              name={name}
              component={Component}
              color={color}
            />
          ))}
        </LegacyGrid>
      </LegacyGrid>
      <LegacyGrid key="fillsm" container>
        <LegacyGrid>
          <h2 style={{ textAlign: 'center' }}>Fill Sm 16</h2>
        </LegacyGrid>
        <LegacyGrid container templateColumns="repeat(6, 1fr)" rowSpacing={6}>
          {fillSmIcons.map(({ name, size, Component }) => (
            <Icon
              key={name}
              size={size}
              name={name}
              component={Component}
              color={color}
            />
          ))}
        </LegacyGrid>
      </LegacyGrid>
      <LegacyGrid key="outlinemd" container>
        <LegacyGrid>
          <h2 style={{ textAlign: 'center' }}>Outline Md 24</h2>
        </LegacyGrid>
        <LegacyGrid container templateColumns="repeat(6, 1fr)" rowSpacing={6}>
          {outlineMdIcons.map(({ name, size, Component }) => (
            <Icon
              key={name}
              size={size}
              name={name}
              component={Component}
              color={color}
            />
          ))}
        </LegacyGrid>
      </LegacyGrid>
      <LegacyGrid key="outlinesm" container>
        <LegacyGrid>
          <h2 style={{ textAlign: 'center' }}>Outline Sm 16</h2>
        </LegacyGrid>
        <LegacyGrid container templateColumns="repeat(6, 1fr)" rowSpacing={6}>
          {outlineSmIcons.map(({ name, size, Component }) => (
            <Icon
              key={name}
              size={size}
              name={name}
              component={Component}
              color={color}
            />
          ))}
        </LegacyGrid>
      </LegacyGrid>

      <LegacyGrid key="сompaniesLogos" container>
        <LegacyGrid>
          <h2 style={{ textAlign: 'center' }}>Сompanies Logos</h2>
        </LegacyGrid>
        <LegacyGrid container templateColumns="repeat(6, 1fr)" rowSpacing={6}>
          {сompaniesLogos.map(({ name, size, Component }) => (
            <Icon
              key={name}
              size={size}
              name={name}
              component={Component}
              color={color}
            />
          ))}
        </LegacyGrid>
      </LegacyGrid>
    </>
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
