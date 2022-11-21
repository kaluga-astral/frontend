import { expect, test } from '@playwright/experimental-ct-react';
import sinon from 'sinon';

import { DropdownButton } from '../../../packages/ui/src/DropdownButton';
import { MenuItem } from '../../../packages/ui/src/MenuItem';
import { Mount } from '../../common/Mount';

test.describe('DropdownButton', () => {
  test('Disabled: нельзя нажать кнопку', async ({ mount, page }) => {
    await mount(
      <Mount>
        <DropdownButton disabled name="btn">
          <MenuItem>Item</MenuItem>
        </DropdownButton>
      </Mount>,
    );

    const button = await page.getByRole('button');

    await expect(button).toBeDisabled();
  });

  test('При клике на option закрывается popover', async ({ mount, page }) => {
    await mount(
      <Mount>
        <DropdownButton name="btn">
          <MenuItem>Item</MenuItem>
        </DropdownButton>
      </Mount>,
    );

    await page.getByRole('button').click();
    await page.getByRole('menuitem').click();

    const option = await page.getByText('Item');

    await expect(option).not.toBeVisible();
  });

  test('При клике на option вызывается onClick', async ({ mount, page }) => {
    const onClickSpy = sinon.spy();

    await mount(
      <Mount>
        <DropdownButton name="btn">
          <MenuItem onClick={onClickSpy}>Item</MenuItem>
        </DropdownButton>
      </Mount>,
    );

    await page.getByRole('button').click();
    await page.getByRole('menuitem').click();
    await expect(onClickSpy.called).toBeTruthy();
  });

  // невозможно протестировать из-за сырости пакета. Нельзя определять компоненты внутри файлов с тестами
  // test('Prop:ref: is present', async ({ mount, page }) => {
  //   const resultRef = { current: null };
  //
  //   const ButtonWithRef = () => {
  //     const ref = useRef(null);
  //
  //     useEffect(() => {
  //       resultRef.current = ref.current;
  //     }, []);
  //
  //     return (
  //       <DropdownButton name="btn" ref={ref}>
  //         <MenuItem onClick={() => {}}>Item</MenuItem>
  //       </DropdownButton>
  //     );
  //   };
  //
  //   cy.mount(<ButtonWithRef />);
  // });

  test('При доступе через tab отображается outline', async ({
    mount,
    page,
  }) => {
    await mount(
      <Mount>
        <DropdownButton name="btn">
          <MenuItem>Item</MenuItem>
        </DropdownButton>
      </Mount>,
    );

    await page.keyboard.down('Tab');

    const button = await page.getByRole('button');

    const outlineWidth = await button.evaluate((el) =>
      getComputedStyle(el).getPropertyValue('outline-width'),
    );

    await expect(outlineWidth).toBe('2px');
  });
});
