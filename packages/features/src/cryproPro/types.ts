import type { Certificate as CertificateCades } from '@astral/cryptopro-cades';

/**
 * @deprecated Используйте пакет @astral-private/crypto https://cryptodocs.astralnalog.ru/
 * Причина отказа от поддержки: поддержка функционала теперь осуществляется централизовано командой Астрал-Софт в закрытом контуре.
 */
export type Certificate = CertificateCades;

export type FileData = ArrayBuffer | string;
