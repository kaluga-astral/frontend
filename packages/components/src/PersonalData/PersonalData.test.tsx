import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { ConfigProvider } from '../ConfigProvider';

import { PersonalData } from './PersonalData';

describe('PersonalData tests', () => {
  it('дочерний элемент получает цсс класс из конфига', () => {
    renderWithTheme(
      <ConfigProvider
        hidePersonalDataClassname="foo"
        captureException={() => {}}
      >
        <PersonalData>
          <div>lorem</div>
        </PersonalData>
      </ConfigProvider>,
    );

    const div = screen.getByText('lorem');

    expect(div.className).toBe('foo');
  });

  it('hidePersonalData:false дочерний элемент не получает дополнительный цсс класс', () => {
    renderWithTheme(
      <ConfigProvider
        hidePersonalDataClassname="foo"
        hidePersonalData={false}
        captureException={() => {}}
      >
        <PersonalData>
          <div>lorem</div>
        </PersonalData>
      </ConfigProvider>,
    );

    const div = screen.getByText('lorem');

    expect(div.className).not.toBe('foo');
  });
});
