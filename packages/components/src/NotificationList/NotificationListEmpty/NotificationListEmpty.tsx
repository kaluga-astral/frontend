import { Typography } from '../../Typography';

import { Container, Image } from './styles';

export const NotificationListEmpty = ({
  isUnreadOnly,
  noDataImgSrc,
}: {
  isUnreadOnly?: boolean;
  noDataImgSrc?: string;
}) => {
  return (
    <Container>
      {noDataImgSrc && <Image src={noDataImgSrc} alt="Нет уведомлений" />}
      <Typography>{`У вас пока нет ${
        isUnreadOnly ? 'новых' : ''
      } уведомлений`}</Typography>
    </Container>
  );
};
