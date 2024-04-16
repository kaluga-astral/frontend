import {
  ButtonGroupMainActions,
  type MainAction,
} from './ButtonGroupMainActions';
import {
  ButtonGroupSecondaryActions,
  type SecondaryAction,
} from './ButtonGroupSecondaryActions';
import {
  ButtonGroupSecondaryVisibleActions,
  type SecondaryVisibleAction,
} from './ButtonGroupSecondaryVisibleActions';
import { Wrapper } from './styles';

export type ButtonGroupProps = {
  /** Основные действия */
  main?: MainAction[];
  /** Второстепенные действия */
  secondary?: SecondaryAction[];
  secondaryVisible?: SecondaryVisibleAction[];
};

export const ButtonGroup = ({
  main,
  secondary,
  secondaryVisible,
}: ButtonGroupProps) => {
  return (
    <Wrapper>
      {secondary && <ButtonGroupSecondaryActions actions={secondary} />}
      {secondaryVisible && (
        <ButtonGroupSecondaryVisibleActions actions={secondaryVisible} />
      )}
      {main && <ButtonGroupMainActions actions={main} />}
    </Wrapper>
  );
};
