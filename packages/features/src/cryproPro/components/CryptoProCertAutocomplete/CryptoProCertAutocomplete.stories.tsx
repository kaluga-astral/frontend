import { type Certificate } from '@astral/cryptopro-cades';
import { type StoryFn } from '@storybook/react';
import { useState } from 'react';

import { CryptoProCertificateService } from '../../services';

import { CryptoProCertAutocomplete } from './CryptoProCertAutocomplete';

export default {
  title: 'Features/CryptoProCertAutocomplete',
  component: null,
};

const Template: StoryFn = () => {
  const [certificateList, setCertificateList] = useState([] as Certificate[]);

  const cryptoProCertificateService = new CryptoProCertificateService();

  cryptoProCertificateService
    .getCertificateList()
    .then((result) => setCertificateList(result));

  return (
    <CryptoProCertAutocomplete
      options={certificateList}
      getOptionLabel={(option) =>
        (option as Certificate).subject.commonName as string
      }
    />
  );
};

/**
 * **❗️❗️❗️ Компонент больше не поддерживается. Используйте [@astral-private/crypto](https://cryptodocs.astralnalog.ru/)**
 */
export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
