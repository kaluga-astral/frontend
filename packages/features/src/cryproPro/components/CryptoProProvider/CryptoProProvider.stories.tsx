import { type Certificate } from '@astral/cryptopro-cades';
import {
  Dialog,
  DialogContent,
  FormControlLabel,
  Switch,
  Typography,
} from '@astral/ui';
import { type StoryFn } from '@storybook/react';
import { useState } from 'react';

import { CryptoProCertAutocomplete } from '..';
import { CryptoProStore } from '../../stores/CryptoProStore';

import { CryptoProProvider } from './CryptoProProvider';

export default {
  title: 'Features/CryptoProProvider',
  component: null,
};

const Template: StoryFn = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [cryptoProStore] = useState(new CryptoProStore());

  const handleChange = () => {
    cryptoProStore.checkWorkspace().then(async () => {
      await cryptoProStore.getCertificateList();
      setIsDialogOpen(true);
    });
  };

  return (
    <>
      <Typography paragraph>
        Демонстрация работы плагина КриптоПро в сочетании с mobx store. В случае
        отсутствия или неактивности КриптоПро browser plug-in или отсутствия
        КриптоПро провайдера на устройстве пользователя - отображается окно
        настройки рабочего места.
      </Typography>
      <FormControlLabel
        control={<Switch checked={isDialogOpen} onChange={handleChange} />}
        label="Показать список сертификатов"
      />
      <CryptoProProvider cryptoProStore={cryptoProStore}>
        <Dialog
          title="Выбор сертификата"
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          fullWidth
        >
          <DialogContent>
            <CryptoProCertAutocomplete
              options={cryptoProStore.certificateList}
              getOptionLabel={(option) =>
                (option as Certificate).subject.commonName as string
              }
            />
          </DialogContent>
        </Dialog>
      </CryptoProProvider>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
