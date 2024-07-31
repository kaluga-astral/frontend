import { type ElementType, type ReactNode } from 'react';
import { List as MuiList } from '@mui/material';
import { PageDotOutlineMd } from '@astral/icons';

import { ItemButton } from '../ItemButton';

export type ListProps = {
  collapsedIn: boolean;
  items: Array<
    [
      key: string,
      value: {
        text: ReactNode;
        active: boolean;
        component: ElementType;
      },
    ]
  >;
};

export const List = (props: ListProps) => {
  const { collapsedIn, items } = props;

  return (
    <MuiList disablePadding>
      {items.map((item) => {
        const [key, value] = item;

        return (
          <li key={key}>
            <ItemButton
              collapsedIn={collapsedIn}
              selected={value.active}
              text={value.text}
              icon={<PageDotOutlineMd />}
              component={value.component}
            />
          </li>
        );
      })}
    </MuiList>
  );
};
