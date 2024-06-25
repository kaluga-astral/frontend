import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { DEFAULT_SEPARATOR } from '../Description/constants';

import { DescriptionList, type DescriptionListItem } from './DescriptionList';

const FAKE_ITEMS: DescriptionListItem[] = [
  {
    name: 'Название показателя 1',
    value: 'Значение показателя 1',
    options: { color: 'error', nameMaxWidth: '100px', canCopy: true },
  },
  {
    name: 'Название показателя 2',
    value: 'Значение показателя 2',
    options: { color: 'success', nameMaxWidth: '200px', canCopy: true },
  },
  {
    name: 'Название показателя 3',
    value: 'Значение показателя 3',
    options: { color: 'success', canCopy: true },
  },
];

describe('DescriptionList', () => {
  it('Отображение списка элементов, без заданных options', () => {
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

  it('Отображается указанный разделитель, если задан separator', () => {
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
      {
        name: 'Название показателя 2',
        value: 'Значение показателя 2',
        options: {
          renderOption: (value) => <h3 data-testid="custom-render">{value}</h3>,
        },
      },
    ];

    renderWithTheme(<DescriptionList items={renderPropsItems} />);

    const renderProps = screen.getAllByTestId('custom-render');

    expect(renderProps).toHaveLength(renderPropsItems.length);
    expect(renderProps[0].tagName).toBe('P');
    expect(renderProps[1].tagName).toBe('H3');
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

  it('Цвет текста меняется, если есть color', () => {
    renderWithTheme(<DescriptionList items={FAKE_ITEMS} />);

    const colorMap: { [key: string]: string } = {
      success: 'rgb(0, 135, 90)', // (#00875A)
      error: 'rgb(242, 70, 70)', // (#F24646)
    };

    FAKE_ITEMS.forEach(({ value, options }) => {
      const valueElement = screen.getByText(value as string);

      expect(valueElement).toBeInTheDocument();

      if (options?.color) {
        const style = getComputedStyle(valueElement);

        expect(style.color).toBe(colorMap[options.color]);
      }
    });
  });

  it('Максимальная ширина Name ограничивается, при nameMaxWidth', () => {
    renderWithTheme(<DescriptionList items={FAKE_ITEMS} />);

    FAKE_ITEMS.forEach(({ name, options }) => {
      const expectedMaxWidth = options?.nameMaxWidth ?? 'none';
      const nameElement = screen.getByText(
        `${name}${DEFAULT_SEPARATOR}` as string,
      );

      expect(nameElement).toBeInTheDocument();

      if (expectedMaxWidth !== 'none') {
        expect(nameElement).toHaveStyle({ maxWidth: expectedMaxWidth });
      }
    });
  });
});
