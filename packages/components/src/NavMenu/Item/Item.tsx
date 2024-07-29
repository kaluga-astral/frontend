import {
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

export type ItemProps = {
  collapsedIn: boolean;
  item: [
    key: string,
    value: {
      icon: ReactElement;
      text: ReactNode;
      active?: boolean;
      component?: ElementType;
      items?: ListProps['items'];
    },
  ];
};

export const Item = (props: ItemProps) => {
  const {
    collapsedIn,
    item: [key, value],
  } = props;
  const [opened, setOpened] = useState(
    value.items?.some(([, { active }]) => {
      return active;
    }),
  );

  const selected = useMemo(() => {
    return opened ? false : value.active;
  }, [opened, value.active]);

  const handleClick = useCallback(() => {
    setOpened((prevValue) => {
      if (typeof prevValue === 'boolean') {
        return !prevValue;
      }

      return;
    });
  }, []);

  return (
    <li key={key}>
      <ItemButton
        opened={opened}
        collapsedIn={collapsedIn}
        selected={selected}
        text={value.text}
        icon={value.icon}
        component={value.component}
        onClick={handleClick}
      />
      {value.items && (
        <Collapse in={opened}>
          <List collapsedIn={collapsedIn} items={value.items} />
        </Collapse>
      )}
    </li>
  );
};
