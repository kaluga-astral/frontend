import { Divider } from '../../Divider';
import { styled } from '../../styles';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.palette.grey['100']};
  opacity: 0.6;
`;

export const StyledDivider = styled(Divider)`
  border-width: 1px;
`;

export const LoaderWrapper = styled.div`
  height: 2px;
`;
