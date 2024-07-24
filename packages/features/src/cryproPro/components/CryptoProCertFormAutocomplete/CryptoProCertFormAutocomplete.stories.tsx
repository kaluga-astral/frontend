import { type Certificate } from '@astral/cryptopro-cades';
import { Form, useForm } from '@astral/ui';
import { type StoryFn } from '@storybook/react';
import { useState } from 'react';

import { CryptoProCertificateService } from '../../services';

import { CryptoProCertFormAutocomplete } from './CryptoProCertFormAutocomplete';

export default {
  title: 'Features/CryptoProCertFormAutocomplete',
  component: null,
};

type FormValues = {
  autocomplete: Certificate[];
};

const Template: StoryFn = () => {
  const [certificateList, setCertificateList] = useState([] as Certificate[]);

  const form = useForm<FormValues>({
    defaultValues: { autocomplete: undefined },
  });

  const cryptoProCertificateService = new CryptoProCertificateService();

  cryptoProCertificateService
    .getCertificateList()
    .then((result) => setCertificateList(result));

  return (
    <Form form={form} onSubmit={() => {}}>
      <CryptoProCertFormAutocomplete
        options={certificateList}
        control={form.control}
        name="autocomplete"
        getOptionLabel={(option) => option.subject.commonName as string}
      />
    </Form>
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
