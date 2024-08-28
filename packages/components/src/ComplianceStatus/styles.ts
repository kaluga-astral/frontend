import { CloseFillSm, DotOutlineSm, SuccessFillSm } from '@astral/icons';

import { styled } from '../styles';

export const Wrapper = styled('article')<{ $background: 'grey' | 'primary' }>`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(3)};

  padding: ${({ theme }) => theme.spacing(3, 6)};

  background-color: ${({ theme, $background }) =>
    theme.palette[$background][100]};
  border-radius: ${({ theme }) => theme.shape.small};
`;

export const Inner = styled('ul')`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(3)};

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const Item = styled('li')`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: auto 1fr;
`;

const DefaultIcon = styled.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;
  margin-top: ${({ theme }) => theme.spacing(0.5)};
`;

export const EmptyIcon = styled(DefaultIcon)`
  color: ${({ theme }) => theme.palette.grey[800]};
`.withComponent(DotOutlineSm);

export const RejectIcon = styled(DefaultIcon)`
  color: ${({ theme }) => theme.palette.error[900]};
`.withComponent(CloseFillSm);

export const SuccessIcon = styled(DefaultIcon)`
  color: ${({ theme }) => theme.palette.success[900]};
`.withComponent(SuccessFillSm);
