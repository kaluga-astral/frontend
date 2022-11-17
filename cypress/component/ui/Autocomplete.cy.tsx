import { Autocomplete } from '../../../packages/ui/src';

describe('Autocomplete', () => {
  it('При клике на input открывается popover', () => {
    cy.mount(
      <Autocomplete<{ name: string; surname: string }, false, false, false>
        options={[{ name: 'Vasya', surname: 'Vasiliev' }]}
        getOptionLabel={(option) => option.surname}
      />,
    );

    cy.get('input').click();
    cy.get('[role="option"]');
  });

  it('Prop:getOptionLabel: в options popover отображаются указанные поля', () => {
    cy.mount(
      <Autocomplete<{ name: string; surname: string }, false, false, false>
        options={[{ name: 'Vasya', surname: 'Vasiliev' }]}
        getOptionLabel={(option) => option.surname}
      />,
    );

    cy.get('input').click();
    cy.contains('Vasiliev');
  });

  it('Props:multiple=false: в инпут сетится label после выбора option', () => {
    cy.mount(
      <Autocomplete<{ name: string; surname: string }, false, false, false>
        options={[{ name: 'Vasya', surname: 'Vasiliev' }]}
        getOptionLabel={(option) => option.surname}
      />,
    );

    cy.get('input').click();
    cy.get('[role="option"]').click();
    cy.get('input[value="Vasiliev"]');
  });

  // невозможно
  // it('При фокусе через tab появляется outline', () => {});

  // невозможно realHover не работает
  // it('Input:hover: меняется background input', () => {
  //   cy.mount(<Autocomplete options={[]} />);
  //   cy.get('input').trigger('mouseover');
  //
  //   cy.get('input')
  //     .should('have.css', 'background-color')
  //     .and('be.colored', theme.palette.grey[900]);
  // });
  //
  // Array.from({ length: 100 }).forEach(() => {
  //   it('Props:multiple=false: в инпут сетится label после выбора option', () => {
  //     cy.mount(
  //       <Autocomplete<{ name: string; surname: string }, false, false, false>
  //         options={[{ name: 'Vasya', surname: 'Vasiliev' }]}
  //         getOptionLabel={(option) => option.surname}
  //       />,
  //     );
  //
  //     cy.get('input').click();
  //     cy.get('[role="option"]').click();
  //     cy.get('input[value="Vasiliev"]');
  //   });
  // });
});
