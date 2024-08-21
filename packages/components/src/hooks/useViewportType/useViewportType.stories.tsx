import { type Meta } from '@storybook/react';

import { Description } from '../../Description';

import { useViewportType } from './useViewportType';

/**
 * useViewportType предоставляет функционал определения типа viewport пользователя
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof useViewportType> = {
  title: 'hooks/useViewportType',
};

export default meta;

/**
 * Свойство ```isMobile``` - флаг, указывающий на размер viewport, сопоставимый с мобильным устройством
 */
export const IsMobile = () => {
  const { isMobile } = useViewportType();

  return (
    <Description>
      <Description.Name>isMobile</Description.Name>
      <Description.Value>{JSON.stringify(isMobile)}</Description.Value>
    </Description>
  );
};
