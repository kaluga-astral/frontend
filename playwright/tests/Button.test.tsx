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

  await expect(color).toBe('red');
});

test('Button: при доступе через tab появляется outline', async ({
  mount,
  page,
}) => {
  const component = await mount(
    <Mount>
      <Button>Btn</Button>
    </Mount>,
  );

  await page.keyboard.down('Tab');

  const outlineWidth = await component.evaluate((el) =>
    getComputedStyle(el).getPropertyValue('outline-width'),
  );

  await expect(outlineWidth).toBe('2px');
});

test('Button: при наведении изменяется цвет', async ({ mount, page }) => {
  const component = await mount(
    <Mount>
      <Button>Btn</Button>
    </Mount>,
  );

  await component.hover();
  await page.waitForTimeout(1000);

  const backgroundColor = await component.evaluate((el) =>
    getComputedStyle(el).getPropertyValue('background-color'),
  );

  await expect(backgroundColor).toBe('');
});
