import { notify } from '@astral/components';
import { ICryptoError, getSystemInfo } from '@astral/cryptopro-cades';

import {
  CRYPTO_PROVIDER_NOT_FOUND_CODE,
  PLUGIN_NOT_INITIALIZED_CODE,
  PLUGIN_NOT_INSTALLED_CODE,
} from '../../constants';

export type CheckWorkspace = {
  isPluginInstalled: boolean;
  hasCryptoProvider: boolean;
  cspVersion: string | null;
  hasErrors: boolean;
};

export class WorkspaceSetupStore {
  public isPluginInstalled = false;

  public cspVersion: string | null = null;

  public hasErrors = false;

  private hasCryptoProvider = false;

  private static instance: WorkspaceSetupStore | null = null;

  public isLoading = false;

  constructor() {
    // делаем из класса singleton
    if (WorkspaceSetupStore.instance) {
      return WorkspaceSetupStore.instance;
    }

    WorkspaceSetupStore.instance = this;
  }

  public checkWorkspace = async (): Promise<CheckWorkspace> => {
    this.isLoading = true;

    const resultInfo = await getSystemInfo();

    try {
      await getSystemInfo();
    } catch (error) {
      const pluginError = error as ICryptoError;

      switch (pluginError.code) {
        case PLUGIN_NOT_INSTALLED_CODE:
        case PLUGIN_NOT_INITIALIZED_CODE: {
          this.isPluginInstalled = false;

          throw error;
        }
        case CRYPTO_PROVIDER_NOT_FOUND_CODE: {
          this.hasCryptoProvider = false;

          throw error;
        }
        default: {
          notify.error(pluginError.message);
        }
      }
    } finally {
      this.isPluginInstalled = resultInfo.cryptoProInstalled;
      this.hasCryptoProvider = Boolean(resultInfo.cryptoProviderName?.length);
      this.cspVersion = resultInfo.cspVersion;
      this.hasErrors = !(this.isPluginInstalled && this.hasCryptoProvider);
      this.isLoading = false;
    }

    return {
      isPluginInstalled: this.isPluginInstalled,
      hasCryptoProvider: this.hasCryptoProvider,
      cspVersion: this.cspVersion,
      hasErrors: this.hasErrors,
    };
  };

  public resetErrors = () => {
    this.hasErrors = false;
  };
}

export const createWorkspaceSetupStore = () => new WorkspaceSetupStore();
