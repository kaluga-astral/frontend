import { CheckboxProps } from './types';
import { StyledCheckbox } from './styled';
import { CheckedIcon, DefaultIcon, IndeterminateIcon } from './icons';

const Checkbox = ({
  icon = <DefaultIcon />,
  checkedIcon = <CheckedIcon />,
  indeterminateIcon = <IndeterminateIcon />,
  ...props
}: CheckboxProps) => {
  return (
    <StyledCheckbox
      icon={icon}
      checkedIcon={checkedIcon}
      indeterminateIcon={indeterminateIcon}
      {...props}
    />
  );
};

export default Checkbox;
