import { notify } from '@astral/ui';
import {
  type ICryptoError,
  type ISystemInfo,
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

/**
 * @description Сервис для настройки рабочего места
 * */
export class WorkspaceSetupService {
  /**
   * @description Флаг установки плагина КриптоПро
   * */
  public isPluginInstalled = false;

  /**
   * @description Версия криптопровайдера КриптоПро
   * */
  public cspVersion: string | null = null;

  /**
   * @description Флаг наличия ошибок
   * */
  public hasErrors = false;

  /**
   * @description Флаг установки криптопровайдера КриптоПро
   * */
  private hasCryptoProvider = false;

  private static instance: WorkspaceSetupService | null = null;

  /**
   * @description Флаг выполнения проверки рабочего места
   * */
  public isLoading = false;

  constructor() {
    // делаем из класса singleton
    if (WorkspaceSetupService.instance) {
      return WorkspaceSetupService.instance;
    }

    WorkspaceSetupService.instance = this;
  }

  /**
   * @description Метод проверки состояния рабочего места
   * */
  public checkWorkspace = async (): Promise<CheckWorkspace> => {
    this.isLoading = true;

    let resultInfo: ISystemInfo = {} as ISystemInfo;

    try {
      resultInfo = await getSystemInfo();
      this.isPluginInstalled = true;
    } catch (error) {
      const pluginError = error as ICryptoError;

      this.isPluginInstalled = true;

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

  /**
   * @description Метод сброса ошибок
   * */
  public resetErrors = () => {
    this.hasErrors = false;
  };
}

export const createWorkspaceSetupService = () => new WorkspaceSetupService();
