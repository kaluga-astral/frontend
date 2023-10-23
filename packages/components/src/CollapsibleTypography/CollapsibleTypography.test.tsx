import { renderWithTheme, screen, userEvents } from '@astral/tests';

import {
  CollapsibleTypography,
  DEFAULT_HIDE_TEXT,
  DEFAULT_SHOW_TEXT,
} from './CollapsibleTypography';

const EXAMPLE_SHOW_TEXT = 'Какой-то текст';

beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    value: 200,
  });
});

describe('CollapsibleTypography ', () => {
  it('Prop: rowsCount=1: Появляется кнопка раскрытия ', () => {
    renderWithTheme(
      <CollapsibleTypography rowsCount={1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
        architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
        suscipit ipsa officia.
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByRole('button');

    expect(controlButton).toBeInTheDocument();
  });

  it('Prop: rowsCount={-5}: При отрицательном значении устанавливается значение по умолчанию', async () => {
    renderWithTheme(
      <CollapsibleTypography rowsCount={-5}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
        architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
        suscipit ipsa officia.
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText(DEFAULT_SHOW_TEXT);

    expect(controlButton).toBeInTheDocument();
  });

  it('Prop: showButtonText={"Какой-то текст"}: Изменяется текст кнопки открытия', async () => {
    renderWithTheme(
      <CollapsibleTypography showButtonText={EXAMPLE_SHOW_TEXT}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
        architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
        suscipit ipsa officia.
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText(EXAMPLE_SHOW_TEXT);

    expect(controlButton).toBeInTheDocument();
  });

  it('Click control button: При нажатии на кнопку "Показать" меняется состояние', async () => {
    renderWithTheme(
      <CollapsibleTypography rowsCount={1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
        architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
        suscipit ipsa officia.
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText(DEFAULT_SHOW_TEXT);

    await userEvents.click(controlButton);
    expect(screen.getByText(DEFAULT_HIDE_TEXT)).toBeInTheDocument();
  });
});
