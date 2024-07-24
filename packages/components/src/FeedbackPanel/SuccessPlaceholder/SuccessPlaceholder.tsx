import { useContext } from 'react';

import { ConfigContext, type ConfigContextProps } from '../../ConfigProvider';
import { useTimer } from '../hooks';
import { DURATION_SHOW_SUCCESS_SCREEN_MS } from '../constants';

import { StyledPlaceholder } from './styles';

type Props = {
  imgSrc?: string;
};

export const SuccessPlaceholder = ({ imgSrc }: Props) => {
  const { imagesMap } = useContext<ConfigContextProps>(ConfigContext);
  const { mailImgSrc } = imagesMap;

  const timeLeft = useTimer(DURATION_SHOW_SUCCESS_SCREEN_MS / 1000);

  return (
    <StyledPlaceholder
      title="Спасибо за ваш отзыв!"
      description={`Окно закроется автоматически через ${timeLeft} сек`}
      imgAlt="Письмо"
      imgSrc={imgSrc || mailImgSrc}
      imgWidth="100px"
    />
  );
};
