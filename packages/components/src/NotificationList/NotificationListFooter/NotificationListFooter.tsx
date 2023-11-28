import { Button } from '../../Button';
import { Tooltip } from '../../Tooltip';

import { Footer } from './styles';

type NotificationListFooterProps = {
  onReadAllButtonClick?: () => void;
  isReadAllButtonDisabled?: boolean;
};

export const NotificationListFooter = ({
  onReadAllButtonClick,
  isReadAllButtonDisabled,
}: NotificationListFooterProps) => {
  return (
    <Footer>
      <Tooltip
        title={
          isReadAllButtonDisabled
            ? 'У вас нет непрочитанных уведомлений'
            : undefined
        }
        arrow
        withoutContainer={false}
      >
        <Button
          onClick={onReadAllButtonClick}
          disabled={isReadAllButtonDisabled}
          variant="light"
        >
          Отметить все как прочитанные
        </Button>
      </Tooltip>
    </Footer>
  );
};
