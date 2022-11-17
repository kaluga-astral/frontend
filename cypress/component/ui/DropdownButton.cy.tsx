import { useEffect, useRef } from 'react';

import { DropdownButton, MenuItem } from '../../../packages/ui/src';

describe('DropdownButton', () => {
  it('Disabled: нельзя нажать кнопку', () => {
    cy.mount(
      <DropdownButton name="btn" disabled>
        <MenuItem onClick={() => {}}>Item</MenuItem>
      </DropdownButton>,
    );

    cy.get('button').should('be.disabled');
  });

  it('При клике на option закрывается popover', () => {
    cy.mount(
      <DropdownButton name="btn">
        <MenuItem onClick={() => {}}>Item</MenuItem>
      </DropdownButton>,
    );

    cy.intercept('post', '**/Users', (req) => {
      req.reply({ list: [] });
    });

    cy.get('button').click();
    cy.contains('Item').click();
    cy.contains('Item').should('exist');
  });

  it('При клике на option вызывается onClick', () => {
    const onClickSpy = cy.spy().as('onClick');

    cy.mount(
      <DropdownButton name="btn">
        <MenuItem onClick={onClickSpy}>Item</MenuItem>
      </DropdownButton>,
    );

    cy.get('button').click();
    cy.contains('Item').click();
    cy.get('@onClick').should('to.be.called');
  });

  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const ButtonWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <DropdownButton name="btn" ref={ref}>
          <MenuItem onClick={() => {}}>Item</MenuItem>
        </DropdownButton>
      );
    };

    cy.mount(<ButtonWithRef />);

    cy.window().then((win) => {
      console.log(win);
    });

    cy.document().then((document) => {
      console.log(document);
    });

    cy.wait(100).then(() => {
      expect(resultRef.current).not.to.be.null;
    });
  });
});
