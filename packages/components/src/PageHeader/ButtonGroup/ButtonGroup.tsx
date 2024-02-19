import {
  ButtonGroupMainActions,
  type MainAction,
} from './ButtonGroupMainActions';
import {
  ButtonGroupSecondaryActions,
  type SecondaryAction,
} from './ButtonGroupSecondaryActions';
import { ButtonGroupWrapper } from './styles';

export type ButtonGroupProps = {
  /** Основные действия */
  main?: MainAction[];
  /** Второстепенные действия */
  secondary?: SecondaryAction[];
};

export const ButtonGroup = ({ main, secondary }: ButtonGroupProps) => {
  return (
    <ButtonGroupWrapper>
      {secondary && <ButtonGroupSecondaryActions actions={secondary} />}
      {main && <ButtonGroupMainActions actions={main} />}
    </ButtonGroupWrapper>
  );
};