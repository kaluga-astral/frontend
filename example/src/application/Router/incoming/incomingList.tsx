import { DocumentsIncomingListScreen } from '@example/screens';
import { APP_ROUTES, useNavigate } from '@example/shared';

const DocumentsIncomingListPage = () => {
  const navigate = useNavigate();

  const handleRedirectToUnsignedDocument = ({
    documentPackageId,
  }: {
    documentPackageId: string;
  }) => {
    navigate(
      APP_ROUTES.documents.incomingCard.getRedirectPath(documentPackageId),
    );
  };

  return (
    <DocumentsIncomingListScreen
      handleRedirectToUnsignedDocument={handleRedirectToUnsignedDocument}
    />
  );
};

export default DocumentsIncomingListPage;
