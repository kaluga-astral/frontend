import { forwardRef } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@mui/material';

import { Typography } from '../Typography';

import { Product } from './Product';

export default {
  title: 'Components/Product',
  component: Product,
} as ComponentMeta<typeof Product>;

const AdaptedLink = forwardRef<HTMLAnchorElement>((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <a ref={ref} {...props} href="#123" />;
});

const ofdLogoSrc = URL.createObjectURL(
  new Blob(
    [
      `<svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0107 0.400146L19.2803 19.2283C19.3404 19.4074 19.3101 19.6036 19.2002 19.7564C19.0903 19.9098 18.913 20.0002 18.7247 20.0002H15.4786C14.2089 20.0002 13.0902 19.1928 12.6954 17.9917L9.43843 8.23222C9.3978 8.11206 9.3978 7.98159 9.43843 7.86144L11.8995 0.400732L13.0107 0.400146Z"
          fill="#55B8F0"
        />
        <path
          d="M4.52148 20H1.27535C1.08711 20 0.910272 19.9096 0.799842 19.7568C0.689959 19.604 0.659647 19.4077 0.719178 19.2286L6.96535 0.400508C7.04547 0.161367 7.26918 0 7.52152 0H12.4551C12.6433 0 12.8202 0.0903906 12.9306 0.243203C13.0405 0.395977 13.0708 0.592812 13.0107 0.771367L7.3041 17.9933C6.9093 19.1932 5.79062 20 4.52148 20Z"
          fill="#2165CC"
        />
        <path
          d="M12.4551 0H9.99658V9.90453V9.90469L13.0107 0.771367C13.0708 0.592852 13.0405 0.396016 12.9306 0.243203C12.8202 0.0903906 12.6434 0 12.4551 0V0Z"
          fill="#0D4EB0"
        />
      </svg>`,
    ],
    { type: 'image/svg+xml' },
  ),
);

export const Showcase = () => {
  return (
    <Stack gap={4}>
      <Typography variant="h3">ЭДО</Typography>
      <Box>
        <Product
          component={AdaptedLink}
          logo={() => (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 6.10352e-05C5.1195 6.10352e-05 4 1.11956 4 2.50006V3.00006H13.75C15.545 3.00006 17 4.45506 17 6.25006V11.2501C17 12.2166 16.2165 13.0001 15.25 13.0001H8.75C7.7835 13.0001 7 12.2166 7 11.2501V8.00006H5C4.4475 8.00006 4 8.44756 4 9.00006V13.5001C4 14.8806 5.1195 16.0001 6.5 16.0001H17.5C18.8805 16.0001 20 14.8806 20 13.5001V2.50006C20 1.11956 18.8805 6.10352e-05 17.5 6.10352e-05H6.5Z"
                fill="#8566FF"
              />
              <path
                d="M2.5 4.00006C1.1195 4.00006 0 5.11956 0 6.50006V17.5001C0 18.8806 1.1195 20.0001 2.5 20.0001H13.5C14.8805 20.0001 16 18.8806 16 17.5001V17.0001H6.25C4.455 17.0001 3 15.5451 3 13.7501V8.75006C3 7.78356 3.7835 7.00006 4.75 7.00006H11.25C12.2165 7.00006 13 7.78356 13 8.75006V12.0001H15C15.5525 12.0001 16 11.5526 16 11.0001V6.50006C16 5.11956 14.8805 4.00006 13.5 4.00006H2.5Z"
                fill="#5D3FD4"
              />
            </svg>
          )}
          name="Астрал.ЭДО"
        />
      </Box>
      <Typography variant="h3">ОФД</Typography>
      <Box>
        <Product logo={() => <img src={ofdLogoSrc} />} name="Астрал.ОФД" />
      </Box>
    </Stack>
  );
};
