import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { CollapsibleTypography } from './CollapsibleTypography';

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

  it('Click control button: При нажатии на кнопку "Показать" меняется состояние', async () => {
    renderWithTheme(
      <CollapsibleTypography rowsCount={1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
        architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
        suscipit ipsa officia.
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText('Показать полностью');

    await userEvents.click(controlButton);
    expect(screen.getByText('Скрыть')).toBeInTheDocument();
  });
});
