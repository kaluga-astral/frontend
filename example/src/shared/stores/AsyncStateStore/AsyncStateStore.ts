import { makeAutoObservable } from 'mobx';

export type AsyncState = {
  isLoading: boolean;
  errorMessage?: string;
  isSuccess: boolean;
};

export class AsyncStateStore {
  public state: AsyncState = {
    isLoading: true,
    isSuccess: false,
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public start = () => {
    this.state = {
      isLoading: true,
      isSuccess: false,
    };
  };

  public success = () => {
    this.state = {
      isLoading: false,
      isSuccess: true,
    };
  };

  public fail = (errorMessage: string) => {
    this.state = {
      isLoading: false,
      isSuccess: false,
      errorMessage,
    };
  };
}

export const createAsyncStateStore = () => new AsyncStateStore();
