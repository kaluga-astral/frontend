import { type HeaderProps } from '../Header';

type UseLogicParams = HeaderProps;

export const useLogic = ({ profile }: UseLogicParams) => {
  const hasProfileMenu = Boolean(profile?.menu || profile?.menuList);

  return { hasProfileMenu };
};
