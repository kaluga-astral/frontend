import { Meta, StoryObj } from '@storybook/react';

import { MOCK_FETCH_IDENTITY_PRODUCT } from './IdentityProductSwitcher.stub';
import { IdentityProductSwitcher } from './IdentityProductSwitcher';

const IDENTITY_URL = 'https://identity';

/**
 * Реализация виджета продуктов Identity. Позволяет отображать все продукты из всех экосистем Астрала.
 * Внутри себя содержит всю логику получения, форматирования и отображения продуктов и экосистем из Identity
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=16212-21783&mode=design&t=j9or0RjIfmARezGD-4)
 * ### [Guide]()
 */
const meta: Meta<typeof IdentityProductSwitcher> = {
  title: 'Features/ProductSwitcher/IdentityProductSwitcher',
  component: IdentityProductSwitcher,
  parameters: {
    mockData: MOCK_FETCH_IDENTITY_PRODUCT,
  },
};

export default meta;

type Story = StoryObj<typeof IdentityProductSwitcher>;

export const Interaction: Story = {
  args: {
    identityUrl: IDENTITY_URL,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <IdentityProductSwitcher identityUrl={IDENTITY_URL} />
);
