import { ContentState } from '../../ContentState';
import { WidgetProduct } from '../types';

import { Logo, ProductItem } from './styles';

type ProductSwitcherContentProps = {
  isLoading: boolean;
  products: Array<WidgetProduct>;
  isError: boolean;
};

export const ProductSwitcherContent = ({
  isLoading,
  isError,
  products = [],
}: ProductSwitcherContentProps) => {
  return (
    <ContentState
      isLoading={isLoading}
      isCustom={isError}
      customState={{
        imgAlt: 'Что-то полшо не так',
        title: 'Что-то пошло не так',
        description: 'Произошла ошибка. Повторите попытку позже.',
        // TODO: imgSrc обязательный параметр, а в title не засунуть текст с иконкой. Соответствующая доработка в задаче:
        // https://astraltrack.atlassian.net/jira/software/c/projects/UIKIT/boards/142?modal=detail&selectedIssue=UIKIT-435
        imgSrc: '',
      }}
    >
      {products.map((product) => (
        <ProductItem key={product.name} {...product}>
          <Logo src={product.logoUrl} color={product.color} />
          {product.name}
        </ProductItem>
      ))}
    </ContentState>
  );
};
