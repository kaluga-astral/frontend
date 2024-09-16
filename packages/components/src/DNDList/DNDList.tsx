import { type ReactElement, type ReactNode, useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  type DraggableProvided,
  Droppable,
  type OnDragEndResponder,
} from 'react-beautiful-dnd';
import { Virtuoso } from 'react-virtuoso';

import { type DataListProps } from '../DataList';

import { HeightPreserving } from './styles';

type DNDListProps = Omit<
  DataListProps<{ id: string; text: string }>,
  'itemContent'
> & {
  onDragEnd: OnDragEndResponder;
  itemContent: (
    provided: DraggableProvided,
    dataItem: { id: string; text: string },
    isDragging: boolean,
    { index, className }: { index: number; className: string },
  ) => ReactElement;
};

type HeightPreservingItemProps = {
  children: ReactNode;
  'data-known-size': number;
};

export const HeightPreservingItem = ({
  children,
  ...props
}: HeightPreservingItemProps) => {
  const [size, setSize] = useState(0);
  const knownSize = props['data-known-size'];

  useEffect(() => {
    setSize((prevSize) => {
      return knownSize == 0 ? prevSize : knownSize;
    });
  }, [knownSize]);

  // check style.css for the height-preserving-container rule
  return (
    <HeightPreserving
      {...props}
      className="height-preserving-container"
      style={{
        //@ts-ignore
        '--child-height': `${size}px`,
      }}
    >
      {children}
    </HeightPreserving>
  );
};

export const DNDList = (props: DNDListProps) => {
  const { itemContent, data, onDragEnd } = props;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="droppable"
        mode="virtual"
        renderClone={(provided, snapshot, rubric) =>
          itemContent(
            provided,
            //@ts-ignore
            data?.[rubric.source.index],
            snapshot.isDragging,
            {
              index: rubric.source.index,
              className: '',
            },
          )
        }
      >
        {(provided) => {
          return (
            <Virtuoso
              data={data}
              components={{
                //@ts-ignore
                Item: HeightPreservingItem,
              }}
              //@ts-ignore
              scrollerRef={provided.innerRef}
              itemContent={(index, item) => {
                return (
                  <Draggable draggableId={item.id} index={index} key={item.id}>
                    {(draggableProvided) => {
                      return itemContent(draggableProvided, item, false, {
                        index: index,
                        className: '',
                      });
                    }}
                  </Draggable>
                );
              }}
            />
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
