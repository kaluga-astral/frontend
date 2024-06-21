import { useState } from 'react';
import { type Meta } from '@storybook/react';

import { Typography } from '../../Typography';
import { styled } from '../../styles';

import { TreeList, type TreeListProps } from './TreeList';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21329-76225&t=ocy6798zA4pD2nYD-0)
 * ### [Guide]()
 * TreeList - интерактивный компонент, который поддерживает вложенность объектов,
 * позволяет выбрать один объект из списка,
 * свернуть (скрыть) и развернуть (показать) вложенные элементы
 */
const meta: Meta<typeof TreeList> = {
  title: 'Components/Tree/TreeList',
  component: TreeList,
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

export const Example = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return <TreeList data={fakeData} value={value} onChange={setValue} />;
};

const Item = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: baseline;
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const RenderItem = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  const renderItem: TreeListProps['renderItem'] = ({ id, label }) => (
    <Item>
      <Typography variant="caption">#{id}</Typography>
      <Typography color="textSecondary">{label}</Typography>
    </Item>
  );

  return (
    <TreeList
      data={fakeData}
      value={value}
      renderItem={renderItem}
      onChange={setValue}
    />
  );
};

/**
 * При наличии флага `isInitialExpanded=true` дерево будет раскрыто по умолчанию
 */
export const InitialExpanded = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeList
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
  const [value, setValue] = useState<string | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeList
      data={fakeData}
      value={value}
      isInitialExpanded
      expandedLevel={1}
      onChange={setValue}
    />
  );
};
