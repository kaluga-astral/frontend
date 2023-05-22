import { styled } from '../styles';

export const DescriptionWrapper = styled.div<{
  justifyContent?: 'space-between' | 'start';
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;

    .MuiTypography-root {
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;

export const DescriptionDashedSeparator = styled.div`
  flex: 1;
  height: 4px;
  margin-left: ${({ theme }) => theme.spacing(2)};

  border-bottom: 1px dashed ${({ theme }) => theme.palette.grey[400]};
`;
