import {
  type ComponentProps,
  type ElementType,
  type ReactElement,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Collapse } from '../../Collapse';

import { List, type ListProps } from './List';
import { ItemButton } from './ItemButton';

export type ItemProps<TComponent extends ElementType = ElementType> = {
  collapsedIn: boolean;
  item: [
    key: string,
    value: {
      icon: ReactElement;
      text: ReactNode;
      active?: boolean;
      items?: ListProps['items'];
      component?: TComponent;
      // TODO Хак через Omit позволяет решить проблему с потерей типов для props
      // Необходимо решить в рамках тех.долга https://track.astral.ru/soft/browse/UIKIT-1451
    } & Omit<
      ComponentProps<ElementType extends TComponent ? 'button' : TComponent>,
      ''
    >,
  ];
};

export const Item = <TComponent extends ElementType>(
  props: ItemProps<TComponent>,
) => {
  const {
    collapsedIn,
    item: [, value],
  } = props;

  const {
    active: externalActive,
    icon,
    items,
    text,
    component,
    ...componentProps
  } = value;

  const [opened, setOpened] = useState(
    items?.some(([, { active }]) => {
      return active;
    }),
  );

  const selected = useMemo(() => {
    return opened ? false : externalActive;
  }, [opened, externalActive]);

  const handleClick = useCallback(() => {
    setOpened((prevValue) => {
      if (typeof prevValue === 'boolean') {
        return !prevValue;
      }

      return;
    });
  }, []);

  return (
    <li>
      <ItemButton
        opened={opened}
        collapsedIn={collapsedIn}
        selected={selected}
        text={text}
        icon={icon}
        component={component}
        {...componentProps}
        onClick={handleClick}
      />

      {items && (
        <Collapse in={opened}>
          <List collapsedIn={collapsedIn} items={items} />
        </Collapse>
      )}
    </li>
  );
};
