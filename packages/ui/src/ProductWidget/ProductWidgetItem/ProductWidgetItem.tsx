import { Typography } from '../../Typography';

import { Logo, ProductLink } from './styles';

type ProductWidgetItemProps = {
  url: string;
  logoUrl: string;
  name: string;
  color: string;
};

export const ProductWidgetItem = ({
  url,
  logoUrl,
  name,
  color,
}: ProductWidgetItemProps) => {
  return (
    <li>
      <ProductLink href={url}>
        <Logo src={logoUrl} alt={name} color={color} />
        <Typography>{name}</Typography>
      </ProductLink>
    </li>
  );
};
