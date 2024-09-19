import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles';

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

const Wrapper = styled.div`
  max-width: 500px;
`;

export const Example = () => {
  return (
    <Wrapper>
      <OverflowTypography>
        Not enough long text for special behavior.
      </OverflowTypography>
      <br />
      <OverflowTypography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut
        delectus dolorem ea, explicabo illo minus nostrum quae quod veniam.
      </OverflowTypography>
    </Wrapper>
  );
};

/**
 * Prop ```rowsCount``` задает число строк, после которого текст будет обрезаться, и добавляться многоточие. По умолчанию равен '1'.
 * *
 * Так же важно учитывать, что элементы с 'rowsCount' больше 1 будут обрезаться по словам, в одну строку будут обрезаться по буквенно
 */
export const RowsCount = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

/**
 * Prop ```tooltipProps``` позволяет задавать кастомизируемые настройки для тултипа
 */
export const TooltipProps = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

/**
 * Prop `visibleLastSymbolsCount` позволяет задавать число отображаемых символов после сокращения.
 * При использовании `visibleLastSymbolsCount` не работает props `rowsCount`
 */
export const VisibleLastSymbols = () => {
  return (
    <Wrapper>
      <OverflowTypography visibleLastSymbolsCount={10}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        consectetur corporis dolores eos, esse eum expedita hic minima
        molestias, nobis odio qui quisquam rem saepe ut, velit voluptate
        voluptates!
      </OverflowTypography>
    </Wrapper>
  );
};
