import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { DEFAULT_SEPARATOR } from '../Description/constants';

import { DescriptionList, type DescriptionListItem } from './DescriptionList';

const FAKE_ITEMS: DescriptionListItem[] = [
  {
    name: 'Название показателя 1',
    value: 'Значение показателя 1',
    options: { canCopy: true },
  },
];

describe('DescriptionList', () => {
  it('Элементы списка отображаются', () => {
    const itemsWithoutOptions: DescriptionListItem[] = [
      {
        name: 'Название показателя 1',
        value: 'Значение показателя 1',
      },
      {
        name: 'Название показателя 2',
        value: 'Значение показателя 2',
      },
    ];

    renderWithTheme(<DescriptionList items={itemsWithoutOptions} />);

    itemsWithoutOptions.forEach(({ name, value }) => {
      expect(
        screen.getByText(`${name}${DEFAULT_SEPARATOR}` as string),
      ).toBeInTheDocument();

      expect(screen.getByText(value as string)).toBeInTheDocument();
    });
  });

  it('Разделитель,заданный через separator, отображается', () => {
    const customSeparator = ';';

    renderWithTheme(
      <DescriptionList items={FAKE_ITEMS} separator={customSeparator} />,
    );

    FAKE_ITEMS.forEach((item) => {
      expect(
        screen.getByText(`${item.name}${customSeparator}` as string),
      ).toBeInTheDocument();

      expect(screen.getByText(item.value as string)).toBeInTheDocument();
    });
  });

  it('Value меняет поведение, при renderOption', () => {
    const renderPropsItems: DescriptionListItem[] = [
      {
        name: 'Название показателя 1',
        value: 'Значение показателя 1',
        options: {
          renderOption: (value) => <p data-testid="custom-render">{value}</p>,
        },
      },
    ];

    renderWithTheme(<DescriptionList items={renderPropsItems} />);

    const renderProps = screen.getAllByTestId('custom-render');

    expect(renderProps[0].tagName).toBe('P');
  });

  it('Значение копируется в буфер обмена при клике на текст, если canCopy=true', async () => {
    const writeTextSpy = vi.fn(() => Promise.resolve());

    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextSpy,
      },
    });

    renderWithTheme(<DescriptionList items={FAKE_ITEMS} />);

    FAKE_ITEMS.forEach(({ value }) => {
      const valueElement = screen.getByText(value as string);

      valueElement.click();
      expect(writeTextSpy).toBeCalled();
    });
  });
});
