import { useContext } from 'react';
import { Link } from '@mui/material';
import { formatPhoneToView } from '@astral/utils';

import { Button } from '../Button';
import { Placeholder } from '../Placeholder';
import { ConfigContext } from '../ConfigProvider';
import { Typography } from '../Typography';

export const InternalErrorPlaceholder = () => {
  const { imagesMap, techSup } = useContext(ConfigContext);

  const handleClickRefresh = () => {
    location.reload();
  };

  return (
    <Placeholder
      title="Произошла непредвиденная ошибка"
      description={
        <div>
          <Typography>
            Пожалуйста, попробуйте обновить страницу или обратитесь в
            техническую поддержку:
          </Typography>
          <Typography>
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
      Actions={<Button onClick={handleClickRefresh}>Обновить страницу</Button>}
    />
  );
};
