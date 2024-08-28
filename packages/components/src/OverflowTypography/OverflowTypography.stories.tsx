import { type Meta, type StoryObj } from '@storybook/react';

import { OverflowTypography } from './OverflowTypography';

/**
 * ##Мотивация
 * Вариация [Typography](/story/components-data-display-typography--docs) элемента, с автоматической проверкой на переполнение текстового контента, и если есть переполнение, то тогда добавляется кастомизируемая обертка ```Tooltip```.
 *
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof OverflowTypography> = {
  title: 'Components/Data Display/OverflowTypography',
  component: OverflowTypography,
};

export default meta;

type Story = StoryObj<typeof OverflowTypography>;

export const Interaction: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut delectus dolorem ea, explicabo illo minus nostrum quae quod veniam.',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <OverflowTypography>
        Not enough long text for special behavior.
      </OverflowTypography>
      <br />
      <OverflowTypography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut
        delectus dolorem ea, explicabo illo minus nostrum quae quod veniam.
      </OverflowTypography>
    </div>
  );
};

/**
 * Prop ```rowsCount``` задает число строк, после которого текст будет обрезаться, и добавляться многоточие. По умолчанию равен '1'.
 * *
 * Так же важно учитывать, что элементы с 'rowsCount' больше 1 будут обрезаться по словам, в одну строку будут обрезаться по буквенно
 */
export const RowsCount = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <OverflowTypography>
        default props, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Atque aut delectus dolorem ea, explicabo illo minus nostrum quae quod
        veniam.
      </OverflowTypography>
      <br />
      <OverflowTypography rowsCount={2}>
        rowsCount = 2, like in default Autocomplite component. Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
        tempore.
      </OverflowTypography>
    </div>
  );
};

/**
 * Prop ```tooltipProps``` позволяет задавать кастомизируемые настройки для тултипа
 */
export const TooltipProps = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <OverflowTypography
        tooltipProps={{
          title: 'custom tooltip, with separate settings',
          placement: 'top-start',
        }}
      >
        With custom tooltip settings. Lorem ipsum dolor sit amet, consecrate
        adipisicing elit. Assumenda autem debitis eligendi inventore magni nobis
        perspiciatis quisquam ratione, unde vel?
      </OverflowTypography>
    </div>
  );
};
