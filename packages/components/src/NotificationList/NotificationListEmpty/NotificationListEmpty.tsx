import { Typography } from '../../Typography';
import { type NotificationListType } from '../types';

import { EmptyImage, Wrapper } from './styles';

type NotificationListEmptyProps = {
  listType?: NotificationListType;
  noDataImgSrc: string;
};

export const NotificationListEmpty = ({
  listType,
  noDataImgSrc,
}: NotificationListEmptyProps) => {
  return (
    <Wrapper>
      <EmptyImage src={noDataImgSrc} alt="" />
      <Typography>{`У вас пока нет ${
        listType === 'unread' ? 'новых' : ''
      } уведомлений`}</Typography>
    </Wrapper>
  );
};
