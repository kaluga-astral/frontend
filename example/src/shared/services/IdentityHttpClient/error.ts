import { DataError } from '../DataError';

export class IdentityDataError extends DataError<{
  errorCustomField?: string;
}> {}
