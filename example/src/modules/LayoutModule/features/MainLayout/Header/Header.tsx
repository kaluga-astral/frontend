import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import logoSrc from 'images/logo.svg';

import {
  DashboardLayout,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  ProductSwitcher,
  QuitOutlineMd,
} from '@example/shared';
import { useUserInfoQuery } from '@example/modules/AuthModule';

import { createHeaderLogic } from './store';

export const Header = observer(() => {
  const [{ setUserData, user, logout, handleGetProducts }] =
    useState(createHeaderLogic);

  const query = useUserInfoQuery();

  useEffect(() => {
    if (query.data) {
      setUserData(query);
    }
  }, [query.data]);

  return (
    <DashboardLayout.Header
      productSwitcher={() => (
        <ProductSwitcher getProducts={() => handleGetProducts()} />
      )}
      product={{
        name: 'Электронный документ',
        logo: () => (
          <img
            width="20px"
            height="20px"
            src={logoSrc}
            alt="Логотип продукта электронный документ"
          />
        ),
      }}
      profile={{
        displayName: user.displayedName,
        annotation: user.email,
        avatar: {
          alt: user.displayedName,
          children: user.shortDisplayedName,
        },
        menu: (props) => (
          <Menu {...props}>
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <QuitOutlineMd />
              </ListItemIcon>
              <ListItemText>Выйти</ListItemText>
            </MenuItem>
          </Menu>
        ),
      }}
    />
  );
});
