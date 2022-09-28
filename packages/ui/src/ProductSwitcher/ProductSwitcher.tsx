import { ProductsFillMd } from '@astral/icons';
import { useContext, useState } from 'react';

import { ConfigContext } from '../ConfigProvider';
import { IconButton } from '../IconButton';
import { useMenu } from '../hooks';

import { ProductSwitcherContent } from './ProductSwitcherContent';
import { ContentWrapper, WidgetMenu } from './styles';
import { WidgetProduct } from './types';

export type ProductSwitcherProps = {
  getProducts: () => Promise<Array<WidgetProduct>>;
};

export const ProductSwitcher = ({ getProducts }: ProductSwitcherProps) => {
  const [products, setProducts] = useState<WidgetProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { captureException } = useContext(ConfigContext);
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  const handleShowProducts = async () => {
    handleOpenMenu();

    if (!products.length) {
      setIsLoading(true);

      try {
        const productsList = await getProducts();

        setProducts(productsList);
      } catch (error) {
        setIsError(true);
        captureException(error);
      } finally {
        setIsLoading(false);
      }
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
        <ContentWrapper>
          <ProductSwitcherContent
            isLoading={isLoading}
            isError={isError}
            products={products}
          />
        </ContentWrapper>
      </WidgetMenu>
    </>
  );
};
