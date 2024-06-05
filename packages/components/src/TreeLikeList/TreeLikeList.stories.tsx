import { type ReactNode, useState } from 'react';
import { type Meta } from '@storybook/react';

import { styled } from '../styles';

import { TreeLikeList } from './TreeLikeList';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21329-76225&t=ocy6798zA4pD2nYD-0)
 * ### [Guide]()
 * Дерево объектов - интерактивный компонент, который поддерживает вложенность объектов,
 * позволяет выбрать один объект (single select) или множество (multiselect) объектов из списка,
 * свернуть (скрыть) и развернуть (показать) вложенные элементы
 */
const meta: Meta<typeof TreeLikeList> = {
  title: 'Components/TreeLikeList',
  component: TreeLikeList,
};

export default meta;

const TREE_LIST_MOCK_DATA = [
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
  {
    id: '3',
    label: 'Item 3',
  },
];

export const Example = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <TreeLikeList
      data={TREE_LIST_MOCK_DATA}
      value={value}
      onChange={setValue}
    />
  );
};

export const Multiple = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  return (
    <TreeLikeList
      multiple
      data={TREE_LIST_MOCK_DATA}
      value={value}
      onChange={setValue}
    />
  );
};

const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

const Row = ({
  className,
  children,
  color,
}: {
  color: 'red' | 'blue';
  className?: string;
  children?: ReactNode;
}) => (
  <tr className={className} style={{ color }}>
    {children}
  </tr>
);

export const CustomComponents = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  return (
    <TreeLikeList
      multiple
      data={TREE_LIST_MOCK_DATA}
      value={value}
      componentList={Table}
      componentItem={Row}
      itemProps={{
        color: 'blue',
      }}
      onChange={setValue}
    />
  );
};
