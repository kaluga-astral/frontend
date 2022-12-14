import { observer } from 'mobx-react-lite';

import {
  BlockOutlineMd,
  CheckOutlineMd,
  DownloadIcon,
  PageLayout,
} from '@example/shared';

export const DocumentsIncomingCardScreen = observer(() => {
  return (
    <PageLayout
      header={{
        title: 'Название пакета',
        backButton: {},
        actions: {
          main: [
            {
              variant: 'light',
              text: 'Скачать все',
              startIcon: <DownloadIcon />,
            },
            {
              variant: 'light',
              text: 'Отклонить',
              color: 'error',
              startIcon: <BlockOutlineMd />,
            },
            {
              variant: 'contained',
              text: 'Подписать и отправить',
              startIcon: <CheckOutlineMd />,
            },
          ],
        },
      }}
      content={{
        children: <div>PDF</div>,
        isPaddingDisabled: false,
      }}
      aside={{
        children: <>Состав пакета документов</>,
      }}
    />
  );
});
