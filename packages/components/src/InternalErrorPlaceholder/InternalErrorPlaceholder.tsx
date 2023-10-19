import { useContext } from 'react';
import { Link } from '@mui/material';

import { Button } from '../Button';
import { Placeholder } from '../Placeholder';
import { ConfigContext } from '../ConfigProvider';
import { Typography } from '../Typography';
import { formatPhoneToView } from '../utils/phone';

export const InternalErrorPlaceholder = () => {
  const { imagesMap, techSup } = useContext(ConfigContext);

  const handleRefreshButtonClick = () => {
    location.reload();
  };

  return (
    <Placeholder
      title="Произошла непредвиденная ошибка"
      description={
        <div>
          <Typography component="p">
            Пожалуйста, попробуйте обновить страницу или обратитесь в
            техническую поддержку:
          </Typography>
          <Typography component="p">
            email&nbsp;
            <Link href={`mailto:${techSup.email}`}>{techSup.email}</Link>,
            телефон&nbsp;
            <Link href={`tel:${techSup.phone}`}>
              {formatPhoneToView(techSup.phone)}
            </Link>
          </Typography>
        </div>
      }
      imgAlt="Непредвиденная ошибка"
      imgSrc={imagesMap.defaultErrorImgSrc}
      imgWidth="324px"
      imgHeight="162px"
      Actions={
        <Button onClick={handleRefreshButtonClick}>Обновить страницу</Button>
      }
    />
  );
};
