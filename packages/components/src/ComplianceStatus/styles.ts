import { CloseFillSm, SuccessFillSm } from '@astral/icons';

import { styled } from '../styles';

export const Wrapper = styled('article')`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(3)};

  padding: ${({ theme }) => theme.spacing(3, 6)};

  background-color: ${({ theme }) => theme.palette.primary[100]};
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

const ICON_SIZE = `
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
`;

export const EmptyIcon = styled('div')`
  position: relative;

  color: ${({ theme }) => theme.palette.grey[300]};
  ${ICON_SIZE}

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: block;

    min-width: calc(100% - 4px);
    min-height: calc(100% - 4px);

    background-color: currentColor;
    border-radius: 50%;
  }
`;

export const RejectIcon = styled(CloseFillSm)`
  color: ${({ theme }) => theme.palette.error[900]};
  ${ICON_SIZE}
`;

export const SuccessIcon = styled(SuccessFillSm)`
  color: ${({ theme }) => theme.palette.success[900]};
  ${ICON_SIZE}
`;
