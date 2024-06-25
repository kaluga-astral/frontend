import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { DEFAULT_SEPARATOR } from '../Description/constants';

import { DescriptionList, type DescriptionListItem } from './DescriptionList';

const items: DescriptionListItem[] = [
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
  it('Корректное отображение списка элементов', () => {
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

  it('Props:separator: Если определен, отображает указанный разделитель', () => {
    const customSeparator = ';';

    renderWithTheme(
      <DescriptionList items={items} separator={customSeparator} />,
    );

    items.forEach((item) => {
      expect(
        screen.getByText(`${item.name}${customSeparator}` as string),
      ).toBeInTheDocument();

      expect(screen.getByText(item.value as string)).toBeInTheDocument();
    });
  });

  it('Render props: Если определен, отображает измененное поведение Value', () => {
    const renderPropsItems: DescriptionListItem[] = [
      {
        name: 'Название показателя 1',
        value: 'Значение показателя 1',
        options: {
          renderOption: (_, value) => (
            <p data-testid="custom-render">{value}</p>
          ),
        },
      },
      {
        name: 'Название показателя 2',
        value: 'Значение показателя 2',
        options: {
          renderOption: (_, value) => (
            <h3 data-testid="custom-render">{value}</h3>
          ),
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

    renderWithTheme(<DescriptionList items={items} />);

    items.forEach(({ value }) => {
      const valueElement = screen.getByText(value as string);

      valueElement.click();
      expect(writeTextSpy).toBeCalled();
    });
  });

  it('Props:color: Если определен, отображает правильный цвет текста для элемента списка', () => {
    renderWithTheme(<DescriptionList items={items} />);

    const colorMap: { [key: string]: string } = {
      success: 'rgb(0, 135, 90)', // (#00875A)
      error: 'rgb(242, 70, 70)', // (#F24646)
    };

    items.forEach(({ value, options }) => {
      const valueElement = screen.getByText(value as string);

      expect(valueElement).toBeInTheDocument();

      if (options?.color) {
        const style = getComputedStyle(valueElement);

        expect(style.color).toBe(colorMap[options.color]);
      }
    });
  });

  it('Props:nameMaxWidth: Если определен, ограничивает максимальную ширину Name', () => {
    renderWithTheme(<DescriptionList items={items} />);

    items.forEach(({ name, options }) => {
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
