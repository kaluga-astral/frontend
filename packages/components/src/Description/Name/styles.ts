import { styled } from '../../styles';

export const Wrapper = styled.div`
  flex-shrink: 0;

  max-width: 93%;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const DashedSeparator = styled.div`
  flex: 1;

  min-width: 12px;
  height: 4px;
  margin-right: ${({ theme }) => theme.spacing(2)};

  border-bottom: 1px dashed ${({ theme }) => theme.palette.grey[400]};
`;
