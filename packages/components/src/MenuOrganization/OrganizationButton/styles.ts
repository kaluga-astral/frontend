import { Button } from '../../Button';
import { styled } from '../../styles/styled';

export const OrganizationBtn = styled(Button)`
  display: flex;
  align-items: center;

  width: 270px;
  height: auto;
  padding: ${({ theme }) => theme.spacing(1)};

  text-align: left;
`;
