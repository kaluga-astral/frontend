import { MouseEvent, useContext, useMemo, useState } from 'react';
import {
  ConfigContext,
  ContentState,
  IconButton,
  MenuGroup,
  Typography,
  WidgetProduct,
  useMenu,
} from '@astral/ui';
import { ErrorFillSm, ProductsFillMd } from '@astral/icons';

import { IdentityTenantsDTO } from '../../types';

import { getIdentityTenants, getTenantsProducts } from './utils';
import {
  Logo,
  ProductItem,
  TenantToggleButton,
  TenantToggleButtonGroup,
  TitleErrorContainer,
  WidgetMenu,
} from './styles';

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
  const [tenantsProductsMap, setTenantsProductsMap] =
    useState<Record<string, WidgetProduct[]>>();

  const [tenants, setTenants] = useState<IdentityTenantsDTO[]>();
  const [tenantId, setTenantId] = useState<string>(
    ASTRAL_IDENTITY_DEFAULT_TENANT,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { captureException } = useContext(ConfigContext);
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  const productList = useMemo(
    () => tenantsProductsMap?.[tenantId],
    [tenantsProductsMap, tenantId],
  );

  const handleShowProducts = async () => {
    setIsError(false);
    handleOpenMenu();

    if (!tenantsProductsMap) {
      setIsLoading(true);

      try {
        const tenantsInfo = await getIdentityTenants(identityUrl);
        const tenantsIds = tenantsInfo.map(({ id }) => id);
        const tenantsProducts = await getTenantsProducts(
          identityUrl,
          tenantsIds,
        );

        if (tenantsIds[0] !== tenantId) {
          setTenantId(tenantsIds[0]);
        }

        setTenants(tenantsInfo);
        setTenantsProductsMap(tenantsProducts);
      } catch (error) {
        setIsError(true);
        captureException(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const handleChangeTenant = async (
    _event: MouseEvent<HTMLElement>,
    selectedValue: string,
  ) => {
    if (selectedValue) {
      setTenantId(selectedValue);
    }
  };

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
      <WidgetMenu
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
                <TitleErrorContainer
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
                </TitleErrorContainer>
              ),
              description: 'Произошла ошибка. Повторите попытку позже.',
            }}
          >
            {tenants?.length && (
              <TenantToggleButtonGroup
                exclusive
                onChange={handleChangeTenant}
                value={tenantId}
              >
                {tenants.map(({ id, name }) => (
                  <TenantToggleButton value={id} key={id}>
                    {name}
                  </TenantToggleButton>
                ))}
              </TenantToggleButtonGroup>
            )}
            {productList?.map((product) => {
              return (
                <li key={product.id}>
                  <ProductItem component="a" href={product.url}>
                    <Logo src={product.logoUrl} color={product.color} />
                    <Typography variant="ui" color="grey" colorIntensity="900">
                      {product.name}
                    </Typography>
                  </ProductItem>
                </li>
              );
            })}
          </ContentState>
        </MenuGroup>
      </WidgetMenu>
    </>
  );
};
