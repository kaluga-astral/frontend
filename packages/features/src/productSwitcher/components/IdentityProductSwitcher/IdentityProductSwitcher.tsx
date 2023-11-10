import {
  ContentState,
  ErrorFillSm,
  IconButton,
  MenuGroup,
  ProductsFillMd,
  Typography,
  useMenu,
} from '@astral/ui';

import {
  IdentityProductSwitcherErrorContainer,
  IdentityProductSwitcherItem,
  IdentityProductSwitcherLogo,
  IdentityProductSwitcherMenu,
  TenantToggleButton,
  TenantsToggleButtonGroup,
} from './styles';
import { useLogic } from './hooks';

export const ASTRAL_IDENTITY_DEFAULT_TENANT = 'astral';

export type IdentityProductSwitcherType = {
  /**
   * Адрес identity
   * */
  identityUrl: string;
};

export const IdentityProductSwitcher = ({
  identityUrl,
}: IdentityProductSwitcherType) => {
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  const {
    isLoading,
    isError,
    tenantId,
    tenants,
    productList,
    handleChangeTenant,
    handleShowProducts,
  } = useLogic(identityUrl, handleOpenMenu);

  return (
    <>
      <IconButton
        ref={anchorRef}
        selected={open}
        variant="text"
        onClick={handleShowProducts}
      >
        <ProductsFillMd />
      </IconButton>
      <IdentityProductSwitcherMenu
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleCloseMenu}
      >
        <MenuGroup label="Продукты экосистемы">
          <ContentState
            isLoading={isLoading}
            isCustom={isError}
            customState={{
              imgAlt: 'Что-то пошло не так',
              title: (
                <IdentityProductSwitcherErrorContainer
                  container
                  autoFlow="column"
                  alignItems="center"
                  justifyContent="center"
                  component="span"
                >
                  <ErrorFillSm color="inherit" />
                  <Typography variant="h6" color="grey" colorIntensity="900">
                    Что-то пошло не так
                  </Typography>
                </IdentityProductSwitcherErrorContainer>
              ),
              description: 'Произошла ошибка. Повторите попытку позже.',
            }}
          >
            {tenants?.length && (
              <TenantsToggleButtonGroup
                exclusive
                onChange={handleChangeTenant}
                value={tenantId}
              >
                {tenants.map(({ id, name }) => (
                  <TenantToggleButton value={id} key={id}>
                    {name}
                  </TenantToggleButton>
                ))}
              </TenantsToggleButtonGroup>
            )}
            {productList?.map((product) => {
              return (
                <li key={product.id}>
                  <IdentityProductSwitcherItem component="a" href={product.url}>
                    <IdentityProductSwitcherLogo
                      src={product.logoUrl}
                      color={product.color}
                    />
                    <Typography variant="ui" color="grey" colorIntensity="900">
                      {product.name}
                    </Typography>
                  </IdentityProductSwitcherItem>
                </li>
              );
            })}
          </ContentState>
        </MenuGroup>
      </IdentityProductSwitcherMenu>
    </>
  );
};
