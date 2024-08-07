import {
  type PropsWithChildren,
  type ReactNode,
  forwardRef,
  useContext,
} from 'react';
import { QuitOutlineMd } from '@astral/icons';

import { useViewportType } from '../../hooks/useViewportType';
import { DashboardSidebarContext } from '../../DashboardSidebarProvider';
import { Product, type ProductProps } from '../../Product';
import { Profile } from '../../Profile';
import { type ProfileProps } from '../../Profile';
import { SidebarToggler } from '../SidebarToggler';

import {
  ExitButton,
  HeaderRoot,
  HeaderSection,
  ProfileWrapper,
  SidebarTogglerWrapper,
} from './styles';
import { useLogic } from './useLogic';

export type HeaderProps = {
  product: ProductProps;
  productSwitcher?: (props: PropsWithChildren<{}>) => JSX.Element;
  profile?: ProfileProps;
  children?: ReactNode;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const {
    productSwitcher: ProductSwitcher,
    product,
    profile,
    children,
  } = props;

  const { isShowExitButton, isShowProfile } = useLogic(props);

  const { collapsedIn, onToggleSidebar } = useContext(DashboardSidebarContext);

  const { isMobile } = useViewportType();

  return (
    <HeaderRoot ref={ref}>
      {isMobile && (
        <SidebarTogglerWrapper>
          <SidebarToggler
            collapsedIn={collapsedIn}
            onToggle={onToggleSidebar}
          />
        </SidebarTogglerWrapper>
      )}

      <HeaderSection>
        {!isMobile && ProductSwitcher && <ProductSwitcher />}
        <Product {...product} />
      </HeaderSection>

      <HeaderSection>
        {children}
        {profile && isShowProfile && (
          <ProfileWrapper>
            <Profile {...profile} />
          </ProfileWrapper>
        )}
        <ExitButton
          $isShowExitButton={isShowExitButton}
          onClick={profile?.exitButton?.onClick}
          title="exitButton"
          variant="text"
        >
          <QuitOutlineMd />
        </ExitButton>
      </HeaderSection>
    </HeaderRoot>
  );
});

export default Header;
