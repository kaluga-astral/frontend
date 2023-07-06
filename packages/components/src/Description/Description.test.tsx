import { renderWithTheme, screen } from '@astral/tests';

import { Description } from './Description';
import { DEFAULT_SEPARATOR } from './constants';

describe('Description', () => {
  it('Props:separator: Без указания разделителя, должен выводиться разделитель по умолчанию', () => {
    const name = 'Имя';

    renderWithTheme(
      <Description>
        <Description.Name>{name}</Description.Name>
      </Description>,
    );

    const defaultSeparatorElement = screen.getByText(name + DEFAULT_SEPARATOR);

    expect(defaultSeparatorElement).toBeInTheDocument();
  });

  it('Props:separator: Если определён, отображает указанный разделитель', () => {
    const name = 'Имя';
    const customSeparator = ';';

    renderWithTheme(
      <Description separator={customSeparator}>
        <Description.Name>{name}</Description.Name>
      </Description>,
    );

    const customSeparatorElement = screen.getByText(name + customSeparator);

    expect(customSeparatorElement).toBeInTheDocument();
  });
});
