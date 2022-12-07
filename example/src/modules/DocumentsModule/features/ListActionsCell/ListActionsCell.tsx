import { useMemo } from 'react';

import {
  ActionCell,
  ArchiveOutlineMd,
  BaseButtonProps,
  BlockOutlineMd,
  CheckOutlineMd,
  DownloadIcon,
  useAllowedActions,
} from '@example/shared';

import {
  DocumentPackagesDTO,
  PossibleOperationOnDocumentPackage,
} from '../../data';

type Props<T> = {
  row: T;
  ArchiveButtonProps?: BaseButtonProps;
  DownloadArchiveButtonProps?: BaseButtonProps;
  ProcessButtonProps?: BaseButtonProps;
  RejectButtonProps?: BaseButtonProps;
};

export const ListActionsCell = (props: Props<DocumentPackagesDTO>) => {
  const {
    row,
    ArchiveButtonProps,
    DownloadArchiveButtonProps,
    ProcessButtonProps,
    RejectButtonProps,
  } = props;

  const possibleActions = useMemo(
    () => ({
      [PossibleOperationOnDocumentPackage.CanArchive]: {
        ...ArchiveButtonProps,
        icon: <ArchiveOutlineMd />,
        name: 'Переместить в архив',
      },
      [PossibleOperationOnDocumentPackage.CanDownloadArchive]: {
        ...DownloadArchiveButtonProps,
        icon: <DownloadIcon />,
        name: 'Скачать документ',
      },
      [PossibleOperationOnDocumentPackage.CanProcess]: {
        ...ProcessButtonProps,
        icon: <CheckOutlineMd />,
        name: 'Подписать и отправить документ',
      },
      [PossibleOperationOnDocumentPackage.CanReject]: {
        ...RejectButtonProps,
        icon: <BlockOutlineMd />,
        name: 'Отклонить',
      },
      [PossibleOperationOnDocumentPackage.None]: {
        icon: null,
        name: '',
        onClick: () => {},
      },
    }),
    [
      ArchiveButtonProps,
      DownloadArchiveButtonProps,
      ProcessButtonProps,
      RejectButtonProps,
    ],
  );

  const actions = useAllowedActions({
    allowedActions: row.allowedActions,
    possibleActions,
  });

  return (
    <ActionCell
      row={row}
      tooltipPlacement="bottom-end"
      actions={{
        main: actions,
      }}
    />
  );
};
