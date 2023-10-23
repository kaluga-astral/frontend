import { renderWithTheme, screen, userEvents } from '@astral/tests';

import {
  CollapsibleTypography,
  HIDE_BUTTON_TEXT,
  SHOW_BUTTON_TEXT,
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

  it('Prop: rowsCount={-5}: При отрицательном значении устанавливается значение по умолчанию', () => {
    renderWithTheme(
      <CollapsibleTypography rowsCount={-5}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
        architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
        suscipit ipsa officia.
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText(SHOW_BUTTON_TEXT);

    expect(controlButton).toBeInTheDocument();
  });

  it('Prop: showButtonText={"Какой-то текст"}: Изменяется текст кнопки открытия', () => {
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

  it('Prop: hideButtonText={"Какой-то текст"}: Изменяется текст кнопки сокрытия', async () => {
    renderWithTheme(
      <CollapsibleTypography hideButtonText={EXAMPLE_SHOW_TEXT}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
        architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
        suscipit ipsa officia.
      </CollapsibleTypography>,
    );

    const showButton = screen.getByText(SHOW_BUTTON_TEXT);

    await userEvents.click(showButton);
    expect(screen.getByText(EXAMPLE_SHOW_TEXT)).toBeInTheDocument();
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

    const controlButton = screen.getByText(SHOW_BUTTON_TEXT);

    await userEvents.click(controlButton);
    expect(screen.getByText(HIDE_BUTTON_TEXT)).toBeInTheDocument();
  });
});
