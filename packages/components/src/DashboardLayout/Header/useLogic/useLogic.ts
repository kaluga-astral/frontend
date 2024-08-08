import { type HeaderProps } from '../Header';
import { useViewportType } from '../../../hooks/useViewportType';

type UseLogicParams = HeaderProps;

export const useLogic = ({ profile }: UseLogicParams) => {
  const { isMobile } = useViewportType();

  const isShowProfile =
    (Boolean(profile) && !isMobile) ||
    (Boolean(profile?.menu || profile?.menuList) && isMobile);

  const isShowExitButton =
    isMobile &&
    !Boolean(profile?.menu || profile?.menuList) &&
    Boolean(profile?.exitButton);

  return { isShowExitButton, isShowProfile };
};
