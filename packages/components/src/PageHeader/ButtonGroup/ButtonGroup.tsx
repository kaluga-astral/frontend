import type { MainAction } from './ButtonGroupMainActions';
import { ButtonGroupMainActions } from './ButtonGroupMainActions';
import type { SecondaryAction } from './ButtonGroupSecondaryActions';
import { ButtonGroupSecondaryActions } from './ButtonGroupSecondaryActions';
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
