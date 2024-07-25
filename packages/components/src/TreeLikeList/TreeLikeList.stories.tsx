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
    label: 'Наименование организации 1',
    note: 'Руководство',
    children: [
      {
        id: '11',
        label: 'Подразделение 1.1',
        note: (
          <Description>
            <Description.Name>Руководитель</Description.Name>
            <Description.Value>Иванов И.И.</Description.Value>
          </Description>
        ),
      },
      {
        id: '12',
        label: 'Подразделение 1.2',
        note: 'Закрыто',
      },
    ],
  },
  {
    id: '2',
    label: 'Наименование организации 2',
    note: 'Руководство',
    children: [
      {
        id: '21',
        label: 'Подразделение 2.1',
        children: [
          {
            id: '211',
            label: 'Подразделение 2.1.1',
          },
          {
            id: '212',
            label: 'Подразделение 2.1.2',
            note: (
              <Description>
                <Description.Name>Руководитель</Description.Name>
                <Description.Value>Иванов И.И.</Description.Value>
              </Description>
            ),
          },
        ],
      },
      {
        id: '22',
        label: 'Подразделение 2.2',
        children: [
          {
            id: '221',
            label: 'Подразделение 2.2.1',
            children: [
              {
                id: '2211',
                label: 'Подразделение 2.2.1.1',
              },
              {
                id: '2212',
                label: 'Подразделение 2.2.1.2',
              },
              {
                id: '2213',
                label: 'Подразделение 2.2.1.3',
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

  return <TreeLikeList data={fakeData} value={value} onChange={setValue} />;
};

const Item = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-direction: column;
  align-items: baseline;
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const RenderItem = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_NOTE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  const renderItem: TreeLikeListProps['renderItem'] = ({ note, label, id }) => (
    <Item>
      <LabelWrapper>
        <Typography variant="code">#{id}</Typography>
        <Typography>{label}</Typography>
      </LabelWrapper>
      {note && (
        <Typography variant="h7" color="success">
          {note}
        </Typography>
      )}
    </Item>
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
 * С помощью ```note``` можно задавать подзаголовок элементам дерева
 */
export const NoteItem = () => {
  const [value, setValue] = useState<Array<string> | undefined>();

  const fakeData = [
    ...FAKE_NOTE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Подразделение 3',
      note: (
        <Description>
          <Description.Name>Руководитель</Description.Name>
          <Description.Value>Иванов И.И.</Description.Value>
        </Description>
      ),
    },
  ];

  return <TreeLikeList data={fakeData} value={value} onChange={setValue} />;
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
      disabledItems={['21', '3']}
      onChange={setValue}
    />
  );
};
