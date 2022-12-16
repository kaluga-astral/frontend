import { styled } from '../../styles';

type CaseWrapperProps = {
  fullWidth: boolean;
};

export const CaseWrapper = styled.div<CaseWrapperProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '70%')};
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const CaseContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(8, 0)};

  background: ${({ theme }) => theme.palette.background.element};
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: ${({ theme }) => theme.shape.small};
`;
