import { expect, test } from '@playwright/experimental-ct-react';

import { Button } from '../../packages/ui/src';
import { Mount } from '../common';

test('Button: по дефолту отображается contained вариант', async ({ mount }) => {
  const component = await mount(
    <Mount>
      <Button>Btn</Button>
    </Mount>,
  );

  const color = await component.evaluate((el) => {
    return getComputedStyle(el).getPropertyValue('background-color');
  });

  console.log('color', color);
  await expect(color).toBe(true);
});
