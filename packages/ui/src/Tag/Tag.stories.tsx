import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

const Template: Story = (args) => <Tag {...args} />;

export const Showcase: Story = () => (
  <Stack direction="column" gap={2}>
    <Stack direction="row" gap={2}>
      <Stack direction="column" gap={2}>
        <h1>Not Clickable</h1>
        <Stack direction="column">
          <h2>Contained </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column">
          <h2>Light </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="small"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      size="medium"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" gap={2}>
        <h1>Clickable</h1>
        <Stack direction="column">
          <h2>Contained </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column">
          <h2>Light </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="small"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      clickable
                      size="medium"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <h1>Disabled</h1>
    <Stack direction="row" gap={2}>
      <Stack direction="column" gap={2}>
        <h1>Not Clickable</h1>
        <Stack direction="column">
          <h2>Contained </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column">
          <h2>Light </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="small"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      size="medium"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" gap={2}>
        <h1>Clickable</h1>
        <Stack direction="column">
          <h2>Contained </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="contained"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column">
          <h2>Light </h2>
          <Stack direction="row" gap={2}>
            <Stack direction="column">
              <h3>Primary </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="primary"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="primary"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>{' '}
            <Stack direction="column">
              <h3>Success </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="success"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="success"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Warning </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="warning"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="warning"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column">
              <h3>Error </h3>
              <Stack direction="column" gap={2}>
                <Stack direction="column" gap={2}>
                  <b>Small</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="small"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                  <b>Medium</b>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="error"
                      rounded
                    />
                    <text>Rounded</text>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Tag
                      label="Tag"
                      disabled
                      clickable
                      size="medium"
                      variant="light"
                      color="error"
                    />
                    <text>Not rounded</text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

Showcase.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});
Default.args = {
  label: 'Tag',
  disabled: false,
  clickable: false,
  size: 'small',
  variant: 'contained',
  color: 'error',
};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
