import { DataError } from '../DataError';

export class ApiDataError extends DataError<{
  errorCustomField?: string;
}> {}
