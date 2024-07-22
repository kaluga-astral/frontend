import { useState } from 'react';
import { type Meta } from '@storybook/react';

import { Typography } from '../../Typography';
import { styled } from '../../styles';

import {
  MultipleTreeList,
  type MultipleTreeListProps,
} from './MultipleTreeList';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21329-76225&t=ocy6798zA4pD2nYD-0)
 * ### [Guide]()
 * MultipleTreeList - интерактивный компонент, который поддерживает вложенность объектов,
 * позволяет выбрать или множество (multiselect) объектов из списка,
 * свернуть (скрыть) и развернуть (показать) вложенные элементы
 */
const meta: Meta<typeof MultipleTreeList> = {
  title: 'Components/Tree/MultipleTreeList',
  component: MultipleTreeList,
};

export default meta;

const FAKE_TREE_LIST_DATA = [
  {
    id: '1',
    label: 'Group 1',
    children: [
      {
        id: '11',
        label: 'Item 1.1',
      },
      {
        id: '12',
        label: 'Item 1.2',
      },
    ],
  },
  {
    id: '2',
    label: 'Group 2',
    children: [
      {
        id: '21',
        label: 'Group 2.1',
        children: [
          {
            id: '211',
            label: 'Item 2.1.1',
          },
          {
            id: '212',
            label: 'Item 2.1.2',
          },
        ],
      },
      {
        id: '22',
        label: 'Group 2.2',
        children: [
          {
            id: '221',
            label: 'Item 2.2.1',
            children: [
              {
                id: '2211',
                label: 'Item 2.2.1.1',
              },
              {
                id: '2212',
                label: 'Item 2.2.1.2',
              },
              {
                id: '2213',
                label: 'Item 2.2.1.3',
              },
            ],
          },
        ],
      },
    ],
  },
];

const FAKE_NOTE_TREE_LIST_DATA = [
  {
    id: '1',
    label: 'Group 1',
    note: 'Group 1 subtitle',
    children: [
      {
        id: '11',
        label: 'Item 1.1',
        note: 'Item 1.1 subtitle',
      },
      {
        id: '12',
        label: 'Item 1.2',
        note: 'Group 1 subtitle',
      },
    ],
  },
  {
    id: '2',
    label: 'Group 2',
    children: [
      {
        id: '21',
        label: 'Group 2.1',
        note: 'Group 2.1 subtitle',
        children: [
          {
            id: '211',
            label: 'Item 2.1.1',
          },
          {
            id: '212',
            label: 'Item 2.1.2',
            note: 'Item 2.1.2.2',
          },
        ],
      },
      {
        id: '22',
        label: 'Group 2.2',
        children: [
          {
            id: '221',
            label: 'Item 2.2.1',
            children: [
              {
                id: '2211',
                label: 'Item 2.2.1.1',
              },
              {
                id: '2212',
                label: 'Item 2.2.1.2',
              },
              {
                id: '2213',
                label: 'Item 2.2.1.3',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const Example = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return <MultipleTreeList data={fakeData} value={value} onChange={setValue} />;
};

const Item = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: baseline;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const RenderItem = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  const renderItem: MultipleTreeListProps['renderItem'] = ({
    renderCollapseButton,
    label,
    note,
  }) => (
    <Item>
      <div>
        {renderCollapseButton && renderCollapseButton()}
        <Typography variant="caption">{label}</Typography>
      </div>
      {note && <Typography color="success">{note}</Typography>}
    </Item>
  );

  return (
    <MultipleTreeList
      data={fakeData}
      value={value}
      renderItem={renderItem}
      onChange={setValue}
    />
  );
};

/**
 * С помощью ```note``` можно задавать подзаголовок элементам дерева
 */
export const NoteItem = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_NOTE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
      note: 'Item 3 subtitle',
    },
  ];

  return <MultipleTreeList data={fakeData} value={value} onChange={setValue} />;
};

/**
 * При наличии флага `isInitialExpanded=true` дерево будет раскрыто по умолчанию
 */
export const InitialExpanded = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <MultipleTreeList
      data={fakeData}
      value={value}
      isInitialExpanded
      onChange={setValue}
    />
  );
};

/**
 * expandedLevel позволяет ограничить глубину раскрытия дерева при `isInitialExpanded=true`
 */
export const ExpandedLevel = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <MultipleTreeList
      data={fakeData}
      value={value}
      isInitialExpanded
      expandedLevel={1}
      onChange={setValue}
    />
  );
};

/**
 * `disabledItems` позволяет заблокировать указанные элементы для взаимодействия.
 * Если элемент заблокирован и содержит дочернии элементы, то они наследуют это свойство.
 */
export const DisabledItems = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <MultipleTreeList
      data={fakeData}
      value={value}
      disabledItems={['21', '3']}
      onChange={setValue}
    />
  );
};
