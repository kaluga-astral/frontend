import { renderWithTheme, screen } from '@astral/tests';

import { Description } from './Description';
import { DEFAULT_SEPARATOR, DEFAULT_SYMBOL } from './constants';

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

  it('Props:emptySymbol: Если value пустое, отображается символ тире', () => {
    renderWithTheme(
      <Description>
        <Description.Value></Description.Value>
      </Description>,
    );

    const defaultEmptySymbol = screen.getByText(DEFAULT_SYMBOL);

    expect(defaultEmptySymbol).toBeInTheDocument();
  });

  it('Props: emptySymbol: Если children пустое и stub присутствует, отображается значение stub', () => {
    const stubText = 'текст';

    renderWithTheme(
      <Description>
        <Description.Value stub={stubText}></Description.Value>
      </Description>,
    );

    const stubElement = screen.getByText(stubText);

    expect(stubElement).toBeInTheDocument();
  });

  it('Props: emptySymbol: Если children не пустое и stub пустое, отображается значение children', () => {
    const childrenText = 'текст';

    renderWithTheme(
      <Description>
        <Description.Value>{childrenText}</Description.Value>
      </Description>,
    );

    const childrenElement = screen.getByText(childrenText);

    expect(childrenElement).toBeInTheDocument();
  });

  it('Props: emptySymbol: Если children равно 0, отображается значение 0', () => {
    renderWithTheme(
      <Description>
        <Description.Value>0</Description.Value>
      </Description>,
    );

    const childrenElement = screen.getByText('0');

    expect(childrenElement).toBeInTheDocument();
  });
});
