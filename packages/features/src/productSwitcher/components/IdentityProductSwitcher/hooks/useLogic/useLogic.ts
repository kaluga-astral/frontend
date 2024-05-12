import { type MouseEvent, useContext, useMemo, useState } from 'react';
import { ConfigContext, type WidgetProduct } from '@astral/ui';

import { type IdentityTenantsDTO } from '../../../../types';
import { getIdentityTenants, getTenantsProducts } from '../../utils';
import { ASTRAL_IDENTITY_DEFAULT_TENANT } from '../../IdentityProductSwitcher';

export const useLogic = (identityUrl: string, openMenu: () => void) => {
  const { captureException } = useContext(ConfigContext);

  const [tenantsProductsMap, setTenantsProductsMap] =
    useState<Record<string, WidgetProduct[]>>();
  const [tenants, setTenants] = useState<IdentityTenantsDTO[]>();
  const [tenantId, setTenantId] = useState<string>(
    ASTRAL_IDENTITY_DEFAULT_TENANT,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const productList = useMemo(
    () => tenantsProductsMap?.[tenantId],
    [tenantsProductsMap, tenantId],
  );

  const loadProducts = async () => {
    try {
      const tenantsInfo = await getIdentityTenants(identityUrl);
      const tenantsIds = tenantsInfo.map(({ id }) => id);
      const tenantsProducts = await getTenantsProducts(identityUrl, tenantsIds);

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
  };
  const handleShowProducts = () => {
    setIsError(false);
    openMenu();

    if (!tenantsProductsMap) {
      setIsLoading(true);
      loadProducts().then();
    }
  };
  const handleChangeTenant = (
    _event: MouseEvent<HTMLElement>,
    selectedValue: string,
  ) => {
    if (selectedValue) {
      setTenantId(selectedValue);
    }
  };

  const isShowToggleButton =
    Boolean(tenants?.length) && Number(tenants?.length) > 1;

  return {
    handleShowProducts,
    isLoading,
    isError,
    tenants,
    handleChangeTenant,
    tenantId,
    productList,
    isShowToggleButton,
  };
};
