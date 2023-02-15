import { DocumentsSentListScreen } from '@example/screens';
import { APP_ROUTES, useNavigate } from '@example/shared';

const DocumentsSentListPage = () => {
  const navigate = useNavigate();

  const handleRedirectToSignedDocument = ({
    documentPackageId,
  }: {
    documentPackageId: string;
  }) => {
    navigate(APP_ROUTES.documents.sentCard.getRedirectPath(documentPackageId));
  };

  return (
    <DocumentsSentListScreen
      handleRedirectToSignedDocument={handleRedirectToSignedDocument}
    />
  );
};

export default DocumentsSentListPage;
