export type DataErrorItem<AdditionalInfo extends Record<string, unknown>> = {
  message: string;
  additionalInfo: AdditionalInfo;
};

export class DataError<
  AdditionalInfo extends Record<string, unknown>,
> extends Error {
  errors: DataErrorItem<AdditionalInfo>[];

  constructor({ errors }: { errors: DataErrorItem<AdditionalInfo>[] }) {
    super(errors[0].message);
    this.errors = errors;
  }
}
