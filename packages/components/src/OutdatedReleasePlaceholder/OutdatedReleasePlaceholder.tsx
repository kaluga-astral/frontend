import { useContext } from 'react';

import { Button } from '../Button';
import { Placeholder } from '../Placeholder';
import { ConfigContext } from '../ConfigProvider';
import { Typography } from '../Typography';

export const OutdatedReleasePlaceholder = () => {
  const { imagesMap } = useContext(ConfigContext);

  const handleClickRefresh = () => {
    location.reload();
  };

  return (
    <Placeholder
      title="Обновление в сервисе"
      description={
        <Typography component="p">
          Наши специалисты работают над улучшением качества продукта. Для
          загрузки обновлений, пожалуйста, обновите страницу.
        </Typography>
      }
      imgAlt="Обновление в сервисе"
      imgSrc={imagesMap.outdatedReleaseErrorImgSrc}
      imgWidth="324px"
      Actions={<Button onClick={handleClickRefresh}>Обновить страницу</Button>}
    />
  );
};
