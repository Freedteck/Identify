import { useParams } from "react-router-dom";

const DocumentViewer = () => {
  const { fileName } = useParams();

  // You can replace this with actual content fetching logic
  const documentContent = `Content of the document: ${fileName}`;

  return (
    <div>
      <h1>Document Viewer</h1>
      <p>{documentContent}</p>
    </div>
  );
};

export default DocumentViewer;
