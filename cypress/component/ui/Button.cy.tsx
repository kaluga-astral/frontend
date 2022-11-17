import { useEffect, useRef } from 'react';

import { Button } from '../../../packages/ui/src';

describe('Button', () => {
  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const ButtonWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Button ref={ref}>Btn</Button>;
    };

    cy.mount(<ButtonWithRef />);

    cy.wait(10).then(() => {
      expect(resultRef.current).not.to.be.null;
    });
  });
});
