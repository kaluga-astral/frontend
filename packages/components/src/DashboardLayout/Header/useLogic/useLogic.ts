import { type HeaderProps } from '../Header';
import { useViewportType } from '../../../hooks/useViewportType';

type UseLogicParams = HeaderProps;

export const useLogic = ({ profile }: UseLogicParams) => {
  const { isMobile } = useViewportType();

  const desktopProfileRender = Boolean(profile) && !isMobile;

  const mobileProfileRender =
    Boolean(profile?.menu || profile?.menuList) && isMobile;

  const exitButtonRender =
    isMobile &&
    !Boolean(profile?.menu || profile?.menuList) &&
    Boolean(profile?.exitButton);

  return { exitButtonRender, desktopProfileRender, mobileProfileRender };
};
