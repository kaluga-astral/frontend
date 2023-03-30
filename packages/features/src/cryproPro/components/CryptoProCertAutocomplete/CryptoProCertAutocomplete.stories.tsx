import { Certificate } from '@astral/cryptopro-cades';
import { Form, useForm } from '@astral/ui';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { CryptoProCertificateService } from '../../services';

import { CryptoProCertAutocomplete } from './CryptoProCertAutocomplete';

export default {
  title: 'Features/CryptoProCertAutocomplete',
  component: null,
};

type FormValues = {
  autocomplete: Certificate[];
};

const Template: Story = () => {
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
      <CryptoProCertAutocomplete
        options={certificateList}
        name="autocomplete"
        getOptionLabel={(option) => option.subject.commonName as string}
      />
    </Form>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
