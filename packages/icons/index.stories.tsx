import { SvgIcon, type SvgIconProps } from '@mui/material';
import { type Meta } from '@storybook/react';
import {
  type FunctionComponent,
  type ReactNode,
  type SyntheticEvent,
  useState,
} from 'react';

import { Button, LegacyGrid, OverflowTypography } from '../components';

// eslint-disable-next-line import/order
import { CopyOutlineSm } from './generated-themed-icons';

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

/**
 * Иконки дизайн-системы Астрал-Софт
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=1-343&mode=design&t=K2c3EsjCTx9bHCuK-0)
 * ### [Guide]()
 */
const meta: Meta<typeof SvgIcon> = {
  title: 'Icons/Icons',
  component: SvgIcon,
};

export default meta;

// @ts-ignore
const Icon = ({ component: Component, name, size, ...props }) => {
  const [isVisibleCopy, setIsVisibleCopy] = useState<boolean>(false);

  const handleMouseLeave = () => setIsVisibleCopy(false);

  const handleMouseEnter = () => setIsVisibleCopy(true);
  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    event.stopPropagation();
    navigator.clipboard.writeText(name);
  };

  return (
    <Button
      variant="text"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ height: '80px', padding: 'unset' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100px',
          justifySelf: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          {isVisibleCopy && (
            <CopyOutlineSm
              style={{
                fontSize: '16px',
                position: 'absolute',
                left: 0,
                color: '#778DA8',
              }}
            />
          )}
          <Component
            {...props}
            style={{ ...props.style, width: size, height: size }}
          />
        </div>

        <OverflowTypography
          style={{
            marginTop: '20px',
          }}
          tooltipProps={{ placement: 'bottom' }}
        >
          {name}
        </OverflowTypography>
      </div>
    </Button>
  );
};

const IconGallery = ({ children }: { children: ReactNode }) => (
  <div style={{ width: '100%' }}>
    <LegacyGrid
      container
      templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
      spacing={5}
    >
      {children}
    </LegacyGrid>
  </div>
);

export const FillMdIcons = (props: SvgIconProps) => (
  <IconGallery>
    {fillMdIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const FillSmIcons = (props: SvgIconProps) => (
  <IconGallery>
    {fillSmIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const OutlineMdIcons = (props: SvgIconProps) => (
  <IconGallery>
    {outlineMdIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const OutlineSmIcons = (props: SvgIconProps) => (
  <IconGallery>
    {outlineSmIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const Logos = (props: SvgIconProps) => (
  <IconGallery>
    {сompaniesLogos.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);
