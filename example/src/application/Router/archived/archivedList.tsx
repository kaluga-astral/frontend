import { DocumentsArchivedListScreen } from '@example/screens';
import { APP_ROUTES, useNavigate } from '@example/shared';

const DocumentsArchivedListPage = () => {
  const navigate = useNavigate();

  const handleRedirectToArchivedDocument = ({
    documentPackageId,
  }: {
    documentPackageId: string;
  }) => {
    navigate(
      APP_ROUTES.documents.archivedCard.getRedirectPath(documentPackageId),
    );
  };

  return (
    <DocumentsArchivedListScreen
      handleRedirectToArchivedDocument={handleRedirectToArchivedDocument}
    />
  );
};

export default DocumentsArchivedListPage;
