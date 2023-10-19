import { renderWithTheme, screen } from '@astral/tests';

import { CollapsibleTypography } from './CollapsibleTypography';

beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    value: 200,
  });
});

describe('CollapsibleTypography component', () => {
  it('should have a control button', () => {
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
});
