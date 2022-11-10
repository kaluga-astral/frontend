import { expect, test } from '@playwright/experimental-ct-react';

import { Button } from '../../src/Button';
import { Mount } from '../common/Mount';
import { getTheme, hexToRgb } from '../common/utils';

test('Button: по дефолту отображается contained вариант', async ({
  mount,
  page,
}) => {
  const component = await mount(
    <Mount>
      <Button>Btn</Button>
    </Mount>,
  );

  const theme = await getTheme(page);

  const color = await component.evaluate((el) => {
    return getComputedStyle(el).getPropertyValue('background-color');
  });

  await expect(color).toBe(hexToRgb(theme.palette.primary.main));
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

  const theme = await getTheme(page);

  await component.hover();
  await page.waitForTimeout(1000);

  const backgroundColor = await component.evaluate((el) =>
    getComputedStyle(el).getPropertyValue('background-color'),
  );

  await expect(backgroundColor).toBe(hexToRgb(theme.palette.primary[700]));
});
