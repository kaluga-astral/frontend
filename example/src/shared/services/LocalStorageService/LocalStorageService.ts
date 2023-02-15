const notSupportedError = Error('localStorage is not supported');

export class LocalStorageService {
  private readonly storage: Storage | undefined;

  constructor() {
    this.storage =
      typeof window !== 'undefined' ? window.localStorage : undefined;
  }

  public setItemSync = (key: string, value: string): void => {
    if (!this.storage) {
      throw notSupportedError;
    }

    this.storage.setItem(key, value);
  };

  public setItem = async (key: string, value: string): Promise<void> =>
    this.setItemSync(key, value);

  public optimisticSetItem = (key: string, value: string): void => {
    try {
      this.setItemSync(key, value);
    } catch (err) {
      console.error(err);
    }
  };

  public getItemSync = (key: string): string | null => {
    if (!this.storage) {
      throw notSupportedError;
    }

    return this.storage.getItem(key);
  };

  public getItem = (key: string): Promise<string | null> =>
    new Promise(() => this.getItemSync(key));

  public optimisticGetItem = (key: string): string | null => {
    let value = null;

    try {
      value = this.getItemSync(key);
    } catch (err) {
      console.error(err);
    }

    return value;
  };
}

export const localStorageService = new LocalStorageService();
