import { useState } from 'react';
import { type Meta } from '@storybook/react';
import { arrayMove } from '@dnd-kit/sortable';
import { type DragEndEvent } from '@dnd-kit/core';
import { fakerRU } from '@faker-js/faker';
import { BinOutlineMd, EditOutlineMd } from '@astral/icons';

import { styled } from '../styles';
import { IconButton } from '../IconButton';

import { SortableList } from './SortableList';
import { SortableListItem } from './SortableListItem';

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

const Item = ({ item }: ItemProps) => {
  return (
    <SortableListItem
      keyId={item.id}
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
  const [loading, setLoading] = useState(false);
  const [slicedData, setSlicedData] = useState(generateData());

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = slicedData.findIndex((item) => item.id === active.id);
      const newIndex = slicedData.findIndex((item) => item.id === over.id);

      setSlicedData(arrayMove(slicedData, oldIndex, newIndex));
    }
  }

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...generateData()]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <SortableList
        keyId="id"
        data={slicedData}
        isLoading={loading}
        onDragEnd={handleDragEnd}
        onEndReached={incrementData}
        isEndReached={false}
        onRetry={() => incrementData}
        ListItem={Item}
        isLockedHorizontalAxis={false}
      />
    </Container>
  );
};

export const LockedHorizontalAxis = () => {
  const [loading, setLoading] = useState(false);
  const [slicedData, setSlicedData] = useState(generateData());

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = slicedData.findIndex((item) => item.id === active.id);
      const newIndex = slicedData.findIndex((item) => item.id === over.id);

      setSlicedData(arrayMove(slicedData, oldIndex, newIndex));
    }
  }

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...generateData()]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <SortableList
        keyId="id"
        data={slicedData}
        isLoading={loading}
        onDragEnd={handleDragEnd}
        onEndReached={incrementData}
        isEndReached={false}
        onRetry={() => incrementData}
        ListItem={Item}
        isLockedHorizontalAxis={true}
      />
    </Container>
  );
};

export const WithActions = () => {
  const [loading, setLoading] = useState(false);
  const [slicedData, setSlicedData] = useState(generateData());

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = slicedData.findIndex((item) => item.id === active.id);
      const newIndex = slicedData.findIndex((item) => item.id === over.id);

      setSlicedData(arrayMove(slicedData, oldIndex, newIndex));
    }
  }

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...generateData()]);
      setLoading(false);
    }, 1500);
  };

  const handleEditClick = () => {
    alert('Edit click');
  };
  const handleDeleteClick = () => {
    alert('Delete click');
  };

  const ItemWithAction = ({ item }: ItemProps) => {
    return (
      <SortableListItem
        keyId={item.id}
        isDisabled={item.text === 'Договор на оказание услуг №6'}
        actions={
          <>
            <IconButton onClick={handleEditClick}>
              <EditOutlineMd />
            </IconButton>
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

  return (
    <Container>
      <SortableList
        keyId="id"
        data={slicedData}
        isLoading={loading}
        onDragEnd={handleDragEnd}
        onEndReached={incrementData}
        isEndReached={false}
        onRetry={() => incrementData}
        ListItem={ItemWithAction}
        isLockedHorizontalAxis={true}
      />
    </Container>
  );
};
