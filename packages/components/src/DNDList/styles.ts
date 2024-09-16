import { styled } from '../styles';

export const ListItem = styled.li`
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  font-size: 30px;
  color: #cdd5ee;

  background: #333851;
  border: 4px solid mediumpurple;
  border-radius: 8px;
  box-shadow:
    0 0 2px rgb(8 58 30),
    0 0 10px MediumSeaGreen;
`;

export const HeightPreserving = styled.div`
  box-sizing: border-box;
  min-height: calc(var(--child-height));
  padding-bottom: 8px;
`;
