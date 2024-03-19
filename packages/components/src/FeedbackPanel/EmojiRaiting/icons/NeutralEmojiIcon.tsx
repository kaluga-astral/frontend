import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const NeutralEmojiIcon: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 42 42"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <mask
      id="mask0_22533_4313"
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="36"
      height="36"
    >
      <circle cx="21" cy="21" r="18" fill="#EBEEF1" />
    </mask>
    <g mask="url(#mask0_22533_4313)">
      <circle cx="21" cy="21" r="18" fill="#FDDBB2" />
      <circle cx="21" cy="21" r="18" fill="url(#paint0_linear_22533_4313)" />
      <circle cx="21" cy="21" r="15.75" fill="url(#paint1_radial_22533_4313)" />
      <g filter="url(#filter0_di_22533_4313)">
        <circle cx="15" cy="18" r="2.25" fill="#976424" />
      </g>
      <g filter="url(#filter1_di_22533_4313)">
        <circle cx="27" cy="18" r="2.25" fill="#976424" />
      </g>
      <g filter="url(#filter2_di_22533_4313)">
        <path
          d="M11.25 27.375C11.25 26.7537 11.7537 26.25 12.375 26.25H29.625C30.2463 26.25 30.75 26.7537 30.75 27.375C30.75 27.9963 30.2463 28.5 29.625 28.5H12.375C11.7537 28.5 11.25 27.9963 11.25 27.375Z"
          fill="#976424"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_di_22533_4313"
        x="12.75"
        y="15.75"
        width="6"
        height="6"
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
          result="effect1_dropShadow_22533_4313"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4313"
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
          result="effect2_innerShadow_22533_4313"
        />
      </filter>
      <filter
        id="filter1_di_22533_4313"
        x="24.75"
        y="15.75"
        width="6"
        height="6"
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
          result="effect1_dropShadow_22533_4313"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4313"
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
          result="effect2_innerShadow_22533_4313"
        />
      </filter>
      <filter
        id="filter2_di_22533_4313"
        x="10.5"
        y="24.75"
        width="21"
        height="4.5"
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
          result="effect1_dropShadow_22533_4313"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4313"
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
          result="effect2_innerShadow_22533_4313"
        />
      </filter>
      <linearGradient
        id="paint0_linear_22533_4313"
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
        id="paint1_radial_22533_4313"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(21 5.25) rotate(90) scale(31.5 66.031)"
      >
        <stop stop-color="#FFFAE3" />
        <stop offset="0.641739" stop-color="#F2DE34" />
        <stop offset="1" stop-color="#FFD37D" stop-opacity="0" />
      </radialGradient>
    </defs>
  </SvgIcon>
);

export default NeutralEmojiIcon;
