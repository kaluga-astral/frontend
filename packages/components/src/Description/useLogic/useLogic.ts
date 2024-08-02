import { type DescriptionProps } from '../Description';
import { DEFAULT_SEPARATOR } from '../constants';
import { useViewportType } from '../../hooks/useViewportType';

type UseLogicParams = DescriptionProps;

export const useLogic = ({
  direction = 'default',
  separator = DEFAULT_SEPARATOR,
}: UseLogicParams) => {
  const { isMobile } = useViewportType();

  const hasSeparator =
    direction === 'column' || (isMobile && direction === 'default');

  const descriptionContextProviderProps = {
    separator: hasSeparator ? '' : separator,
  };

  return { descriptionContextProviderProps, direction };
};
