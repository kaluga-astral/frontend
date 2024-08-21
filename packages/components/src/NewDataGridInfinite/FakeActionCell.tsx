import { useEffect, useMemo, useState } from 'react';
import { BinOutlineMd, SaveOutlineMd } from '@astral/icons';

import { NewActionCell, type NewActionCellProps } from '../NewActionCell';

type FakeActionCellProps<T> = Pick<NewActionCellProps<T>, 'row'>;

export const FakeActionCell = <Action,>({
  row,
}: FakeActionCellProps<Action>) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleDelete = () => {
    setIsDeleting((prevState) => !prevState);
  };

  const handleSave = () => {
    setIsSaving((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDeleting) {
      setTimeout(() => handleDelete(), 1500);
    }

    if (isSaving) {
      setTimeout(() => handleSave(), 1500);
    }
  }, [isDeleting, isSaving]);

  const fakeActions = useMemo(
    () => ({
      main: [
        {
          icon: <BinOutlineMd />,
          name: 'Удалить',
          onClick: handleDelete,
          loading: isDeleting,
          isBlockingOperation: true,
          loadingNote: 'Происходит удаление элемента',
        },
        {
          icon: <SaveOutlineMd />,
          name: 'Сохранить',
          loading: isSaving,
          onClick: handleSave,
          loadingNote: 'Происходит сохранение элемента',
        },
      ],
      secondary: [
        { name: 'Редактировать', onClick: () => console.log('secondary 1') },
      ],
    }),
    [isDeleting, isSaving],
  );

  return <NewActionCell actions={fakeActions} row={row} />;
};
