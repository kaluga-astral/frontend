import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const FrowningEmojiIcon: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon viewBox="0 0 42 42" fill="currentColor" {...props}>
    <mask
      id="mask0_22533_4285"
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="36"
      height="36"
    >
      <circle cx="21" cy="21" r="18" fill="#EBEEF1" />
    </mask>
    <g mask="url(#mask0_22533_4285)">
      <circle cx="21" cy="21" r="18" fill="#FDDBB2" />
      <circle cx="21" cy="21" r="18" fill="url(#paint0_linear_22533_4285)" />
      <circle cx="21" cy="21" r="15.75" fill="url(#paint1_radial_22533_4285)" />
      <g filter="url(#filter0_di_22533_4285)">
        <ellipse cx="15.375" cy="17.625" rx="1.875" ry="2.625" fill="#976424" />
      </g>
      <g filter="url(#filter1_di_22533_4285)">
        <ellipse cx="26.625" cy="17.625" rx="1.875" ry="2.625" fill="#976424" />
      </g>
      <g filter="url(#filter2_di_22533_4285)">
        <path
          d="M11.5121 29.9172C10.9798 29.4525 14.8034 24.0123 20.9998 24.0132C27.31 24.0141 31.0203 29.4543 30.4893 29.9147C29.9996 30.375 26.7105 25.5 20.9998 25.5C15.2891 25.5 11.9997 30.375 11.5121 29.9172Z"
          fill="#976424"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_di_22533_4285"
        x="13.5"
        y="15"
        width="5.25"
        height="6.75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.75" dy="0.75" />
        <feGaussianBlur stdDeviation="0.375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.946787 0 0 0 0 0.420915 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4285"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4285"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.75" />
        <feGaussianBlur stdDeviation="0.375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_22533_4285"
        />
      </filter>
      <filter
        id="filter1_di_22533_4285"
        x="24.75"
        y="15"
        width="5.25"
        height="6.75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.75" dy="0.75" />
        <feGaussianBlur stdDeviation="0.375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.946787 0 0 0 0 0.420915 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4285"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4285"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.75" />
        <feGaussianBlur stdDeviation="0.375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_22533_4285"
        />
      </filter>
      <filter
        id="filter2_di_22533_4285"
        x="10.7129"
        y="22.5132"
        width="20.5771"
        height="8.18457"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-0.75" />
        <feGaussianBlur stdDeviation="0.375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.992157 0 0 0 0 0.878431 0 0 0 0 0.419608 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4285"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4285"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.75" />
        <feGaussianBlur stdDeviation="0.375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_22533_4285"
        />
      </filter>
      <linearGradient
        id="paint0_linear_22533_4285"
        x1="21"
        y1="3"
        x2="21"
        y2="39"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F1AA42" />
        <stop offset="0.458366" stop-color="#FACC57" />
        <stop offset="1" stop-color="#FBA917" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_22533_4285"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(21 5.25) rotate(90) scale(31.5)"
      >
        <stop stop-color="#FFFAE3" />
        <stop offset="0.576046" stop-color="#FFF045" />
        <stop offset="1" stop-color="#FFC147" stop-opacity="0" />
      </radialGradient>
    </defs>
  </SvgIcon>
);

export default FrowningEmojiIcon;
