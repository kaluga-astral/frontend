import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};
const svgDeleteIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7703 9.66123C10.9173 9.80816 10.9999 10.0075 11 10.2153C11.0001 10.4232 10.9176 10.6225 10.7706 10.7696C10.6237 10.9166 10.4244 10.9992 10.2165 10.9993C10.0087 10.9993 9.80931 10.9168 9.66229 10.7699L8.00029 9.10723L6.33762 10.7699C6.26501 10.8429 6.17869 10.9008 6.08361 10.9404C5.98854 10.9799 5.88659 11.0003 5.78362 11.0003C5.68065 11.0003 5.5787 10.9799 5.48363 10.9404C5.38855 10.9008 5.30223 10.8429 5.22962 10.7699C5.08262 10.6229 5.00003 10.4235 5.00003 10.2156C5.00003 10.0077 5.08262 9.80826 5.22962 9.66123L6.89162 7.99923L5.22962 6.33723C5.09146 6.18856 5.01633 5.9921 5.02005 5.78917C5.02377 5.58625 5.10603 5.39267 5.24955 5.24916C5.39306 5.10564 5.58664 5.02338 5.78956 5.01966C5.99249 5.01594 6.18895 5.09107 6.33762 5.22923L8.00029 6.89123L9.66229 5.22923C9.73504 5.15648 9.82141 5.09877 9.91646 5.05939C10.0115 5.02002 10.1134 4.99976 10.2163 4.99976C10.3192 4.99976 10.4211 5.02002 10.5161 5.05939C10.6112 5.09877 10.6975 5.15648 10.7703 5.22923C10.843 5.30198 10.9007 5.38835 10.9401 5.48341C10.9795 5.57846 10.9998 5.68034 10.9998 5.78323C10.9998 5.88612 10.9795 5.988 10.9401 6.08305C10.9007 6.17811 10.843 6.26448 10.7703 6.33723L9.10829 7.99923L10.7703 9.66123Z"
      fill="#1D3F66"
    />
  </svg>
);
const svgStartIcon = (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 3C7.5 3.82843 6.82843 4.5 6 4.5C5.17157 4.5 4.5 3.82843 4.5 3C4.5 2.17157 5.17157 1.5 6 1.5C6.82843 1.5 7.5 2.17157 7.5 3ZM9 3C9 4.65685 7.65685 6 6 6C4.34315 6 3 4.65685 3 3C3 1.34315 4.34315 0 6 0C7.65685 0 9 1.34315 9 3ZM1.5 9C1.5 8.72386 1.72386 8.5 2 8.5H10C10.2761 8.5 10.5 8.72386 10.5 9V10.4384C10.5 10.6679 10.3439 10.8679 10.1213 10.9235L7.81902 11.4991C6.62472 11.7977 5.37528 11.7977 4.18098 11.4991L1.87873 10.9235C1.65615 10.8679 1.5 10.6679 1.5 10.4384V9ZM0 9C0 7.89543 0.895431 7 2 7H10C11.1046 7 12 7.89543 12 9V10.4384C12 11.3562 11.3754 12.1561 10.4851 12.3787L8.18282 12.9543C6.74966 13.3126 5.25034 13.3126 3.81718 12.9543L1.51493 12.3787C0.624594 12.1561 0 11.3562 0 10.4384V9Z"
      fill="#1D3F66"
    />
  </svg>
);
const svgAvatar = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#DDE2E8" />
    <mask
      id="mask0_427_5743"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="16"
    >
      <circle cx="8" cy="8" r="8" fill="#FEF3E6" />
    </mask>
    <g mask="url(#mask0_427_5743)">
      <path
        d="M2.05699 14.4599C1.91489 14.3787 1.90474 14.2569 1.93519 14.1148C2.15849 13.1404 2.69643 12.3995 3.54901 11.8818C4.00575 11.6078 4.48279 11.3642 4.96998 11.1409C5.05118 11.1003 5.08163 11.0698 5.04103 10.9785C4.71623 10.2579 4.66548 9.50678 4.74668 8.73539C4.74668 8.68465 4.75683 8.6339 4.75683 8.5933C4.76698 8.4918 4.74668 8.4512 4.62489 8.42075C4.27979 8.3497 4.0159 8.05536 3.9753 7.73057C3.92455 7.34488 4.0565 7.04038 4.39144 6.85769C4.49294 6.79679 4.48279 6.74604 4.46249 6.65469C4.26964 6.05585 4.25949 5.46716 4.60459 4.90893C4.70608 4.73638 4.83803 4.59428 5.01058 4.49279C5.10193 4.43189 5.12222 4.37099 5.11208 4.26949C5.00043 3.27481 5.41657 2.52373 6.2387 1.99594C6.72589 1.6813 7.29428 1.6001 7.87282 1.6001C8.43105 1.6001 8.94869 1.71174 9.40543 2.03654C9.47648 2.08729 9.55768 2.12789 9.63888 2.15834C9.78098 2.21923 9.93322 2.22938 10.0652 2.11774C10.1362 2.06699 10.2073 2.03654 10.2885 2.08729C10.3697 2.13804 10.3697 2.20908 10.3697 2.29028C10.3595 2.56433 10.2174 2.75717 9.99412 2.89927C9.91292 2.95002 9.83173 2.98047 9.75053 3.03122C9.77083 3.09212 9.83173 3.09212 9.87232 3.11242C10.6336 3.50826 11.1309 4.09694 11.2831 4.95968C11.3846 5.53821 11.4151 6.1066 11.1816 6.66484C11.1512 6.74604 11.141 6.79679 11.2527 6.84754C11.6079 7.00993 11.7703 7.34488 11.7297 7.74072C11.6891 8.06551 11.4151 8.37 11.07 8.44105C10.9584 8.46135 10.9381 8.5121 10.9482 8.5933C10.9888 8.90794 10.9888 9.23273 10.9787 9.54738C10.9584 10.0447 10.867 10.5218 10.664 10.9785C10.6133 11.08 10.6437 11.1104 10.7351 11.151C11.3643 11.4555 12.0139 11.7499 12.5722 12.1863C13.2116 12.6938 13.6074 13.3535 13.78 14.1452C13.8104 14.2772 13.7901 14.3787 13.6582 14.4599C12.4199 15.2617 11.1004 15.891 9.63888 16.1955C8.77615 16.3782 7.91342 16.4289 7.04053 16.3477C5.36438 16.1382 3.47796 15.6981 2.05699 14.4599Z"
        fill="#3E526C"
      />
      <path
        d="M8.6239 2.02628C8.85734 2.09733 9.06034 2.23943 9.27348 2.35107C9.44603 2.45257 9.62873 2.54392 9.87232 2.54392C9.64902 2.68602 9.43588 2.75706 9.21258 2.76721C9.14154 2.76721 9.07049 2.76721 8.99944 2.76721C8.89794 2.76721 8.79644 2.77736 8.78629 2.90931C8.77614 3.03111 8.83704 3.09201 8.95884 3.13261C9.29378 3.22395 9.60843 3.3559 9.90277 3.5386C10.4712 3.88369 10.8162 4.38103 10.9279 5.04077C11.0192 5.54825 11.0294 6.05574 10.8365 6.55308C10.8162 6.61398 10.796 6.67488 10.7351 6.73578C10.6133 6.52263 10.5727 6.28919 10.5422 6.05574C10.5219 5.9238 10.5219 5.802 10.5422 5.67005C10.5524 5.51781 10.5016 5.41631 10.3798 5.34526C9.79112 4.96972 9.16184 4.72612 8.47165 4.60432C8.3194 4.57388 8.16716 4.59417 8.02506 4.69567C7.78146 4.87837 7.75102 5.15241 7.95401 5.37571C7.98446 5.40616 8.04536 5.43661 8.01491 5.47721C7.98446 5.52795 7.93371 5.49751 7.88296 5.47721C7.55817 5.38586 7.36532 5.15241 7.25368 4.84792C7.17248 4.62462 7.13188 4.58402 6.89843 4.62462C6.60409 4.68552 6.3199 4.76672 6.056 4.88852C5.70076 5.05092 5.69061 5.05092 5.55866 4.68552C5.53836 4.63477 5.51806 4.57387 5.49776 4.52313C5.52821 4.36073 5.45716 4.19833 5.47746 4.02579C5.52821 3.5589 5.71091 3.16306 6.0154 2.81796C6.45184 2.31047 7.02023 2.07703 7.66982 1.99583C7.96416 1.96538 8.24835 1.96538 8.53255 2.02628C8.57315 2.03643 8.6036 2.03643 8.6239 2.02628Z"
        fill="#445969"
      />
      <path
        d="M5.10193 9.20237C5.22372 9.37492 5.30492 9.56776 5.43687 9.73016C5.52822 9.85195 5.62972 9.9636 5.76166 10.0448C6.06616 10.2478 6.3605 10.1564 6.61425 9.79106C6.72589 9.61851 6.85784 9.45611 7.01009 9.31402C7.17248 9.16177 7.26383 9.14147 7.45668 9.23282C7.50743 9.25312 7.55818 9.27342 7.59877 9.30387C7.79162 9.48656 7.96417 9.39521 8.14686 9.27342C8.39046 9.11102 8.50211 9.14147 8.71525 9.33432C8.9284 9.51701 9.04004 9.78091 9.24304 9.9636C9.48663 10.197 9.77083 10.197 10.0246 9.9636C10.2276 9.77076 10.39 9.54746 10.5118 9.30387C10.5321 9.26327 10.5422 9.21252 10.6031 9.18207C10.6336 9.55761 10.593 9.91285 10.5118 10.2681C10.4001 10.7451 10.1971 11.1714 9.85203 11.5165C9.52723 11.8413 9.12124 12.0342 8.67465 12.1154C7.91342 12.2575 7.15218 12.2473 6.4214 11.9225C5.92406 11.6992 5.57897 11.3237 5.35567 10.8162C5.13238 10.3188 5.06133 9.77076 5.10193 9.20237Z"
        fill="#445969"
      />
      <path
        d="M10.1565 6.92879C9.60843 6.75625 9.06034 6.75625 8.51225 6.92879C8.31941 6.98969 8.15701 7.09119 8.05551 7.26374C8.02507 7.31448 8.00477 7.32463 7.95402 7.31448C7.92357 7.31448 7.90327 7.30433 7.87282 7.31448C7.72057 7.35508 7.61907 7.30434 7.52773 7.17239C7.38563 6.97954 7.16233 6.91864 6.93904 6.8679C6.5432 6.7867 6.1575 6.77655 5.76166 6.8679C5.61957 6.89834 5.49777 6.94909 5.37597 7.02014C5.34552 7.04044 5.32522 7.09119 5.28462 7.04044C5.25417 6.99984 5.29477 6.96939 5.31507 6.94909C5.60942 6.5025 5.82256 6.03561 5.85301 5.49767C5.85301 5.42663 5.89361 5.39618 5.94436 5.36573C6.22855 5.22363 6.5229 5.10183 6.83754 5.03078C6.91874 5.01048 6.94919 5.01049 6.99994 5.10183C7.27398 5.68037 7.82207 5.97471 8.47166 5.90367C8.55285 5.89352 8.63405 5.89352 8.71525 5.87322C8.79645 5.85292 8.8675 5.82247 8.8878 5.72097C8.89795 5.62962 8.85735 5.56872 8.77615 5.52812C8.6239 5.45708 8.47166 5.37588 8.34986 5.26423C8.28896 5.20333 8.16716 5.16273 8.21791 5.05108C8.26866 4.93944 8.39046 4.95974 8.49196 4.98004C8.7457 5.03078 8.9893 5.09168 9.22274 5.17288C9.52723 5.28453 9.81143 5.41648 10.0855 5.57887C10.1667 5.62962 10.1971 5.67022 10.1971 5.77172C10.1971 5.90367 10.2073 6.03561 10.2073 6.15741C10.2174 6.37056 10.2682 6.57355 10.2479 6.7867C10.2377 6.8273 10.258 6.91864 10.1565 6.92879Z"
        fill="#FBE9C7"
      />
      <path
        d="M10.0347 9.41533C9.98396 9.53713 9.89261 9.62847 9.79111 9.71982C9.65916 9.83147 9.56781 9.83147 9.45617 9.69952C9.32422 9.53713 9.20242 9.36458 9.07048 9.20218C8.97913 9.09054 8.87763 8.99919 8.74568 8.92814C8.49194 8.77589 8.22804 8.78604 7.98445 8.94844C7.88295 9.01949 7.8119 9.00934 7.7104 8.94844C7.38561 8.75559 7.11157 8.77589 6.81722 9.00934C6.62438 9.17173 6.47213 9.36458 6.33003 9.56758C6.13719 9.85177 6.01539 9.85177 5.7921 9.58788C5.51805 9.26308 5.36581 8.86724 5.21356 8.4714C5.18311 8.3902 5.15266 8.29885 5.11206 8.21765C5.11206 8.11616 5.06131 8.01466 5.14251 7.92331C5.15266 7.98421 5.17296 8.05526 5.18311 8.11616C5.31506 8.56275 5.57895 8.72514 6.15749 8.73529C6.73603 8.74544 7.10142 8.42065 7.41606 8.00451C7.45666 7.95376 7.48711 7.88271 7.52771 7.82181C7.67996 7.58837 7.98445 7.58837 8.1164 7.82181C8.27879 8.09586 8.49194 8.33945 8.75583 8.52215C9.14152 8.78604 9.56781 8.75559 10.0043 8.64395C10.055 8.6338 10.0956 8.6135 10.1464 8.5932C10.2478 8.6135 10.2073 8.68454 10.2073 8.74544C10.187 8.98904 10.1159 9.20218 10.0347 9.41533Z"
        fill="#FBE9C7"
      />
      <path
        d="M6.3199 7.16225C6.59394 7.1521 6.85783 7.18255 7.10143 7.2942C7.32472 7.38555 7.35517 7.4769 7.23338 7.67989C7.04053 7.98439 6.81723 8.28888 6.44169 8.38023C6.2184 8.44113 5.9951 8.42083 5.77181 8.34978C5.68046 8.31933 5.60941 8.26858 5.57896 8.17723C5.47746 7.94379 5.45716 7.71034 5.47746 7.46675C5.48761 7.36525 5.54851 7.30435 5.63986 7.2739C5.86316 7.1724 6.08645 7.1521 6.3199 7.16225Z"
        fill="#E2E4E7"
      />
      <path
        d="M9.37498 7.16228C9.55767 7.15213 9.78097 7.18258 10.0043 7.26378C10.1159 7.30438 10.187 7.38558 10.187 7.49723C10.1971 7.66977 10.187 7.83217 10.1464 7.99457C10.0753 8.27876 9.98396 8.34981 9.67947 8.39041C9.01974 8.48176 8.68479 8.10622 8.3803 7.57843C8.3194 7.46678 8.37015 7.38558 8.47165 7.32468C8.74569 7.18258 9.04004 7.15213 9.37498 7.16228Z"
        fill="#E4E7EA"
      />
      <path
        d="M2.31073 14.1961C2.25998 14.1453 2.30058 14.0946 2.31073 14.0438C2.51372 13.2724 2.95016 12.6736 3.62005 12.2473C4.01589 11.9936 4.42188 11.7703 4.84817 11.5774C4.86847 11.5673 4.89892 11.5673 4.91922 11.5571C5.19506 11.5571 6.38172 12.2492 5.76165 12.1458C5.00042 12.9071 3.8332 13.8713 3.07196 14.6325C3.01106 14.6934 2.42238 14.2367 2.31073 14.1961Z"
        fill="#F4DB99"
      />
      <path
        d="M5.28462 4.91919C5.34552 5.04099 5.40642 5.17293 5.47747 5.29473C5.55867 5.42668 5.48762 5.54848 5.46732 5.67027C5.39627 6.09657 5.20342 6.48226 4.93953 6.8375C4.84818 6.72585 4.80758 6.60405 4.78728 6.47211C4.69593 6.14731 4.72638 5.82252 4.84818 5.50788C4.93953 5.26428 5.07148 5.06129 5.28462 4.91919Z"
        fill="#445969"
      />
      <path
        d="M12.4098 12.4908C12.9274 12.907 13.2421 13.4449 13.4045 14.0843C13.4248 14.1554 13.4045 14.196 13.3436 14.2366C12.1154 15.0181 10.8163 15.6169 9.37499 15.8808C8.61376 16.0229 7.85253 16.0737 7.08114 16.0026C5.91392 15.9011 4.81774 15.5662 3.77231 15.0587C3.44752 14.9065 3.13288 14.7339 2.83853 14.5411C2.81823 14.3685 2.90958 14.2264 2.98063 14.0843C3.30542 13.384 3.84336 12.8867 4.51325 12.5314C4.57414 12.501 4.62489 12.4705 4.68579 12.4401C4.93954 12.2878 5.21358 12.166 5.47748 12.0341C5.56882 11.9935 5.66017 11.9326 5.76167 11.9427C6.01541 12.1254 6.28946 12.2168 6.5229 12.4401C7.34504 13.2013 8.61376 13.1708 9.35469 12.3386C9.38514 12.298 9.41559 12.2675 9.45619 12.2371C9.79113 12.0747 10.0753 11.8412 10.3088 11.557C10.3595 11.5266 10.4103 11.5469 10.461 11.5672C11.1411 11.8311 11.8008 12.1051 12.4098 12.4908Z"
        fill="#F1CD75"
      />
      <path
        d="M8.62389 2.02641C8.57314 2.07716 8.51224 2.04671 8.4615 2.03656C7.74086 1.98581 7.04053 2.05686 6.44169 2.50345C5.8733 2.91959 5.55866 3.49813 5.51806 4.20861C5.50791 4.31011 5.58911 4.42176 5.51806 4.52325C5.44701 4.18831 5.40641 3.85337 5.49776 3.51843C5.7312 2.70644 6.27929 2.21925 7.09127 2.02641C7.59876 1.90461 8.10625 1.90461 8.62389 2.02641Z"
        fill="#798793"
      />
      <path
        d="M10.9482 7.62901C10.9482 7.50721 10.9381 7.37526 10.9482 7.25347C10.9584 7.10122 11.0091 7.07077 11.1411 7.15197C11.3035 7.25347 11.3948 7.40571 11.3846 7.59856C11.3745 7.79141 11.2832 7.94365 11.1005 8.04515C10.999 8.0959 10.9279 8.10605 10.9381 7.9538C10.9482 7.8523 10.9482 7.74066 10.9482 7.62901Z"
        fill="#F6E6C6"
      />
      <path
        d="M4.74667 7.67993C4.74667 7.78143 4.73652 7.88293 4.74667 7.98442C4.75682 8.07577 4.71622 8.09607 4.63503 8.06562C4.46248 8.00472 4.31023 7.81188 4.30008 7.60888C4.28993 7.43634 4.41173 7.22319 4.56398 7.14199C4.63503 7.11154 4.66548 7.13184 4.68577 7.18259C4.69592 7.21304 4.72637 7.24349 4.72637 7.26379C4.74667 7.40589 4.74667 7.54798 4.74667 7.67993Z"
        fill="#F7E6C6"
      />
      <path
        d="M12.4098 12.4908C12.3489 12.4908 12.2981 12.4502 12.2474 12.4197C11.6181 12.0949 10.9888 11.7803 10.3291 11.5468C10.3798 11.4047 10.461 11.3743 10.6133 11.4453C11.1918 11.7295 11.7703 12.0036 12.2981 12.3791C12.3286 12.4197 12.3692 12.4603 12.4098 12.4908Z"
        fill="#EED595"
      />
      <path
        d="M10.0347 9.41532C10.0246 9.24277 10.1261 9.09052 10.1362 8.91798C10.1464 8.81648 10.2073 8.72513 10.1464 8.61348C10.5016 8.33944 10.5219 7.9436 10.5422 7.54775C10.5422 7.49701 10.5016 7.42596 10.5828 7.39551C10.7249 8.16689 10.4204 8.79618 10.0347 9.41532Z"
        fill="#DDCEB2"
      />
      <path
        d="M5.2846 4.91897C5.27445 4.94942 5.2643 4.97987 5.23386 5.00017C4.91921 5.27421 4.81771 5.6396 4.75682 6.03545C4.73652 6.18769 4.78726 6.32979 4.77711 6.47189C4.61472 5.9441 4.62487 5.43661 4.98011 4.97987C5.01056 4.93927 5.04101 4.90882 5.08161 4.86822C5.17296 4.77687 5.244 4.75657 5.2846 4.91897Z"
        fill="#798793"
      />
      <path
        d="M10.1565 6.92865C10.2276 6.80685 10.1768 6.66475 10.187 6.5328C10.1971 6.40086 10.1971 6.26891 10.1971 6.13696C10.258 6.41101 10.3088 6.68505 10.4407 6.9388C10.461 6.98955 10.4509 7.01999 10.4204 7.05044C10.3798 7.09104 10.3494 7.05044 10.3189 7.03014C10.2682 6.9997 10.2073 6.96925 10.1565 6.92865Z"
        fill="#D7C8AD"
      />
      <path
        d="M8.44121 12.5415C8.04537 12.7039 7.64953 12.7039 7.25368 12.5415C7.64953 12.572 8.04537 12.5821 8.44121 12.5415Z"
        fill="#E4D8BD"
      />
      <path
        d="M5.14252 7.9437C5.08162 8.03505 5.13237 8.13655 5.11207 8.23804C5.05117 8.11625 5.09177 7.9843 5.08162 7.8625C5.07147 7.71025 5.08162 7.55801 5.10192 7.40576C5.10192 7.58846 5.12222 7.761 5.14252 7.9437Z"
        fill="#B5B8AA"
      />
      <path
        d="M7.85251 11.1613C7.25367 11.1816 6.67514 10.6944 6.61424 10.0042C6.59394 9.80118 6.74619 9.70983 6.93903 9.80118C7.23337 9.94328 7.52772 10.0245 7.85251 10.0245C8.14686 10.0245 8.43105 9.95343 8.69494 9.82148C8.79644 9.77073 8.89794 9.70983 8.99944 9.79103C9.09078 9.87223 9.08064 9.97373 9.06034 10.0854C8.99944 10.5827 8.70509 10.8974 8.26865 11.0902C8.13671 11.1511 7.98446 11.1714 7.85251 11.1613Z"
        fill="#3E526C"
      />
      <path
        d="M7.03038 10.2275C7.57847 10.4305 8.11641 10.4305 8.65435 10.2275C8.563 10.5625 8.24835 10.8061 7.87281 10.8162C7.49727 10.8264 7.16233 10.6031 7.03038 10.2275Z"
        fill="#FDFEFE"
      />
    </g>
  </svg>
);

const Template: Story = (args) => <Tag {...args} />;

export const ShowcaseColor: Story = () => (
  <Stack direction="column" gap={2}>
    <Stack direction="row" gap={2}>
      <Stack direction="row" gap={2}>
        <Stack direction="column" gap={2}>
          <Stack direction="column">
            <h2>Contained </h2>
            <Stack direction="row" gap={2}>
              <Stack direction="column">
                <h3>Primary </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="primary"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="primary"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Success </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="success"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="success"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Warning </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="warning"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="warning"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Error </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="error"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="contained"
                        color="error"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column">
            <h2>Light </h2>
            <Stack direction="row" gap={2}>
              <Stack direction="column">
                <h3>Primary </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="primary"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="primary"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Success </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="success"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="success"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Warning </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="warning"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="warning"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Error </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="error"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        size="small"
                        variant="light"
                        color="error"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" gap={2}>
        <Stack direction="column" gap={2}>
          <Stack direction="column">
            <h2>Contained Disabled </h2>
            <Stack direction="row" gap={2}>
              <Stack direction="column">
                <h3>Primary </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="primary"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="primary"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Success </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="success"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="success"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Warning </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="warning"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="warning"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Error </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="error"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="contained"
                        color="error"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column">
            <h2>Light </h2>
            <Stack direction="row" gap={2}>
              <Stack direction="column">
                <h3>Primary </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="primary"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="primary"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Success </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="success"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="success"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Warning </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="warning"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="warning"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column">
                <h3>Error </h3>
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="error"
                        rounded
                      />
                      <text>Rounded</text>
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Tag
                        label="Tag"
                        disabled
                        size="small"
                        variant="light"
                        color="error"
                      />
                      <text>Not rounded</text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Stack direction="row" gap={2}>
      <Tag
        size="small"
        color="grey"
        label="Тэг"
        deleteIcon={svgDeleteIcon}
        onDelete={() => {
          console.log(1);
        }}
      />
      <Tag
        size="small"
        color="grey"
        label="Тэг"
        rounded
        deleteIcon={svgDeleteIcon}
        onDelete={() => {
          console.log(1);
        }}
      />
      <Tag
        icon={svgStartIcon}
        size="small"
        color="grey"
        label="Тэг"
        deleteIcon={svgDeleteIcon}
        onDelete={() => {
          console.log(1);
        }}
      />
      <Tag
        icon={svgStartIcon}
        size="small"
        color="grey"
        label="Тэг"
        rounded
        deleteIcon={svgDeleteIcon}
        onDelete={() => {
          console.log(1);
        }}
      />
      <Tag
        avatar={svgAvatar}
        size="small"
        color="grey"
        label="Тэг"
        deleteIcon={svgDeleteIcon}
        onDelete={() => {
          console.log(1);
        }}
      />
      <Tag
        avatar={svgAvatar}
        size="small"
        color="grey"
        label="Тэг"
        rounded
        deleteIcon={svgDeleteIcon}
        onDelete={() => {
          console.log(1);
        }}
      />
    </Stack>
    <Stack direction="row" gap={2}>
      <Tag size="small" color="grey" label="Тэг" />
      <Tag size="small" color="grey" label="Тэг" rounded />
      <Tag icon={svgStartIcon} size="small" color="grey" label="Тэг" />
      <Tag icon={svgStartIcon} size="small" color="grey" label="Тэг" rounded />
      <Tag avatar={svgAvatar} size="small" color="grey" label="Тэг" />
      <Tag avatar={svgAvatar} size="small" color="grey" label="Тэг" rounded />
    </Stack>
  </Stack>
);

ShowcaseColor.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});
Default.args = {
  color: 'grey',
  label: 'Тэг',
  deleteIcon: svgDeleteIcon,
  onDelete: () => console.log(1),
};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
