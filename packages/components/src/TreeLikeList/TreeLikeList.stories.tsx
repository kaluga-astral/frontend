import { useState } from 'react';
import { type Meta } from '@storybook/react';

import { Typography } from '../Typography';
import { styled } from '../styles';
import { Description } from '../Description';

import { TreeLikeList, type TreeLikeListProps } from './TreeLikeList';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21329-76225&t=ocy6798zA4pD2nYD-0)
 * ### [Guide]()
 * TreeLikeList - интерактивный компонент, который поддерживает вложенность объектов,
 * позволяет выбрать множество (multiselect) объектов из списка,
 * свернуть (скрыть) и развернуть (показать) вложенные элементы.
 * Работает как обычный список в контексте выбора элементов, это означает что выбор родителя не влияет на дочерние элементы, а выбор дочерних на родителя.
 */
const meta: Meta<typeof TreeLikeList> = {
  title: 'Components/Tree/TreeLikeList',
  component: TreeLikeList,
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
    label: 'Организация 1',
    note: 'Руководитель',
    children: [
      {
        id: '11',
        label: 'Подразделение 1.1',
        note: 'Руководитель',
      },
      {
        id: '12',
        label: 'Подразделение 1.2',
        note: 'Руководитель',
      },
    ],
  },
  {
    id: '2',
    label: 'Организация 2',
    note: 'Руководитель',
  },
];

const Wrapper = styled.div`
  height: 240px;
  overflow-y: auto;
`;

export const Example = () => {
  const [value, setValue] = useState<Array<string> | undefined>(['211', '4']);

  const fakeData = [
    {
      id: 'a',
      label: 'Item A',
    },
    {
      id: 'b',
      label: 'Item B',
    },
    {
      id: 'c',
      label: 'Item C',
    },
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
    {
      id: '4',
      label: 'Item 4',
    },
  ];

  return (
    <Wrapper>
      <TreeLikeList data={fakeData} value={value} onChange={setValue} />
    </Wrapper>
  );
};

/**
 * С помощью `note` можно задавать подзаголовок элементам дерева
 */
export const NoteItem = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_NOTE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Организация 3',
      note: (
        <Description>
          <Description.Name>ИНН</Description.Name>
          <Description.Value>1234567890</Description.Value>
        </Description>
      ),
    },
  ];

  return <TreeLikeList data={fakeData} value={value} onChange={setValue} />;
};

export const RenderItem = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_NOTE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Организация 3',
      note: (
        <Description>
          <Description.Name>ИНН</Description.Name>
          <Description.Value>1234567890</Description.Value>
        </Description>
      ),
    },
  ];

  const CustomItem = styled.div`
    padding-left: ${({ theme }) => theme.spacing(1)};
  `;

  const renderItem: TreeLikeListProps['renderItem'] = ({ label, note, id }) => (
    <CustomItem>
      <Typography>
        <Typography color="textSecondary" component="span">
          #{id}
        </Typography>
        &nbsp;{label}
      </Typography>
      {note && (
        <Typography variant="h7" color="success">
          {note}
        </Typography>
      )}
    </CustomItem>
  );

  return (
    <TreeLikeList
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
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeLikeList
      data={fakeData}
      value={value}
      isInitialExpanded
      onChange={setValue}
    />
  );
};

/**
 * `expandedLevel` позволяет ограничить глубину раскрытия дерева при `isInitialExpanded=true`
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
    <TreeLikeList
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
    <TreeLikeList
      data={fakeData}
      value={value}
      disabledItems={[{ id: '21', disableReason: 'Элемент заблокирован' }, '3']}
      onChange={setValue}
    />
  );
};
