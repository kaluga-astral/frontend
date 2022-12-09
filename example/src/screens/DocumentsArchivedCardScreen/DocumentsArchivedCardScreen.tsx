import { observer } from 'mobx-react-lite';
import notFoundDocument from 'images/notFoundDocument.svg';

import {
  BlockOutlineMd,
  Button,
  CheckOutlineMd,
  ContentState,
  DownloadIcon,
  PDFViewer,
  PageLayout,
} from '@example/shared';

export const DocumentsArchivedCardScreen = observer(() => {
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
        children: (
          <ContentState
            isLoading={false}
            isCustom={false}
            customState={{
              title: 'Не удалось отобразить документ',
              imgSrc: notFoundDocument,
              imgAlt: 'Документ не найден',
              description:
                'Для просмотра документа скачайте его на свое устройство',
              Actions: (
                <Button onClick={() => {}} endIcon={<DownloadIcon />}>
                  Скачать
                </Button>
              ),
            }}
          >
            <PDFViewer data="https://rss-dev.cloud.astral-dev.ru/controller/api/v1/storage/c42a6e0e-8041-4d9a-817c-aab5718e243c?fileName=0610013_008_012_83130148570002_2022_1211__20221123.pdf&contentType=application%2Fpdf&attachment=false" />
          </ContentState>
        ),
        isPaddingDisabled: false,
      }}
      aside={{
        children: <>Состав пакета документов</>,
      }}
    />
  );
});
