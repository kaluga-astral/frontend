import { useState } from 'react';
import { type Meta } from '@storybook/react';
import { arrayMove } from '@dnd-kit/sortable';
import { type DragEndEvent } from '@dnd-kit/core';
import { fakerRU } from '@faker-js/faker';
import { BinOutlineMd } from '@astral/icons';

import { styled } from '../styles';
import { IconButton } from '../IconButton';
import { SortableListItem } from '../SortableListItem';

import { SortableList } from './SortableList';
import { VirtualDataDisplayStrategy } from './DataDisplayStrategy';

const meta: Meta<typeof SortableList> = {
  title: 'Components/Data Display/SortableList',
  component: SortableList,
};

export default meta;

type DataItem = {
  id: string;
  text: string;
};

const generateData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: fakerRU.string.uuid(),
    text: `Договор на оказание услуг №${i + 1}`,
  }));
};

type ItemProps = {
  item: DataItem;
};

type RemovableItemProps = {
  item: DataItem;
  onDelete: (item: DataItem) => void;
};

const Item = ({ item }: ItemProps) => {
  return (
    <SortableListItem
      id={item.id}
      isDisabled={item.text === 'Договор на оказание услуг №6'}
    >
      {item.text}
    </SortableListItem>
  );
};

const Container = styled.div`
  width: 100%;
  height: 240px;
`;

export const Example = () => {
  const [slicedData, setSlicedData] = useState(generateData());

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = slicedData.findIndex((item) => item.id === active.id);
      const newIndex = slicedData.findIndex((item) => item.id === over.id);

      setSlicedData(arrayMove(slicedData, oldIndex, newIndex));
    }
  };

  return (
    <Container>
      <SortableList
        keyId="id"
        data={slicedData}
        onDragEnd={handleDragEnd}
        ListItem={Item}
        isLockedHorizontalAxis={false}
      />
    </Container>
  );
};

export const LockedHorizontalAxis = () => {
  const [slicedData, setSlicedData] = useState(generateData());

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = slicedData.findIndex((item) => item.id === active.id);
      const newIndex = slicedData.findIndex((item) => item.id === over.id);

      setSlicedData(arrayMove(slicedData, oldIndex, newIndex));
    }
  };

  return (
    <Container>
      <SortableList
        keyId="id"
        data={slicedData}
        onDragEnd={handleDragEnd}
        ListItem={Item}
        isLockedHorizontalAxis={true}
        DataDisplayStrategy={VirtualDataDisplayStrategy}
      />
    </Container>
  );
};

export const RemovableItems = () => {
  const [slicedData, setSlicedData] = useState(generateData());

  const ItemWithAction = ({ item, onDelete }: RemovableItemProps) => {
    const handleDeleteClick = () => {
      onDelete(item);
    };

    return (
      <SortableListItem
        id={item.id}
        isDisabled={item.text === 'Договор на оказание услуг №6'}
        actions={
          <>
            <IconButton>
              <BinOutlineMd onClick={handleDeleteClick} />
            </IconButton>
          </>
        }
      >
        {item.text}
      </SortableListItem>
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = slicedData.findIndex((item) => item.id === active.id);
      const newIndex = slicedData.findIndex((item) => item.id === over.id);

      setSlicedData(arrayMove(slicedData, oldIndex, newIndex));
    }
  };

  const handleDelete = (data: DataItem) => {
    setSlicedData((items) => items.filter((item) => item.id !== data.id));
  };

  return (
    <Container>
      <SortableList
        keyId="id"
        data={slicedData}
        onDragEnd={handleDragEnd}
        ListItem={({ item }) => (
          <ItemWithAction item={item} onDelete={handleDelete} />
        )}
        isLockedHorizontalAxis={true}
      />
    </Container>
  );
};
