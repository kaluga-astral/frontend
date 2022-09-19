import { ProductsFillMd } from '@astral/icons';
import { useState } from 'react';

import { IconButton } from '../IconButton';
import { useMenu } from '../hooks';

import { ProductWidgetContent } from './ProductWidgetContent';
import { ContentWrapper, WidgetMenu } from './styles';

export type WidgetProduct = {
  url: string;
  name: string;
  logoUrl: string;
  color: string;
};

export type ProductWidgetProps = {
  getProducts: () => Promise<Array<WidgetProduct>>;
};

export const ProductWidget = ({ getProducts }: ProductWidgetProps) => {
  const [products, setProducts] = useState<WidgetProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  const handleShowProducts = async () => {
    handleOpenMenu();

    if (!products.length) {
      setIsLoading(true);

      try {
        const productsList = await getProducts();

        setProducts(productsList);
      } catch (e) {
        setIsError(true);
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
          <ProductWidgetContent
            isLoading={isLoading}
            isError={isError}
            products={products}
          />
        </ContentWrapper>
      </WidgetMenu>
    </>
  );
};
