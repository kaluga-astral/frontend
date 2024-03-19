import mailIllustration from '../../../../ui/illustrations/mail.svg';
import { Placeholder } from '../../Placeholder';
import { useTimer } from '../hooks';
import { DURATION_SHOW_SUCCESS_SCREEN_MS } from '../constants';

export const SuccessPlaceholder = () => {
  const timeLeft = useTimer(DURATION_SHOW_SUCCESS_SCREEN_MS / 1000);

  return (
    <Placeholder
      title="Спасибо за ваш отзыв!"
      description={`Окно закроется автоматически через ${timeLeft} сек`}
      imgAlt="Письмо"
      imgSrc={mailIllustration}
      imgWidth="100px"
      imgHeight="100px"
    />
  );
};
