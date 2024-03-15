import { styled } from '../../styles';

export const Container = styled.span`
  /*
    Переопределяем св-во, так как данный параметр влияет на доступность элемента,
    в результате чего имеем проблемы с отображением tooltip и прохождением тестов
  */
  pointer-events: auto !important;
`;
