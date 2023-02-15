import { ReactNode } from 'react';

import { Case } from '../Case';

type ExampleTemplateProps = {
  children?: ReactNode;
};

export const ExampleTemplate = ({ children }: ExampleTemplateProps) => (
  <section>{children}</section>
);

ExampleTemplate.Case = Case;
