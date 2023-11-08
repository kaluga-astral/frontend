import { Meta, StoryObj } from '@storybook/react';

import { AstralProductSwitcher } from './AstralProductSwitcher';
import { MOCK_FETCH_IDENTITY_PRODUCT } from './AstralProductSwitcher.stub';

const IDENTITY_URL = 'https://identity';

/**
 * Реализация виджета продуктов Astral. Поддерживает мультиэкосистемность с помощью передачи параметра ```tenantId```.
 * Внутри себя содержит всю логику получения, форматирования и отображения продуктов из Identity
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=9236-108012&mode=design&t=j9or0RjIfmARezGD-4)
 * ### [Guide]()
 */
const meta: Meta<typeof AstralProductSwitcher> = {
  title: 'Features/ProductSwitcher/AstralProductSwitcher',
  component: AstralProductSwitcher,
  parameters: {
    mockData: MOCK_FETCH_IDENTITY_PRODUCT,
    refreshStoryOnUpdate: true,
  },
};

export default meta;

type Story = StoryObj<typeof AstralProductSwitcher>;

export const Interaction: Story = {
  args: {
    identityUrl: IDENTITY_URL,
    tenantId: 'astral',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <AstralProductSwitcher identityUrl={IDENTITY_URL} />
);

/**
 * Prop ```tenantId``` позволяет задать экосистему identity.
 */
export const Tenant = () => (
  <AstralProductSwitcher identityUrl={IDENTITY_URL} tenantId="eco" />
);
