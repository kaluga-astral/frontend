import { Switch } from '@mui/material';

import { styled } from '../styles';

import { SwitchProps } from './types';

const SIZES = {
  small: {
    height: 4,
    width: 8,
    thumb: {
      height: 3,
      width: 3,
    },
    icons: {
      width: 2,
      height: 2,
      indent: 2,
    },
  },
  medium: {
    height: 5,
    width: 10,
    thumb: {
      height: 4,
      width: 4,
    },
    icons: {
      width: 3,
      height: 3,
      indent: 2,
    },
  },
};

export const StyledSwitch = styled(Switch)<
  SwitchProps & { size: Pick<SwitchProps, 'size'> }
>`
  box-sizing: content-box;
  width: fit-content;
  height: fit-content;
  padding: ${({ theme }) => theme.spacing(1)};

  & .MuiSwitch-switchBase {
    padding: 0;
  }

  & + .MuiSwitch-track {
    opacity: 1;
  }

  & .MuiSwitch-thumb {
    width: ${({ size, theme }) => theme.spacing(SIZES[size].thumb.width)};
    height: ${({ size, theme }) => theme.spacing(SIZES[size].thumb.height)};
    margin: ${({ theme }) => theme.spacing(1.5)};

    background-color: ${({ theme }) => theme.palette.background.default};
    box-shadow: none;
  }

  & .Mui-checked {
    & + .MuiSwitch-track {
      background-color: ${({ theme }) => theme.palette.primary.main[800]};
    }
  }

  & :not(.Mui-checked) {
    & + .MuiSwitch-track {
      background-color: ${({ theme }) => theme.palette.grey[700]};
    }
  }

  & .Mui-checked:hover + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.palette.primary[700]};
  }

  & :not(.Mui-checked):hover + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }

  & .MuiSwitch-switchBase:hover,
  .MuiSwitch-switchBase.Mui-checked:hover {
    background-color: transparent;
  }

  & .MuiButtonBase-root.MuiSwitch-switchBase + .MuiSwitch-track {
    width: ${({ size, theme }) => theme.spacing(SIZES[size].width)};
    height: ${({ size, theme }) => theme.spacing(SIZES[size].height)};

    border-radius: 10px;
    opacity: 1;

    &::before,
    &::after {
      position: absolute;
      top: 50%;

      transform: translateY(-50%);

      content: '';
    }

    &::before {
      left: ${({ size, theme }) => theme.spacing(SIZES[size].icons.indent)};

      width: ${({ size, theme }) => theme.spacing(SIZES[size].icons.width)};
      height: ${({ size, theme }) => theme.spacing(SIZES[size].icons.height)};

      background-image: url('data:image/svg+xml;utf8,<svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6L4.5 8.5L10 3.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      background-size: cover;
    }

    &::after {
      right: ${({ size, theme }) => theme.spacing(SIZES[size].icons.indent)};

      width: ${({ size, theme }) => theme.spacing(SIZES[size].icons.width)};
      height: ${({ size, theme }) => theme.spacing(SIZES[size].icons.height)};

      background-image: url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00005 5.41084L3.79463 3.20542C3.71605 3.12952 3.6108 3.08752 3.50155 3.08847C3.3923 3.08942 3.28779 3.13324 3.21054 3.2105C3.13329 3.28775 3.08947 3.39225 3.08852 3.5015C3.08757 3.61075 3.12957 3.716 3.20546 3.79459L5.41088 6L3.20546 8.20542C3.12957 8.284 3.08757 8.38926 3.08852 8.4985C3.08947 8.60775 3.13329 8.71226 3.21054 8.78951C3.28779 8.86676 3.3923 8.91058 3.50155 8.91153C3.6108 8.91248 3.71605 8.87049 3.79463 8.79459L6.00005 6.58917L8.20546 8.79459C8.28405 8.87049 8.3893 8.91248 8.49855 8.91153C8.6078 8.91058 8.7123 8.86676 8.78956 8.78951C8.86681 8.71226 8.91063 8.60775 8.91158 8.4985C8.91253 8.38926 8.87053 8.284 8.79463 8.20542L6.58921 6L8.79463 3.79459C8.83443 3.75615 8.86617 3.71017 8.88801 3.65934C8.90984 3.6085 8.92134 3.55383 8.92182 3.4985C8.9223 3.44318 8.91176 3.38831 8.89081 3.33711C8.86986 3.2859 8.83892 3.23938 8.7998 3.20026C8.76067 3.16113 8.71415 3.13019 8.66294 3.10924C8.61174 3.08829 8.55687 3.07775 8.50155 3.07823C8.44622 3.07871 8.39155 3.09021 8.34071 3.11204C8.28988 3.13388 8.2439 3.16562 8.20546 3.20542L6.00005 5.41084Z" fill="white" stroke="white" stroke-width="1.5"/></svg>');
      background-size: cover;
    }
  }

  & :not(.Mui-disabled):active + .MuiSwitch-track {
    box-sizing: border-box;
    width: ${({ size, theme }) => theme.spacing(SIZES[size].width)};
    height: ${({ size, theme }) => theme.spacing(SIZES[size].height)};

    border: ${({ theme }) => `2px solid ${theme.palette.primary[400]}`};
  }

  & .MuiButtonBase-root.MuiSwitch-switchBase.Mui-disabled {
    & + .MuiSwitch-track {
      background-color: ${({ theme }) => theme.palette.grey[200]};

      &::before {
        background-image: url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6L4.5 8.5L10 3.5" stroke="%2394A4B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }

      &::after {
        background-image: url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00005 5.41084L3.79463 3.20542C3.71605 3.12952 3.6108 3.08752 3.50155 3.08847C3.3923 3.08942 3.28779 3.13324 3.21054 3.2105C3.13329 3.28775 3.08947 3.39225 3.08852 3.5015C3.08757 3.61075 3.12957 3.716 3.20546 3.79459L5.41088 6L3.20546 8.20542C3.12957 8.284 3.08757 8.38926 3.08852 8.4985C3.08947 8.60775 3.13329 8.71226 3.21054 8.78951C3.28779 8.86676 3.3923 8.91058 3.50155 8.91153C3.6108 8.91248 3.71605 8.87049 3.79463 8.79459L6.00005 6.58917L8.20546 8.79459C8.28405 8.87049 8.3893 8.91248 8.49855 8.91153C8.6078 8.91058 8.7123 8.86676 8.78956 8.78951C8.86681 8.71226 8.91063 8.60775 8.91158 8.4985C8.91253 8.38926 8.87053 8.284 8.79463 8.20542L6.58921 6L8.79463 3.79459C8.83443 3.75615 8.86617 3.71017 8.88801 3.65934C8.90984 3.6085 8.92134 3.55383 8.92182 3.4985C8.9223 3.44318 8.91176 3.38831 8.89081 3.33711C8.86986 3.2859 8.83892 3.23938 8.7998 3.20026C8.76067 3.16113 8.71415 3.13019 8.66294 3.10924C8.61174 3.08829 8.55687 3.07775 8.50155 3.07823C8.44622 3.07871 8.39155 3.09021 8.34071 3.11204C8.28988 3.13388 8.2439 3.16562 8.20546 3.20542L6.00005 5.41084Z" fill="%2394A4B5" stroke="%2394A4B5" stroke-width="1.5"/></svg>');
      }
    }
  }
`;
