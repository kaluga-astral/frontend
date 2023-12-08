import { renderWithTheme, screen } from '@astral/tests';

import { EmailField } from './EmailField';

describe('EmailField', () => {
  it('Prop:label: есть аттрибут type="email" ', () => {
    renderWithTheme(<EmailField label="TestEmailField" />);

    expect(screen.getByLabelText('TestEmailField')).toHaveAttribute(
      'type',
      'email',
    );
  });
});
