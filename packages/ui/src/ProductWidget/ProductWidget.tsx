import { ProductsFillMd } from '@astral/icons';
import { Popover } from '@mui/material';
import { MouseEvent, useState } from 'react';

import { IconButton } from '../IconButton';

import { ProductWidgetContent } from './ProductWidgetContent';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  const handleShowProducts = async (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);

    if (!products.length) {
      setLoading(true);

      try {
        const productsList = await getProducts();

        setProducts(productsList);
      } catch (e) {
        setError('error');
      }

      setLoading(false);
    }
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton selected={open} variant="text" onClick={handleShowProducts}>
        <ProductsFillMd />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: -8, horizontal: 0 }}
      >
        <ProductWidgetContent
          loading={loading}
          error={error}
          products={products}
        />
      </Popover>
    </>
  );
};
