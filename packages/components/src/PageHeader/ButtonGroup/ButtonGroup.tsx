import {
  ButtonGroupMainActions,
  type MainAction,
} from './ButtonGroupMainActions';
import {
  ButtonGroupSecondaryActions,
  type SecondaryAction,
} from './ButtonGroupSecondaryActions';
import { Wrapper } from './styles';

export type ButtonGroupProps = {
  /** Основные действия */
  main?: MainAction[];
  /** Второстепенные действия */
  secondary?: SecondaryAction[];
};

export const ButtonGroup = ({ main, secondary }: ButtonGroupProps) => {
  return (
    <Wrapper>
      {secondary && <ButtonGroupSecondaryActions actions={secondary} />}
      {main && <ButtonGroupMainActions actions={main} />}
    </Wrapper>
  );
};
