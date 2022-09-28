import { ReactNode } from 'react';

import {
  DataGridNoDataFigcaption,
  DataGridNoDataFigure,
  DataGridNoDataIcon,
  DataGridNoDataWrapper,
} from './styles';

export type DataGridNoDataProps = {
  /**
   * @default 'Нет данных'
   * @example <DataGridNoData title='Нет данных' />
   * @description Заголовок
   */
  title?: string;
  /**
   * @default BaseNoDataIcon()
   * @example <DataGridNoData noDataIcon={BaseNoDataIcon()} />
   * @description Иконка
   */
  noDataIcon?: ReactNode;
  /**
   * @default 250
   * @example <DataGridNoData noDataIconWidth={250} />
   * @description Ширина иконки (высота рассчитывается пропорционально ширине)
   */
  noDataIconWidth?: number;
};

const BaseNoDataIcon = () => (
  <svg viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#EBEEF1"
      stroke="#B7C2CE"
      d="M106.5 62a43.5 43.5 0 1 1-87 0 43.5 43.5 0 0 1 87 0Z"
    />
    <path
      fill="#B7C2CE"
      fillRule="evenodd"
      d="m48.3 74 22.5-44.7a5.3 5.3 0 0 1 7-2.3l23.7 12a5 5 0 0 1 2.7 3l4.7 14.8c.4 1.3.3 2.7-.3 4L91 95.4a5.3 5.3 0 0 1-7.1 2.3L50.6 81a5.3 5.3 0 0 1-2.3-7Zm.9.4 22.5-44.6c1-2.1 3.6-3 5.7-1.9l23.7 12c.7.3 1.2.8 1.6 1.4l-3.3 6.5a5.3 5.3 0 0 0 2.4 7l6.3 3.3c0 .7 0 1.5-.4 2.2L90.2 95a4.4 4.4 0 0 1-5.8 1.8L51.1 80.1c-2.1-1-3-3.6-2-5.7Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M71.7 29.8 49.2 74.4c-1 2-.2 4.7 1.9 5.7L84.4 97c2.1 1.1 4.7.3 5.8-1.8l17.5-34.8c.3-.7.5-1.5.4-2.2l-6.3-3.2a5.3 5.3 0 0 1-2.4-7l3.3-6.6c-.4-.6-1-1.1-1.6-1.4L77.4 28c-2.1-1-4.7-.2-5.7 1.9Z"
    />
    <path
      fill="#B7C2CE"
      fillRule="evenodd"
      d="M77 33.9c.1-.4.6-.5 1-.3l17.5 8.8a.7.7 0 0 1-.6 1.3l-17.6-8.9a.7.7 0 0 1-.3-1Zm-2.4 4.6c.2-.3.6-.5 1-.3l6.1 3.1a.7.7 0 0 1-.6 1.3l-6.2-3.1a.7.7 0 0 1-.3-1Z"
      clipRule="evenodd"
    />
    <path
      stroke="#B7C2CE"
      strokeLinecap="round"
      strokeWidth="2.1"
      d="m57.1 74 5.6 2.8m4.6 2.3 2.4 1.2"
    />
    <path
      fill="#B7C2CE"
      fillRule="evenodd"
      d="M67.8 50.5a2.6 2.6 0 0 1 3.5-1.1l25.5 12.8c1.3.6 1.8 2.2 1.1 3.5l-7.5 15a2.6 2.6 0 0 1-3.6 1.2L61.4 69a2.6 2.6 0 0 1-1.2-3.5l7.6-15Zm3-.3 25.5 12.9c.8.4 1.2 1.4.7 2.2l-1 2.3-28.5-14.3 1.2-2.3c.4-.8 1.4-1.2 2.2-.8Zm-3.7 4-1.8 3.5L93.6 72l1.9-3.6L67 54.1Zm26.1 18.7L64.8 58.6 62.6 63l28.3 14.3 2.3-4.4Zm-2.6 5.3h-.2L62.2 63.8l-1 2c-.5.9-.2 1.8.6 2.3L87.3 81c.8.4 1.8 0 2.2-.7l1-2.1Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M41.1 30.7c.7-.3 1.4-.5 2.1-.5l3.7 6.3a5.3 5.3 0 0 0 7.2 2l6.1-3.7c.7.4 1.2 1 1.6 1.6l19.5 33.7c1.2 2 .5 4.7-1.6 5.9L47.4 94.6c-2 1.2-4.7.5-5.9-1.5l-25-43.3c-1.1-2-.4-4.6 1.6-5.8l23-13.3Z"
    />
    <path
      fill="#B7C2CE"
      fillRule="evenodd"
      d="M61.2 34.3c-.5-.4-1-.7-1.7-.8l-14.8-4.1a5.3 5.3 0 0 0-4 .5L17.6 43a5.3 5.3 0 0 0-2 7.2l25 43.3a5.3 5.3 0 0 0 7.2 2l32.3-18.8a5.3 5.3 0 0 0 2-7.2L62.7 36c-.4-.6-.9-1.2-1.5-1.6Zm-18-4.1c-.7 0-1.4.2-2 .5L18.1 44a4.3 4.3 0 0 0-1.6 5.8l25 43.3c1.1 2 3.7 2.7 5.8 1.5L79.7 76c2-1.2 2.8-3.8 1.6-5.9L61.8 36.4c-.4-.7-.9-1.2-1.6-1.6l-6.1 3.6a5.3 5.3 0 0 1-7.2-2l-3.7-6.2Z"
      clipRule="evenodd"
    />
    <path
      fill="#B7C2CE"
      fillRule="evenodd"
      d="M23 47.8c-.2-.4-.2-1 .2-1.1l17-9.9c.4-.2.8 0 1.1.5.3.4.2 1-.1 1.1l-17 9.9c-.4.2-1 0-1.2-.5Zm2.6 4.5c-.2-.4-.2-1 .2-1.1l6-3.5c.3-.2.8 0 1 .5.3.4.2 1-.1 1.2l-6 3.4c-.3.2-.8 0-1-.5ZM45 87.2c-.2-.2-.1-.5.1-.6l6.4-3.7a.5.5 0 0 1 .5.8l-6.4 3.7c-.2.1-.5 0-.7-.2Zm9.8-5.7c-.1-.2 0-.5.2-.6l3.3-2c.2 0 .5 0 .6.2.1.3 0 .6-.2.7l-3.3 1.9c-.2.1-.5 0-.6-.2Zm-23-17.1a2.6 2.6 0 0 1 1-3.6l26.4-15.2c1.3-.8 2.9-.3 3.6 1L71.2 61c.7 1.2.3 2.8-1 3.6L43.8 79.9c-1.3.8-2.9.3-3.6-1l-8.4-14.5Zm1.5-2.7 26.4-15.3c.8-.4 1.8-.1 2.2.6l8.4 14.6c.5.8.2 1.8-.6 2.2L43.3 79.1c-.8.4-1.8.2-2.2-.6l-1.2-2 29.3-17-.5-.8-29.3 16.9-2.5-4.3 29.3-16.9-.5-.9-29.3 17-2-3.5 29.3-17-.5-.8-29.3 17-1.2-2.3c-.5-.7-.2-1.7.6-2.2Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M34.7 30.1v64.1c0 3 2.4 5.4 5.4 5.4h45.4c3 0 5.4-2.4 5.4-5.4v-50c0-.6-.1-1.2-.3-1.7h-9.2A6.4 6.4 0 0 1 75 36V25.4c-.8-.4-1.8-.7-2.7-.7H40c-3 0-5.4 2.4-5.4 5.4Z"
    />
    <path
      fill="#B7C2CE"
      fillRule="evenodd"
      d="M75 24.3c-.9-.4-1.8-.6-2.7-.6H40a6.4 6.4 0 0 0-6.4 6.4v64.1c0 3.6 2.9 6.4 6.4 6.4h45.4c3.5 0 6.4-2.8 6.4-6.4v-50a6.4 6.4 0 0 0-1.8-4.4l-13-14a6.4 6.4 0 0 0-2-1.5Zm-40.3 70V30c0-3 2.4-5.4 5.4-5.4h32.2c1 0 1.9.3 2.7.7V36c0 3.5 2.9 6.4 6.4 6.4h9.2c.2.5.3 1 .3 1.7v50c0 3-2.4 5.4-5.4 5.4H40c-3 0-5.4-2.4-5.4-5.4Z"
      clipRule="evenodd"
    />
    <path
      fill="#B7C2CE"
      fillRule="evenodd"
      d="M43 34c0-.5.5-1 1-1h20.7c.5 0 1 .5 1 1s-.5 1-1 1H44a1 1 0 0 1-1-1Zm0 3.8c0-.5.5-1 1-1h7.6c.5 0 .9.5.9 1s-.4 1-.9 1H44a1 1 0 0 1-1-1Zm-.8 52c0-.2.1-.4.4-.4H52c.3 0 .5.2.5.4 0 .3-.2.5-.5.5h-9.4c-.3 0-.4-.2-.4-.5Zm14 0c0-.2.2-.4.5-.4h4.7c.3 0 .5.2.5.4 0 .3-.2.5-.5.5h-4.7c-.3 0-.5-.2-.5-.5Zm-15-34.9c0-1.2 1-2.1 2.1-2.1h39c1.1 0 2 1 2 2v24a2 2 0 0 1-2 2.1h-39a2 2 0 0 1-2-2v-24Zm2.1-1.1h39c.6 0 1 .5 1 1v4.6h-41V55c0-.6.4-1.1 1-1.1Zm-1 20.6v4.4c0 .6.4 1.1 1 1.1h39c.6 0 1-.5 1-1v-4.5h-41Zm41-1h-41V67h41v6.6Zm0-13.1V66h-41v-5.7h41Z"
      clipRule="evenodd"
    />
    <circle cx="19.8" cy="35.9" r="2" fill="#F0F4F7" />
    <circle cx="101.2" cy="28.3" r="2.7" fill="#F0F4F7" />
    <circle cx="29.5" cy="98.4" r="1.9" fill="#DDE2E8" />
    <circle cx="24.3" cy="29.7" r="1.3" fill="#DDE2E8" />
    <circle cx="96.7" cy="23.1" r="1.3" fill="#DDE2E8" />
    <circle cx="103.9" cy="86.3" r="1.3" fill="#EBEEF1" />
  </svg>
);

export const DataGridNoData = ({
  title = 'Нет данных',
  noDataIcon = BaseNoDataIcon(),
  noDataIconWidth = 250,
}: DataGridNoDataProps) => {
  return (
    <DataGridNoDataWrapper>
      <DataGridNoDataFigure>
        <DataGridNoDataIcon noDataIconWidth={noDataIconWidth}>
          {noDataIcon}
        </DataGridNoDataIcon>

        <DataGridNoDataFigcaption component="figcaption" variant="h4">
          {title}
        </DataGridNoDataFigcaption>
      </DataGridNoDataFigure>
    </DataGridNoDataWrapper>
  );
};
