import { Typography } from '../../Typography';
import { type NotificationListType } from '../types';

import {
  NotificationListEmptyContainer,
  NotificationListEmptyImage,
} from './styles';

type NotificationListEmptyProps = {
  listType?: NotificationListType;
  noDataImgSrc: string;
};

export const NotificationListEmpty = ({
  listType,
  noDataImgSrc,
}: NotificationListEmptyProps) => {
  return (
    <NotificationListEmptyContainer>
      <NotificationListEmptyImage src={noDataImgSrc} alt="" />
      <Typography>{`У вас пока нет ${
        listType === 'unread' ? 'новых' : ''
      } уведомлений`}</Typography>
    </NotificationListEmptyContainer>
  );
};
