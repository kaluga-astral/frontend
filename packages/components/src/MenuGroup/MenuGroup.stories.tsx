import { type MouseEvent, useCallback, useMemo, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { ListItemIcon } from '../ListItemIcon';
import { Menu } from '../Menu';
import { styled } from '../styles/styled';
import { MenuItem } from '../MenuItem';
import { Typography } from '../Typography';

import { MenuGroup } from './MenuGroup';

/**
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21288-188895)
 * ### [Guide]()
 */

const meta: Meta<typeof MenuGroup> = {
  title: 'Components/Navigation/Menu/MenuGroup',
  component: MenuGroup,
};

export default meta;

type Story = StoryObj<typeof MenuGroup>;

const StyledMenuItem = styled(MenuItem)`
  height: 48px;
`;

const StyledLabel = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
`;

export const Interaction: Story = {
  args: {
    children: [
      <MenuItem>
        <Typography>Item 1</Typography>
      </MenuItem>,
      <MenuItem>
        <Typography>Item 2</Typography>
      </MenuItem>,
      <MenuItem>
        <Typography>Item 3</Typography>
      </MenuItem>,
    ],
    label: 'MenuGroup',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const AoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7359_1261)">
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
);

const ApIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7359_1276)">
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
);

const EdoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7359_1286)">
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
);

const KedoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7501_1395)">
      <path
        d="M0 10.2164C0 10.0838 0.0749008 9.96261 0.193475 9.90332L3.49348 8.25332C3.72619 8.13697 4 8.30619 4 8.56637V17.4337C4 17.6939 3.72619 17.8632 3.49348 17.7468L0.193475 16.0968C0.0749008 16.0375 0 15.9163 0 15.7837V10.2164Z"
        fill="#B7C2CE"
      />
      <path
        d="M20 10.2164C20 10.0838 19.9251 9.96261 19.8065 9.90332L16.5065 8.25332C16.2738 8.13697 16 8.30619 16 8.56637V17.4337C16 17.6939 16.2738 17.8632 16.5065 17.7468L19.8065 16.0968C19.9251 16.0375 20 15.9163 20 15.7837V10.2164Z"
        fill="#B7C2CE"
      />
      <path
        d="M0 4.22752C0 4.0892 0.0814567 3.96386 0.207852 3.90768L8.50785 0.218794C8.7393 0.115927 9 0.285347 9 0.538628V19.4693C9 19.7205 8.74308 19.89 8.51213 19.791L5.71213 18.591C5.58344 18.5358 5.5 18.4093 5.5 18.2693V6.58965C5.5 6.32398 5.21563 6.15517 4.9824 6.28239L0.517599 8.71774C0.284367 8.84495 0 8.67614 0 8.41047V4.22752Z"
        fill="#778DA8"
      />
      <path
        d="M20 4.22752C20 4.0892 19.9185 3.96386 19.7921 3.90768L11.4921 0.218794C11.2607 0.115927 11 0.285347 11 0.538628V19.4693C11 19.7205 11.2569 19.89 11.4879 19.791L14.2879 18.591C14.4166 18.5358 14.5 18.4093 14.5 18.2693V6.58965C14.5 6.32398 14.7844 6.15517 15.0176 6.28239L19.4824 8.71774C19.7156 8.84495 20 8.67614 20 8.41047V4.22752Z"
        fill="#778DA8"
      />
    </g>
    <defs>
      <clipPath id="clip0_7501_1395">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const AsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7501_1409)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8738 11.1216C14.3646 13.343 12.3759 15 10 15C7.23863 15 5.00005 12.7615 5.00005 10C5.00005 7.6243 6.65696 5.63556 8.87824 5.12637C8.43153 5.0434 7.97091 5.00003 7.50016 5.00003C3.75223 5.00003 0.646392 7.74918 0.0891765 11.3409C0.685587 15.7913 4.20917 19.3147 8.65956 19.911C12.2512 19.3536 15.0002 16.2479 15.0002 12.5C15.0002 12.0292 14.9568 11.5684 14.8738 11.1216ZM10.3166 5.00989C12.8258 5.16666 14.8333 7.1741 14.9902 9.68325C15.3198 10.5594 15.5002 11.5086 15.5002 12.5C15.5002 15.9325 13.3385 18.86 10.3023 19.9956C15.6853 19.8358 20 15.4218 20 10C20 4.47718 15.5229 3.05176e-05 10 3.05176e-05C4.57816 3.05176e-05 0.164084 4.31499 0.0045166 9.69823C1.13999 6.66184 4.06761 4.50003 7.50016 4.50003C8.49142 4.50003 9.44057 4.68032 10.3166 5.00989Z"
        fill="#2165CC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8736 11.1222C14.3642 13.3433 12.3756 15 9.99996 15C7.23854 15 4.99996 12.7615 4.99996 10C4.99996 7.62434 6.65683 5.63562 8.87806 5.12639C8.43131 5.04341 7.97065 5.00003 7.49985 5.00003C3.75219 5.00003 0.646527 7.74878 0.0889893 11.3402C0.685093 15.7908 4.20877 19.3146 8.65936 19.9109C12.2509 19.3536 14.9999 16.2478 14.9999 12.5C14.9999 12.0294 14.9565 11.5688 14.8736 11.1222Z"
        fill="#B7C2CE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20C15.5228 20 20 15.5229 20 10C20 4.47718 15.5228 3.05176e-05 10 3.05176e-05C4.47715 3.05176e-05 0 4.47718 0 10C0 10.4546 0.0303304 10.9021 0.0890777 11.3406C0.646448 7.74899 3.7522 5.00003 7.5 5.00003C11.6421 5.00003 15 8.35789 15 12.5C15 16.2478 12.251 19.3536 8.65946 19.911C9.09794 19.9697 9.54543 20 10 20Z"
        fill="#778DA8"
      />
    </g>
    <defs>
      <clipPath id="clip0_7501_1409">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const OfdIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7501_1429)">
      <path
        d="M19.0528 16.6056C19.7177 17.9354 18.7507 19.5 17.2639 19.5H4.25C3.2835 19.5 2.5 18.7165 2.5 17.75C2.5 16.7835 3.2835 16 4.25 16H14.5L9 5.50003H13.5L19.0528 16.6056Z"
        fill="#B7C2CE"
      />
      <path
        d="M1.44721 3.39446C0.782312 2.06466 1.7493 0.500031 3.23607 0.500031H16.25C17.2165 0.500031 18 1.28353 18 2.25003C18 3.21653 17.2165 4.00003 16.25 4.00003H6L11.5 14.5H7L1.44721 3.39446Z"
        fill="#778DA8"
      />
    </g>
    <defs>
      <clipPath id="clip0_7501_1429">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Ap2Icon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7501_1441)">
      <path
        d="M6.63256 19.2115C4.88306 18.225 3.94656 15.7465 4.91406 14.1325C5.79706 12.601 8.37506 11.833 10.6831 13.2455C11.9256 14.0095 13.3981 14.6365 15.1926 14.6365C16.8501 14.6365 18.4146 13.65 19.2901 12.1695C19.6121 11.6315 19.8421 10.959 19.9806 10.5105C19.9341 12.0805 19.4736 13.694 18.5996 15.1305C16.3901 18.9435 10.3146 21.3195 6.63256 19.2115Z"
        fill="#99A9BA"
      />
      <path
        d="M3.81346 2.49251C5.55196 1.58501 8.25046 1.90401 9.07396 3.67251C9.80646 5.26001 9.81246 7.48401 6.83296 9.07001C5.55196 9.75051 4.08846 10.5675 3.26446 12.111C2.48696 13.5625 2.39446 15.331 3.26446 16.874C3.58446 17.418 4.04196 18.008 4.36146 18.3255C3.03546 17.4625 1.89196 16.238 1.06796 14.6965C-1.00004 10.969 0.0159621 4.49001 3.81346 2.49251Z"
        fill="#B7C2CE"
      />
      <path
        d="M19.5 7.9815C19.5 9.9015 17.8195 12 15.866 12C14.049 12 12.232 10.9745 12.232 7.58C12.232 6.1515 12.0955 4.4995 11.187 3.0695C10.3245 1.6865 8.7265 0.79 6.9535 0.835C6.465 0.8355 5.931 0.8825 5.5 1C5.8 0.862 6.031 0.735 6.506 0.5685C7.547 0.2045 8.684 0.031 9.8695 0C14.322 0 19.454 3.83 19.5 7.9815Z"
        fill="#557192"
      />
    </g>
    <defs>
      <clipPath id="clip0_7501_1441">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Example = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button variant="text" onClick={handleClick}>
        Products
      </Button>
      <Menu
        title="Products"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuGroup label="Мои продукты">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <AoIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.Отчет</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <ApIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.Подпись</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <EdoIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.ЭДО</StyledLabel>
          </StyledMenuItem>
        </MenuGroup>
        <MenuGroup label="Больше продуктов от a-soft">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <KedoIcon />
            </ListItemIcon>
            <StyledLabel>Кадровый ЭДО</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <AsIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.Скрин</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <OfdIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.ОФД</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <Ap2Icon />
            </ListItemIcon>
            <StyledLabel>Астрал.Подпись</StyledLabel>
          </StyledMenuItem>
        </MenuGroup>
      </Menu>
    </>
  );
};
