import { type ProfileProps } from '../Profile';
import { useViewportType } from '../../hooks/useViewportType';

type UseLogicParams = ProfileProps;

export const useLogic = ({ menuList, menu }: UseLogicParams) => {
  const { isMobile } = useViewportType();

  const hasMenuItem = isMobile && (!menuList || menuList.length === 0) && !menu;

  return { hasMenuItem };
};
