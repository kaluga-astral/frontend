import { Typography } from '../../Typography';

import { Container, Image } from './styles';

type NotificationListEmptyProps = {
  isUnreadOnly?: boolean;
  noDataImgSrc?: string;
};

export const NotificationListEmpty = ({
  isUnreadOnly,
  noDataImgSrc,
}: NotificationListEmptyProps) => {
  return (
    <Container>
      {noDataImgSrc && <Image src={noDataImgSrc} alt="Нет уведомлений" />}
      <Typography>{`У вас пока нет ${
        isUnreadOnly ? 'новых' : ''
      } уведомлений`}</Typography>
    </Container>
  );
};
