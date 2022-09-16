import { ContentState } from '../../ContentState';

import { Logo, ProductItem } from './styles';

type ProductWidgetContentProps = {
  isLoading: boolean;
  products: Array<{
    name: string;
    url: string;
    logoUrl: string;
    color: string;
  }>;
  isError: boolean;
};

export const ProductWidgetContent = ({
  isLoading,
  isError,
  products = [],
}: ProductWidgetContentProps) => {
  const productsList = products.map((product) => (
    <ProductItem key={product.name} {...product}>
      <Logo src={product.logoUrl} color={product.color} />
      {product.name}
    </ProductItem>
  ));

  return (
    <ContentState
      isLoading={isLoading}
      isCustom={isError}
      customState={{
        imgAlt: 'Что-то полшо не так',
        title: 'Что-то пошло не так',
        description: 'Произошла ошибка. Повторите попытку позже.',
        // TODO: imgSrc обязательный параметр, а в title не засунуть текст с иконкой(
        imgSrc: '',
      }}
    >
      {productsList}
    </ContentState>
  );
};
