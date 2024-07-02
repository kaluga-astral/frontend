import { styled } from '../../styles';

type WrapperProps = {
  $leader?: boolean;
};

export const Wrapper = styled('dt', {
  shouldForwardProp: (prop) => prop !== '$leader',
})<WrapperProps>`
  flex-shrink: 0;

  max-width: ${({ $leader }) =>
    $leader ? 'calc(100% - 36px)' : 'calc(100% - 12px)'};
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const DashedSeparator = styled.div`
  flex: 1;

  min-width: 12px;
  height: 4px;
  margin-right: ${({ theme }) => theme.spacing(2)};

  border-bottom: 1px dashed ${({ theme }) => theme.palette.grey[400]};
`;
