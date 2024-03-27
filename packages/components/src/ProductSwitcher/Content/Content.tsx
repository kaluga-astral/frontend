import { ErrorFillSm } from '@astral/icons';

import { ContentState } from '../../ContentState';
import { MenuGroup } from '../../MenuGroup';
import { Typography } from '../../Typography';
import { type WidgetProduct } from '../types';

import { Logo, ProductItem, TitleErrorContainer } from './styles';

type ContentProps = {
  isLoading: boolean;
  products: Array<WidgetProduct>;
  isError: boolean;
};

export const Content = ({
  isLoading,
  isError,
  products = [],
}: ContentProps) => {
  return (
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
      <MenuGroup label="Продукты экосистемы">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductItem href={product.url}>
                <Logo src={product.logoUrl} color={product.color} />
                <Typography variant="ui" color="grey" colorIntensity="900">
                  {product.name}
                </Typography>
              </ProductItem>
            </li>
          );
        })}
      </MenuGroup>
    </ContentState>
  );
};
