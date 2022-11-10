import { expect, test } from '@playwright/experimental-ct-react';

import { Button } from '../../../packages/ui/src/Button';
import { Mount } from '../../common/Mount';
import { getTheme, hexToRgb } from '../../common/utils';

test.describe('ui:Button', () => {
  test('По дефолту отображается contained вариант', async ({ mount, page }) => {
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

  test.describe('При доступе через tab появляется outline', () => {
    ['contained', 'light', 'text', 'link'].forEach((variant) => {
      test(`Button variant ${variant}`, async ({ mount, page }) => {
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
    });
  });

  test('При наведении изменяется цвет', async ({ mount, page }) => {
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

  test.describe('При фокусе отсутствует тень', () => {
    ['contained', 'light', 'text'].forEach((variant) => {
      test(`Button variant ${variant}`, async ({ mount }) => {
        const component = await mount(
          <Mount>
            <Button>Btn</Button>
          </Mount>,
        );

        await component.focus();

        const boxShadow = await component.evaluate((el) =>
          getComputedStyle(el).getPropertyValue('box-shadow'),
        );

        await expect(boxShadow).toBe('none');
      });
    });
  });

  test('Prop disabled блокирует кнопку', async ({ mount, page }) => {
    await mount(
      <Mount>
        <Button disabled>Btn</Button>
      </Mount>,
    );

    const button = await page.locator('button');
    const isDisabled = await button.isDisabled();

    await expect(isDisabled).toBe(true);
  });

  test('Prop loading блокирует кнопку', async ({ mount, page }) => {
    await mount(
      <Mount>
        <Button loading>Btn</Button>
      </Mount>,
    );

    const button = await page.locator('button');
    const isDisabled = await button.isDisabled();

    await expect(isDisabled).toBe(true);
  });
});
