import { RadioProps } from './types';
import { StyledRadio } from './styled';
import { CheckedCircleIcon, DefaultIcon } from './icon';

export const Radio = ({
  icon = <DefaultIcon />,
  checkedIcon = <CheckedCircleIcon />,
  ...props
}: RadioProps) => {
  return <StyledRadio icon={icon} checkedIcon={checkedIcon} {...props} />;
};

export default Radio;
