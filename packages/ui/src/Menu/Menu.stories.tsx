import React from 'react';
import { Story } from '@storybook/react';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { MenuItem } from '../MenuItem';
import { ListItemIcon } from '../ListItemIcon';
import { MenuGroup } from '../MenuGroup';
import { Button } from '../Button';
import { Typography } from '../Typography';

import { Menu } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const ProfileMenu = () => {
  const [el, setEl] = React.useState<null | HTMLElement>(null);

  return (
    <>
      <Button variant="text" onClick={(e) => setEl(e.currentTarget)}>
        Profile
      </Button>
      <Menu anchorEl={el} open={Boolean(el)} onClose={() => setEl(null)}>
        <MenuItem>
          <ListItemIcon>
            <ProfileOutlineMd />
          </ListItemIcon>
          Мой профиль
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CompanyOutlineMd />
          </ListItemIcon>
          Мои организации
        </MenuItem>
        <MenuItem divider>
          <ListItemIcon>
            <SettingsFillMd />
          </ListItemIcon>
          Настройки
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <QuitOutlineMd />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </>
  );
};

const ProductsMenu = () => {
  const [el, setEl] = React.useState<null | HTMLElement>(null);

  return (
    <>
      <Button variant="text" onClick={(e) => setEl(e.currentTarget)}>
        Products
      </Button>
      <Menu anchorEl={el} open={Boolean(el)} onClose={() => setEl(null)}>
        <MenuGroup label="МОИ ПРОДУКТЫ">
          <MenuItem>
            <ListItemIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7359_1261)">
                  <path
                    d="M13.0106 0.400124L19.2802 19.2282C19.3403 19.4074 19.31 19.6036 19.2001 19.7564C19.0902 19.9098 18.9128 20.0002 18.7246 20.0002H15.4785C14.2087 20.0002 13.0901 19.1928 12.6953 17.9917L9.43831 8.23219C9.39768 8.11204 9.39768 7.98157 9.43831 7.86141L11.8994 0.40071L13.0106 0.400124Z"
                    fill="#55B8F0"
                  />
                  <path
                    d="M4.52136 20H1.27523C1.08699 20 0.91015 19.9096 0.79972 19.7568C0.689837 19.604 0.659525 19.4077 0.719056 19.2286L6.96523 0.400508C7.04534 0.161367 7.26906 0 7.5214 0H12.455C12.6432 0 12.82 0.0903906 12.9305 0.243203C13.0403 0.395977 13.0707 0.592812 13.0106 0.771367L7.30398 17.9933C6.90917 19.1932 5.7905 20 4.52136 20Z"
                    fill="#2165CC"
                  />
                  <path
                    d="M12.455 0H9.99646V9.90453V9.90469L13.0106 0.771367C13.0707 0.592852 13.0404 0.396016 12.9305 0.243203C12.8201 0.0903906 12.6433 0 12.455 0V0Z"
                    fill="#0D4EB0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7359_1261">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ListItemIcon>
            <Typography fontSize="16px">Астрал.Отчет</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7359_1276)">
                  <path
                    d="M6.63256 19.2115C4.88306 18.225 3.94656 15.7465 4.91406 14.1325C5.79706 12.601 8.37506 11.833 10.6831 13.2455C11.9256 14.0095 13.3981 14.6365 15.1926 14.6365C16.8501 14.6365 18.4146 13.65 19.2901 12.1695C19.6121 11.6315 19.8421 10.959 19.9806 10.5105C19.9341 12.0805 19.4736 13.694 18.5996 15.1305C16.3901 18.9435 10.3146 21.3195 6.63256 19.2115Z"
                    fill="#2165CC"
                  />
                  <path
                    d="M3.81346 2.49251C5.55196 1.58501 8.25046 1.90401 9.07396 3.67251C9.80646 5.26001 9.81246 7.48401 6.83296 9.07001C5.55196 9.75051 4.08846 10.5675 3.26446 12.111C2.48696 13.5625 2.39446 15.331 3.26446 16.874C3.58446 17.418 4.04196 18.008 4.36146 18.3255C3.03546 17.4625 1.89196 16.238 1.06796 14.6965C-1.00004 10.969 0.0159621 4.49001 3.81346 2.49251Z"
                    fill="#55B8F0"
                  />
                  <path
                    d="M19.5 7.9815C19.5 9.9015 17.8195 12 15.866 12C14.049 12 12.232 10.9745 12.232 7.58C12.232 6.1515 12.0955 4.4995 11.187 3.0695C10.3245 1.6865 8.7265 0.79 6.9535 0.835C6.465 0.8355 5.931 0.8825 5.5 1C5.8 0.862 6.031 0.735 6.506 0.5685C7.547 0.2045 8.684 0.031 9.8695 0C14.322 0 19.454 3.83 19.5 7.9815Z"
                    fill="#0D4EB0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7359_1276">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ListItemIcon>
            <Typography fontSize="16px">Астрал.Подпись</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7359_1286)">
                  <path
                    d="M6.5 6.10352e-05C5.1195 6.10352e-05 4 1.11956 4 2.50006V3.00006H13.75C15.545 3.00006 17 4.45506 17 6.25006V11.2501C17 12.2166 16.2165 13.0001 15.25 13.0001H8.75C7.7835 13.0001 7 12.2166 7 11.2501V8.00006H5C4.4475 8.00006 4 8.44756 4 9.00006V13.5001C4 14.8806 5.1195 16.0001 6.5 16.0001H17.5C18.8805 16.0001 20 14.8806 20 13.5001V2.50006C20 1.11956 18.8805 6.10352e-05 17.5 6.10352e-05H6.5Z"
                    fill="#55B8F0"
                  />
                  <path
                    d="M2.5 4.00006C1.1195 4.00006 0 5.11956 0 6.50006V17.5001C0 18.8806 1.1195 20.0001 2.5 20.0001H13.5C14.8805 20.0001 16 18.8806 16 17.5001V17.0001H6.25C4.455 17.0001 3 15.5451 3 13.7501V8.75006C3 7.78356 3.7835 7.00006 4.75 7.00006H11.25C12.2165 7.00006 13 7.78356 13 8.75006V12.0001H15C15.5525 12.0001 16 11.5526 16 11.0001V6.50006C16 5.11956 14.8805 4.00006 13.5 4.00006H2.5Z"
                    fill="#1874FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7359_1286">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ListItemIcon>
            <Typography fontSize="16px">Астрал.ЭДО</Typography>
          </MenuItem>
        </MenuGroup>

        <MenuGroup label="МОИ ПРОДУКТЫ">
          <MenuItem>
            <ListItemIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7359_1261)">
                  <path
                    d="M13.0106 0.400124L19.2802 19.2282C19.3403 19.4074 19.31 19.6036 19.2001 19.7564C19.0902 19.9098 18.9128 20.0002 18.7246 20.0002H15.4785C14.2087 20.0002 13.0901 19.1928 12.6953 17.9917L9.43831 8.23219C9.39768 8.11204 9.39768 7.98157 9.43831 7.86141L11.8994 0.40071L13.0106 0.400124Z"
                    fill="#55B8F0"
                  />
                  <path
                    d="M4.52136 20H1.27523C1.08699 20 0.91015 19.9096 0.79972 19.7568C0.689837 19.604 0.659525 19.4077 0.719056 19.2286L6.96523 0.400508C7.04534 0.161367 7.26906 0 7.5214 0H12.455C12.6432 0 12.82 0.0903906 12.9305 0.243203C13.0403 0.395977 13.0707 0.592812 13.0106 0.771367L7.30398 17.9933C6.90917 19.1932 5.7905 20 4.52136 20Z"
                    fill="#2165CC"
                  />
                  <path
                    d="M12.455 0H9.99646V9.90453V9.90469L13.0106 0.771367C13.0707 0.592852 13.0404 0.396016 12.9305 0.243203C12.8201 0.0903906 12.6433 0 12.455 0V0Z"
                    fill="#0D4EB0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7359_1261">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ListItemIcon>
            <Typography fontSize="16px">Астрал.Отчет</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7359_1276)">
                  <path
                    d="M6.63256 19.2115C4.88306 18.225 3.94656 15.7465 4.91406 14.1325C5.79706 12.601 8.37506 11.833 10.6831 13.2455C11.9256 14.0095 13.3981 14.6365 15.1926 14.6365C16.8501 14.6365 18.4146 13.65 19.2901 12.1695C19.6121 11.6315 19.8421 10.959 19.9806 10.5105C19.9341 12.0805 19.4736 13.694 18.5996 15.1305C16.3901 18.9435 10.3146 21.3195 6.63256 19.2115Z"
                    fill="#2165CC"
                  />
                  <path
                    d="M3.81346 2.49251C5.55196 1.58501 8.25046 1.90401 9.07396 3.67251C9.80646 5.26001 9.81246 7.48401 6.83296 9.07001C5.55196 9.75051 4.08846 10.5675 3.26446 12.111C2.48696 13.5625 2.39446 15.331 3.26446 16.874C3.58446 17.418 4.04196 18.008 4.36146 18.3255C3.03546 17.4625 1.89196 16.238 1.06796 14.6965C-1.00004 10.969 0.0159621 4.49001 3.81346 2.49251Z"
                    fill="#55B8F0"
                  />
                  <path
                    d="M19.5 7.9815C19.5 9.9015 17.8195 12 15.866 12C14.049 12 12.232 10.9745 12.232 7.58C12.232 6.1515 12.0955 4.4995 11.187 3.0695C10.3245 1.6865 8.7265 0.79 6.9535 0.835C6.465 0.8355 5.931 0.8825 5.5 1C5.8 0.862 6.031 0.735 6.506 0.5685C7.547 0.2045 8.684 0.031 9.8695 0C14.322 0 19.454 3.83 19.5 7.9815Z"
                    fill="#0D4EB0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7359_1276">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ListItemIcon>
            <Typography fontSize="16px">Астрал.Подпись</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7359_1286)">
                  <path
                    d="M6.5 6.10352e-05C5.1195 6.10352e-05 4 1.11956 4 2.50006V3.00006H13.75C15.545 3.00006 17 4.45506 17 6.25006V11.2501C17 12.2166 16.2165 13.0001 15.25 13.0001H8.75C7.7835 13.0001 7 12.2166 7 11.2501V8.00006H5C4.4475 8.00006 4 8.44756 4 9.00006V13.5001C4 14.8806 5.1195 16.0001 6.5 16.0001H17.5C18.8805 16.0001 20 14.8806 20 13.5001V2.50006C20 1.11956 18.8805 6.10352e-05 17.5 6.10352e-05H6.5Z"
                    fill="#55B8F0"
                  />
                  <path
                    d="M2.5 4.00006C1.1195 4.00006 0 5.11956 0 6.50006V17.5001C0 18.8806 1.1195 20.0001 2.5 20.0001H13.5C14.8805 20.0001 16 18.8806 16 17.5001V17.0001H6.25C4.455 17.0001 3 15.5451 3 13.7501V8.75006C3 7.78356 3.7835 7.00006 4.75 7.00006H11.25C12.2165 7.00006 13 7.78356 13 8.75006V12.0001H15C15.5525 12.0001 16 11.5526 16 11.0001V6.50006C16 5.11956 14.8805 4.00006 13.5 4.00006H2.5Z"
                    fill="#1874FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7359_1286">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ListItemIcon>
            <Typography fontSize="16px">Астрал.ЭДО</Typography>
          </MenuItem>
        </MenuGroup>
      </Menu>
    </>
  );
};

const Template: Story = () => (
  <>
    <ProfileMenu />
    <ProductsMenu />
  </>
);

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
