import { Stack } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';

import { Tag } from '../Tag';

import { TagBadge } from '.';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=284-7165)
 * ### [Guide]()
 */

const meta: Meta<typeof TagBadge> = {
  title: 'Components/TagBadge',
  component: TagBadge,
};

export default meta;

type Story = StoryObj<typeof TagBadge>;

export const Interaction: Story = {
  args: {
    color: 'primary',
    badgeContent: '12',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const baseProps = {
  label: 'Тэг',
};

export const Example = () => (
  <Tag
    {...baseProps}
    endAddon={(props) => <TagBadge {...props} badgeContent="12" />}
  />
);

export const Default = () => <TagBadge color="primary" badgeContent="12" />;
// TODO Доработать сторю в рамках https://track.astral.ru/soft/browse/UIKIT-1639
export const Color = () => (
  <Stack direction="column" gap={2}>
    <Stack direction="row" gap={2}>
      <Tag
        {...baseProps}
        endAddon={(props) => (
          <TagBadge {...props} color="primary" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        endAddon={(props) => (
          <TagBadge {...props} color="error" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        endAddon={(props) => (
          <TagBadge {...props} color="success" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        endAddon={(props) => (
          <TagBadge {...props} color="warning" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        endAddon={(props) => (
          <TagBadge {...props} color="grey" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        endAddon={(props) => (
          <TagBadge {...props} color="white" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        endAddon={(props) => (
          <TagBadge {...props} color="errorLight" badgeContent="12" />
        )}
      />
    </Stack>
    <Stack direction="row" gap={2}>
      <Tag
        {...baseProps}
        color="primary"
        endAddon={(props) => (
          <TagBadge {...props} color="primary" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        color="error"
        endAddon={(props) => (
          <TagBadge {...props} color="error" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        color="success"
        endAddon={(props) => (
          <TagBadge {...props} color="success" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        color="warning"
        endAddon={(props) => (
          <TagBadge {...props} color="warning" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        color="grey"
        endAddon={(props) => (
          <TagBadge {...props} color="grey" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        color="default"
        endAddon={(props) => (
          <TagBadge {...props} color="white" badgeContent="12" />
        )}
      />
      <Tag
        {...baseProps}
        color="error"
        endAddon={(props) => (
          <TagBadge {...props} color="errorLight" badgeContent="12" />
        )}
      />
    </Stack>
  </Stack>
);

export const Variant = () => (
  <Stack direction="column" gap={2}>
    <Stack direction="row" justifyContent={'center'} gap={2}>
      <Tag
        label="contained"
        variant="contained"
        endAddon={(props) => (
          <TagBadge {...props} color="primary" badgeContent="12" />
        )}
      />
      <Tag
        label="text"
        variant="text"
        endAddon={(props) => (
          <TagBadge {...props} color="error" badgeContent="12" />
        )}
      />
      <Tag
        label="light"
        variant="light"
        endAddon={(props) => (
          <TagBadge {...props} color="success" badgeContent="12" />
        )}
      />
      <Tag
        label="contained"
        variant="contained"
        endAddon={(props) => (
          <TagBadge {...props} color="warning" badgeContent="12" />
        )}
      />
      <Tag
        label="text"
        variant="text"
        endAddon={(props) => (
          <TagBadge {...props} color="grey" badgeContent="12" />
        )}
      />
      <Tag
        label="light"
        variant="light"
        endAddon={(props) => (
          <TagBadge {...props} color="white" badgeContent="12" />
        )}
      />
      <Tag
        label="contained"
        variant="contained"
        endAddon={(props) => (
          <TagBadge {...props} color="errorLight" badgeContent="12" />
        )}
      />
    </Stack>
    <Stack direction="row" justifyContent={'center'} gap={2}>
      <Tag
        label="contained"
        variant="contained"
        endAddon={(props) => (
          <TagBadge
            {...props}
            variant="dot"
            color="primary"
            badgeContent="12"
          />
        )}
      />
      <Tag
        label="text"
        variant="text"
        endAddon={(props) => (
          <TagBadge {...props} variant="dot" color="error" badgeContent="12" />
        )}
      />
      <Tag
        label="light"
        variant="light"
        endAddon={(props) => (
          <TagBadge
            {...props}
            variant="dot"
            color="success"
            badgeContent="12"
          />
        )}
      />
      <Tag
        label="contained"
        variant="contained"
        endAddon={(props) => (
          <TagBadge
            {...props}
            variant="dot"
            color="warning"
            badgeContent="12"
          />
        )}
      />
      <Tag
        label="text"
        variant="text"
        endAddon={(props) => (
          <TagBadge {...props} variant="dot" color="grey" badgeContent="12" />
        )}
      />
      <Tag
        label="light"
        variant="light"
        endAddon={(props) => (
          <TagBadge {...props} variant="dot" color="white" badgeContent="12" />
        )}
      />
      <Tag
        label="contained"
        variant="contained"
        endAddon={(props) => (
          <TagBadge
            {...props}
            variant="dot"
            color="errorLight"
            badgeContent="12"
          />
        )}
      />
    </Stack>
  </Stack>
);
