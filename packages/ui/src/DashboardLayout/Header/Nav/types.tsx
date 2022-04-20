import { MenuListProps } from '../../../MenuList/types';

import { ProductProps } from './Product/types';

export type NavProps = {
  product: ProductProps;
  MenuList?: React.FC<MenuListProps>;
};
