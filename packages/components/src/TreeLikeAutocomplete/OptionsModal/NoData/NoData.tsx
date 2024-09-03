import { Typography } from '../../../Typography';

import { Wrapper } from './styles';

export const NoData = () => {
  return (
    <Wrapper>
      <Typography color="textSecondary">
        По введенному запросу ничего не найдено
      </Typography>
    </Wrapper>
  );
};
