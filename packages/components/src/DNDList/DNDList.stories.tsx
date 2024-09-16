import React, { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { type OnDragEndResponder } from 'react-beautiful-dnd';

import { styled } from '../styles';

import { DNDList } from './DNDList';
import { ListItem } from './styles';

const meta: Meta<typeof DNDList> = {
  title: 'Components/Data Display/DNDList',
  component: DNDList,
};

export default meta;

type Story = StoryObj<typeof DNDList>;

export const Interaction: Story = {
  args: {},
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const initial = Array.from({ length: 10 }, (_, k) => ({
  id: `id:${k}`,
  text: `item ${k}`,
}));
//@ts-ignore
const Item = ({ provided, item, isDragging }) => {
  return (
    <ListItem
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={provided.draggableProps.style}
      className={`item ${isDragging ? 'is-dragging' : ''}`}
    >
      {item.text}
    </ListItem>
  );
};

const Container = styled.div`
  width: 100%;
  height: 240px;
`;

export const Example = () => {
  const [loading] = useState(true);
  const [slicedData, setSlicedData] = useState(initial);

  function reorder(list: typeof initial, startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
  }

  const onDragEnd = React.useCallback<OnDragEndResponder>(
    (result) => {
      if (result.destination) {
        if (result.source.index === result.destination.index) {
          return;
        }
      }

      setSlicedData((prevItems) =>
        reorder(prevItems, result.source.index, result.destination?.index || 0),
      );
    },
    [setSlicedData],
  );

  return (
    <Container>
      <DNDList
        keyId="id"
        data={slicedData}
        isLoading={loading}
        itemContent={(provided, item, isDragging) => (
          <Item provided={provided} item={item} isDragging={isDragging} />
        )}
        onDragEnd={onDragEnd}
        // onEndReached={incrementData}
        isEndReached={false}
        onRetry={() => undefined}
      />
    </Container>
  );
};
