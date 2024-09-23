import { type Meta, type StoryObj } from '@storybook/react';
import { BinOutlineMd } from '@astral/icons';

import { IconButton } from '../IconButton';

import { ConfirmAction } from './ConfirmAction';

/**
 * Используется для подтверждения действия пользователя.
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=30167-461154&node-type=frame&t=GgA8Lk5RPtTzJk3I-0)
 * ### [Guide]()
 */
const meta: Meta<typeof ConfirmAction> = {
  title: 'Components/ConfirmAction',
  component: ConfirmAction,
};

export default meta;

type Story = StoryObj<typeof ConfirmAction>;

export const Interaction: Story = {
  args: {
    text: 'Уверены, что хотите отменить запрос на подписание?',
    confirmButtonProps: {
      text: 'Да, отменить запрос',
    },
    actionComponent: (props) => (
      <IconButton variant="light" {...props}>
        <BinOutlineMd />
      </IconButton>
    ),
    onConfirm: () => {},
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <ConfirmAction
      actionComponent={(props) => (
        <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>
      )}
      onConfirm={() => alert('Delete')}
    />
  );
};

/**
 * Пропс `text` позволяет добавить поясняющий текст
 */
export const WithText = () => {
  return (
    <ConfirmAction
      text="Уверены, что хотите отменить запрос на подписание?"
      confirmButtonProps={{
        text: 'Да, отменить запрос',
      }}
      actionComponent={(props) => (
        <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>
      )}
      onConfirm={() => alert('Delete')}
    />
  );
};

/**
 * При осуществлении важных действий, например при удалении, можно добавить акцент кнопке подтверждения
 */
export const AccentedConfirmationButton = () => {
  return (
    <ConfirmAction
      text="Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?"
      confirmButtonProps={{
        text: 'Да, удалить',
        isAccented: true,
      }}
      actionComponent={(props) => (
        <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>
      )}
      onConfirm={() => alert('Delete')}
    />
  );
};

export const PopoverProps = () => {
  return (
    <ConfirmAction
      actionComponent={(props) => (
        <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>
      )}
      popoverProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      }}
      onConfirm={() => alert('Delete')}
    />
  );
};
