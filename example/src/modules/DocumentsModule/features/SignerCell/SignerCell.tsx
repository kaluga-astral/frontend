import { Typography } from '@example/shared/ui';

type Props = {
  person?: string;
  organization?: string;
};

export const SignerCell = ({ person, organization }: Props) => (
  <>
    <Typography>{person}</Typography>
    <Typography variant="small" color="grey" colorIntensity="600">
      {organization}
    </Typography>
  </>
);
