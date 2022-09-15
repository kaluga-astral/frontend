import NoData from '@astral/illustrations/src/no-data.svg';

import {
  DataGridNoDataIcon,
  DataGridNoDataTitle,
  DataGridNoDataWrapper,
  StyledDataGridNoData,
} from './styles';

export type DataGridNoDataProps = {
  title?: string;
  loading?: boolean;
};

export const DataGridNoData = ({ title, loading }: DataGridNoDataProps) => {
  return !loading ? (
    <DataGridNoDataWrapper>
      <StyledDataGridNoData>
        <DataGridNoDataIcon src={NoData} alt={title} />

        <DataGridNoDataTitle variant="h4">{title}</DataGridNoDataTitle>
      </StyledDataGridNoData>
    </DataGridNoDataWrapper>
  ) : null;
};
