import { Certificate } from '@astral/cryptopro-cades';
import {
  Dialog,
  DialogContent,
  FormControlLabel,
  Switch,
  Typography,
} from '@astral/ui';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { CryptoProCertAutocomplete } from '..';
import { CheckWorkspace } from '../../services';
import { CryptoProStore } from '../../stores/CryptoProStore';

import { CryptoProProvider } from './CryptoProProvider';

export default {
  title: 'Features/CryptoProProvider',
  component: null,
};

const Template: Story = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [cryptoProStore] = useState(new CryptoProStore());
  const [workspaceSetupInfo, setWorkspaceSetupInfo] = useState(
    {} as CheckWorkspace,
  );

  const handleChange = () => {
    cryptoProStore.checkWorkspace().then(async (result) => {
      setWorkspaceSetupInfo(result);
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
      <CryptoProProvider
        cryptoProStore={cryptoProStore}
        workspaceSetupInfo={workspaceSetupInfo}
      >
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
