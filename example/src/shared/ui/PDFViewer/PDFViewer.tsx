import { PdfViewerContainer, PdfViewerObject } from './styles';

type Props = {
  data: string;
};

export const PDFViewer = ({ data }: Props) => {
  const disabledToolbarParams = '#toolbar=0&navpanes=0';

  return (
    <PdfViewerContainer>
      <PdfViewerObject
        type="application/pdf"
        aria-label="Просмотр PDF"
        data={data + disabledToolbarParams}
      />
    </PdfViewerContainer>
  );
};
