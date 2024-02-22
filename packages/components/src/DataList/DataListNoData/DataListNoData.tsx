import { useContext } from 'react';

import { ConfigContext, type ConfigContextProps } from '../../ConfigProvider';
import { Placeholder } from '../../Placeholder';

import { NO_DATA_TEXT } from './constants';

export const DataListNoData = () => {
  const { imagesMap } = useContext<ConfigContextProps>(ConfigContext);
  const { noDataImgSrc } = imagesMap;

  return <Placeholder title={NO_DATA_TEXT} imgSrc={noDataImgSrc} />;
};
