import { notify } from '@astral/ui';
import {
  ICryptoError,
  ISystemInfo,
  getSystemInfo,
} from '@astral/cryptopro-cades';

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

export class WorkspaceSetupService {
  public isPluginInstalled = false;

  public cspVersion: string | null = null;

  public hasErrors = false;

  private hasCryptoProvider = false;

  private static instance: WorkspaceSetupService | null = null;

  public isLoading = false;

  constructor() {
    // делаем из класса singleton
    if (WorkspaceSetupService.instance) {
      return WorkspaceSetupService.instance;
    }

    WorkspaceSetupService.instance = this;
  }

  public checkWorkspace = async (): Promise<CheckWorkspace> => {
    this.isLoading = true;

    let resultInfo: ISystemInfo = {} as ISystemInfo;

    try {
      resultInfo = await getSystemInfo();
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

export const createWorkspaceSetupService = () => new WorkspaceSetupService();
