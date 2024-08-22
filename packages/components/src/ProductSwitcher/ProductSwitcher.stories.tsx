import { type Meta, type StoryObj } from '@storybook/react';

import { ProductSwitcher } from './ProductSwitcher';
import { handleGetProducts, handleReject } from './ProductSwitcher.stub';

/**
 * Реализация абстрактного виджета продуктов. Product Switcher дает возможность быстрого перехода к другому продукту.\
 * Это Абстрактный компонент, реализация виджета продуктов Астрала представлен в [AstralProductSwitcher](/?path=/docs/features-productswitcher-astralproductswitcher--docs)
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=9236-108012&mode=design&t=j9or0RjIfmARezGD-4)
 * ### [Guide]()
 */
const meta: Meta<typeof ProductSwitcher> = {
  title: 'Components/Utils/ProductSwitcher',
  component: ProductSwitcher,
};

export default meta;

type Story = StoryObj<typeof ProductSwitcher>;

export const Interaction: Story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
};

/**
 * Стандартное использования виджета продуктов
 */
export const Example = () => (
  <ProductSwitcher getProducts={handleGetProducts} />
);

/**
 * Обработка ошибки при загрузке продуктов
 */
export const Error = () => <ProductSwitcher getProducts={handleReject} />;
