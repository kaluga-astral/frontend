import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const AngryEmojiIcon: React.FunctionComponent<SvgIconProps> = ({
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
    <mask id="a" maskUnits="userSpaceOnUse" x="3" y="3" width="36" height="36">
      <circle cx="21" cy="21" r="18" fill="#EBEEF1" />
    </mask>
    <g mask="url(#a)">
      <circle cx="21" cy="21" r="18" fill="#FDDBB2" />
      <circle cx="21" cy="21" r="18" fill="url(#b)" />
      <circle cx="21" cy="21" r="15.75" fill="url(#c)" />
      <g filter="url(#d)">
        <ellipse cx="16.875" cy="23.625" rx="1.875" ry="2.625" fill="#976424" />
      </g>
      <g filter="url(#e)">
        <ellipse cx="25.875" cy="23.625" rx="1.875" ry="2.625" fill="#976424" />
      </g>
      <g filter="url(#f)">
        <path
          d="M22.817 20.812c-.04-.15.052-.523 1.185-1.371 1.618-1.21 3.43-1.695 3.791-1.793.363-.097 2.536-.679 2.779.227.145.543-1.292.54-3.535 1.296-1.068.363-2.508 1.183-3.663 1.893-.197.121-.49-.003-.557-.252z"
          fill="#976424"
        />
      </g>
      <g filter="url(#g)">
        <path
          d="M12.177 17.875c.242-.906 2.416-.324 2.778-.227.362.098 1.85.34 3.79 1.792 1.132.847 1.226 1.222 1.186 1.372-.067.248-.356.37-.557.252-1.153-.708-2.595-1.53-3.662-1.893-2.287-.613-3.68-.753-3.535-1.296z"
          fill="#976424"
        />
      </g>
      <g filter="url(#h)">
        <path
          d="M16.5 31.592c0-.06.015-.12.043-.174l.152-.292c1.883-3.622 7.128-3.437 8.772.3a.384.384 0 0 1-.545.487l-.418-.244a6.954 6.954 0 0 0-7.008 0l-.428.25a.378.378 0 0 1-.568-.327z"
          fill="#976424"
        />
      </g>
    </g>
    <defs>
      <filter
        id="d"
        x="15"
        y="21"
        width="5.25"
        height="6.75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx=".75" dy=".75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.858824 0 0 0 0 0.380392 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4249"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4249"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy=".75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
        <feBlend in2="shape" result="effect2_innerShadow_22533_4249" />
      </filter>
      <filter
        id="e"
        x="24"
        y="21"
        width="5.25"
        height="6.75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx=".75" dy=".75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.858824 0 0 0 0 0.380392 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4249"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4249"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy=".75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
        <feBlend in2="shape" result="effect2_innerShadow_22533_4249" />
      </filter>
      <filter
        id="f"
        x="22.06"
        y="15.875"
        width="9.272"
        height="5.986"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-.75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.866667 0 0 0 0 0.388235 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4249"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4249"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy=".75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
        <feBlend in2="shape" result="effect2_innerShadow_22533_4249" />
      </filter>
      <filter
        id="g"
        x="11.416"
        y="15.875"
        width="9.271"
        height="5.984"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-.75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.866667 0 0 0 0 0.388235 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4249"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4249"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy=".75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
        <feBlend in2="shape" result="effect2_innerShadow_22533_4249" />
      </filter>
      <filter
        id="h"
        x="15.75"
        y="27.013"
        width="10.5"
        height="5.708"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-.75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.878431 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_22533_4249"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_22533_4249"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy=".75" />
        <feGaussianBlur stdDeviation=".375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
        <feBlend in2="shape" result="effect2_innerShadow_22533_4249" />
      </filter>
      <linearGradient
        id="b"
        x1="21"
        y1="3"
        x2="21"
        y2="39"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F1AA42" />
        <stop offset=".458" stop-color="#FACC57" />
        <stop offset="1" stop-color="#FFF261" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="21"
        y1="5.25"
        x2="21"
        y2="36.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFFAE3" />
        <stop offset=".478" stop-color="#FFC147" />
        <stop offset="1" stop-color="#F8DC47" stop-opacity="0" />
      </linearGradient>
    </defs>
  </SvgIcon>
);

export default AngryEmojiIcon;
