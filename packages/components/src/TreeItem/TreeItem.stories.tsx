import { useState } from 'react';
import { type Meta } from '@storybook/react';

import { styled } from '../styles';

import { TreeItem } from './TreeItem';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21329-76225&t=ocy6798zA4pD2nYD-0)
 * ### [Guide]()
 * TreeItem - базовый компонент для построения дерева списка
 */
const meta: Meta<typeof TreeItem> = {
  title: 'Components/TreeItem',
  component: TreeItem,
};

export default meta;

const Wrapper = styled.div`
  overflow: hidden;
`;

export const Example = () => {
  const [value, setValue] = useState<string | undefined>();

  const isSelected = Boolean(value);

  const handleClick = () =>
    setValue((currentValue) => (currentValue ? undefined : 'test'));

  return (
    <Wrapper>
      <TreeItem
        isSelected={isSelected}
        label="Item"
        value={value}
        onClick={handleClick}
      />
    </Wrapper>
  );
};

export const RootItem = () => (
  <Wrapper>
    <TreeItem isRoot label="Group" level={0}>
      <TreeItem label="Item 1" level={1} />
      <TreeItem label="Item 2" level={1} />
    </TreeItem>
  </Wrapper>
);

export const Selected = () => (
  <Wrapper>
    <TreeItem isSelected label="Item" level={1} />
  </Wrapper>
);

export const Level = () => (
  <Wrapper>
    <TreeItem label="Item 0" level={0} />
    <TreeItem label="Item 1" level={1} />
    <TreeItem label="Item 2" level={2} />
    <TreeItem label="Item 3" level={3} />
  </Wrapper>
);
