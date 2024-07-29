import { Checkbox } from '../../Checkbox';
import { TREE_ITEM_NOTE_CLASSNAME, TreeItem } from '../../Tree';
import { styled } from '../../styles';
import { listContainer } from '../../styles/mixins';

export const StyledCheckbox = styled(Checkbox)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTreeItem = styled(TreeItem)`
  .${TREE_ITEM_NOTE_CLASSNAME} {
    /* cSpell:ignore чекбоксом */

    /* Добавляем к отступу ширину контейнера с чекбоксом */
    margin-left: ${({ theme }) => `calc(${theme.spacing(1)} + 32px)`};
  }
`;

export const List = styled.ul`
  ${listContainer};
`;
