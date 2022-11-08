import { Button } from '../../../packages/ui/src';
import { theme } from '../../common/theme';

describe('Button', () => {
  it('По дефолту отображается contained вариант', () => {
    cy.mount(<Button>Btn</Button>);

    cy.get('button')
      .should('have.css', 'background-color')
      .and('be.colored', theme.palette.primary.main);
  });

  it('Disabled: нельзя нажать кнопку', () => {
    cy.mount(<Button disabled>Btn</Button>);
    cy.get('button').should('be.disabled');
  });

  it('Loading: нельзя нажать на кнопку', () => {
    cy.mount(<Button loading>Btn</Button>);
    cy.get('button').should('be.disabled');
  });

  it('Selected:default: background', () => {
    cy.mount(<Button selected>Btn</Button>);

    cy.get('button')
      .should('have.css', 'background-color')
      .and('be.colored', theme.palette.grey[900]);
  });

  it('Selected:hover: background', () => {
    cy.mount(<Button selected>Btn</Button>);

    cy.get('button')
      .realHover()
      .should('have.css', 'background-color')
      .and('be.colored', theme.palette.grey[700]);
  });
});
