import { makeAutoObservable } from 'mobx';

import { HttpService, UNAUTHORIZED_HTTP_CODE } from '@example/shared';

export class AuthStore {
  public isAuthored: boolean = false;

  private accessToken: string | undefined;

  private protectedHttpClients: HttpService[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public signIn = (accessToken: string) => {
    this.isAuthored = true;
    this.accessToken = accessToken;
    this.initHttpClients();
  };

  public addProtectedHttpClients = (clients: HttpService[]) => {
    this.protectedHttpClients = clients;
  };

  private initHttpClients = () => {
    this.protectedHttpClients.forEach((client) => {
      client.subscribeOnError((error) => {
        if (Number(error.code) === UNAUTHORIZED_HTTP_CODE) {
          window.location.href = (
            error.response?.data as { redirectUrl: string }
          ).redirectUrl;
        }
      });
    });
  };
}

export const authStore = new AuthStore();
