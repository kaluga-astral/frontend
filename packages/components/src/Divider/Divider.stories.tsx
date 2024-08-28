import { type Meta } from '@storybook/react';

import { ListItemButton } from '../ListItemButton';
import { ListItemText } from '../ListItemText';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { Grid } from '../Grid';
import { styled } from '../styles';

import { Divider } from './Divider';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=578-20865&t=NdgfZ0Hm3cEsi2ev-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Divider> = {
  title: 'Components/Data Display/Divider',
  component: Divider,
};

export default meta;

const Item = styled.div`
  padding: 10px;
  align-items: flex-center;
  text-align: center;
`;

export const Example = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItemButton>
        <ListItemText primary="Button" />
      </ListItemButton>
      <Divider light />
      <ListItemButton>
        <ListItemText primary="Button" />
      </ListItemButton>
      <Divider />
    </List>
  );
};

export const Orientation = () => (
  <>
    <Grid container rows={2} columns={2} rowSpacing={5}>
      <Item>Horizontal</Item>
      <Divider orientation="horizontal" flexItem />
      <Item>Vertical</Item>
      <Divider orientation="vertical" flexItem />
      <Item></Item>
    </Grid>
  </>
);
