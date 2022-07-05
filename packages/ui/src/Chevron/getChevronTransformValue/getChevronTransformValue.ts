import { IChevron } from '../Chevron';

type IProps = Pick<IChevron, 'isActive'>;

type IGetChevronTransformValue = (props: IProps) => string;

export const getChevronTransformValue: IGetChevronTransformValue = ({
  isActive,
}) => `rotateZ(${isActive ? 180 : 0}deg)`;
