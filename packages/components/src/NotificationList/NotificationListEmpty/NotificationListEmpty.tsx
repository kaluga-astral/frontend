import { Typography } from '../../Typography';

import { Container, Image } from './styles';

type NotificationListEmptyProps = {
  isUnreadOnly?: boolean;
  noDataImgSrc?: string;
  noDataImgAlt?: string;
};

export const NotificationListEmpty = ({
  isUnreadOnly,
  noDataImgSrc,
  noDataImgAlt = 'Нет уведомлений',
}: NotificationListEmptyProps) => {
  return (
    <Container>
      {noDataImgSrc && <Image src={noDataImgSrc} alt={noDataImgAlt} />}
      <Typography>{`У вас пока нет ${
        isUnreadOnly ? 'новых' : ''
      } уведомлений`}</Typography>
    </Container>
  );
};
