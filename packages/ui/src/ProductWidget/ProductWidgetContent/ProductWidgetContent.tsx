import { ErrorFillMd } from '@astral/icons';
import { useMemo } from 'react';

import { CircularProgress } from '../../CircularProgress';
import { Typography } from '../../Typography';
import { ProductWidgetItem } from '../ProductWidgetItem';

import { ContentWrapper, Error, ProgressWrapper } from './styles';

type ProductWidgetContentProps = {
  loading: boolean;
  products: Array<{
    name: string;
    url: string;
    logoUrl: string;
    color: string;
  }>;
  error: string;
};

export const ProductWidgetContent = ({
  loading,
  error,
  products = [],
}: ProductWidgetContentProps) => {
  const productsList = useMemo(() => {
    return products.map((product) => (
      <ProductWidgetItem key={product.name} {...product} />
    ));
  }, [products]);

  return (
    <ContentWrapper container spacing={1} component="ul">
      {loading && (
        <ProgressWrapper>
          <CircularProgress color="primary" />
        </ProgressWrapper>
      )}
      {error && (
        <Error>
          <Typography alignItems="center" display="flex" paragraph variant="h6">
            <ErrorFillMd />
            Что-то полшо не так
          </Typography>
          <Typography>Произошла ошибка. Повторите попытку позже.</Typography>
        </Error>
      )}
      {!loading && (
        <Typography
          variant="h7"
          color="textSecondary"
          textTransform="uppercase"
        >
          Продукты экосистемы
        </Typography>
      )}
      {!loading && productsList}
    </ContentWrapper>
  );
};
