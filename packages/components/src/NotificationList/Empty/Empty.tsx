import { Typography } from '../../Typography';
import { type NotificationListType } from '../types';

import { EmptyImage, Wrapper } from './styles';

type Props = {
  listType?: NotificationListType;
  noDataImgSrc: string;
};

export const Empty = ({ listType, noDataImgSrc }: Props) => {
  return (
    <Wrapper>
      <EmptyImage src={noDataImgSrc} alt="" />
      <Typography>{`У вас пока нет ${
        listType === 'unread' ? 'новых' : ''
      } уведомлений`}</Typography>
    </Wrapper>
  );
};
