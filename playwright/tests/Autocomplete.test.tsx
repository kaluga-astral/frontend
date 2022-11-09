import { expect, test } from '@playwright/experimental-ct-react';

import { Autocomplete } from '../../packages/ui/src';
import { Mount } from '../common';

test('Autocomplete: по дефолту отображается contained вариант', async ({
  mount,
}) => {
  const component = await mount(
    <Mount>
      <Autocomplete options={[]} />
    </Mount>,
  );

  const color = await component.evaluate((el) => {
    return getComputedStyle(el).getPropertyValue('background-color');
  });

  await expect(color).toBe('red');
});
