import React from 'react';
import { FileText, Upload, Download, Trash2, Share2, Eye, PenTool } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

const documents = [
  {
    id: 1,
    name: 'Pitch Deck 2024.pdf',
    type: 'PDF',
    size: '2.4 MB',
    lastModified: '2024-02-15',
    shared: true,
    status: 'Draft'
  },
  {
    id: 2,
    name: 'Financial Projections.xlsx',
    type: 'Spreadsheet',
    size: '1.8 MB',
    lastModified: '2024-02-10',
    shared: false,
    status: 'In Review'
  },
  {
    id: 3,
    name: 'Business Plan.docx',
    type: 'Document',
    size: '3.2 MB',
    lastModified: '2024-02-05',
    shared: true,
    status: 'Signed'
  },
  {
    id: 4,
    name: 'Market Research.pdf',
    type: 'PDF',
    size: '5.1 MB',
    lastModified: '2024-01-28',
    shared: false,
    status: 'Draft'
  }
];

export const DocumentsPage: React.FC = () => {

  const [previewFile, setPreviewFile] = React.useState<string | null>(null);
  const [showSign, setShowSign] = React.useState(false);

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600">Manage your startup's important files</p>
        </div>

        <Button leftIcon={<Upload size={18} />}>
          Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Storage */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <h2 className="text-lg font-medium text-gray-900">Storage</h2>
          </CardHeader>

          <CardBody className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Used</span>
                <span className="font-medium">12.5 GB</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-primary-600 rounded-full w-[65%]"></div>
              </div>

              <div className="flex justify-between text-sm">
                <span>Available</span>
                <span className="font-medium">7.5 GB</span>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Documents List */}
        <div className="lg:col-span-3">
          <Card>

            <CardHeader className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">All Documents</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Sort</Button>
                <Button variant="outline" size="sm">Filter</Button>
              </div>
            </CardHeader>

            <CardBody>
              <div className="space-y-2">

                {documents.map(doc => (
                  <div
                    key={doc.id}
                    className="flex items-center p-4 hover:bg-gray-50 rounded-lg"
                  >

                    {/* Icon */}
                    <div className="p-2 bg-primary-50 rounded-lg mr-4">
                      <FileText size={24} className="text-primary-600" />
                    </div>

                    {/* Info */}
                    <div className="flex-1">

                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-medium text-gray-900">
                          {doc.name}
                        </h3>

                        {doc.shared && (
                          <Badge variant="secondary" size="sm">Shared</Badge>
                        )}

                        {/* STATUS */}
                        <Badge
                          size="sm"
                          className={
                            doc.status === 'Draft'
                              ? 'bg-yellow-100 text-yellow-700'
                              : doc.status === 'In Review'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }
                        >
                          {doc.status}
                        </Badge>

                      </div>

                      <div className="text-sm text-gray-500 mt-1 flex gap-4">
                        <span>{doc.type}</span>
                        <span>{doc.size}</span>
                        <span>Modified {doc.lastModified}</span>
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">

                      {/* Preview */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setPreviewFile(doc.name)}
                      >
                        <Eye size={18} />
                      </Button>

                      {/* Sign */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowSign(true)}
                      >
                        <PenTool size={18} />
                      </Button>

                      <Button variant="ghost" size="sm">
                        <Download size={18} />
                      </Button>

                      <Button variant="ghost" size="sm">
                        <Share2 size={18} />
                      </Button>

                      <Button variant="ghost" size="sm" className="text-red-500">
                        <Trash2 size={18} />
                      </Button>

                    </div>

                  </div>
                ))}

              </div>
            </CardBody>

          </Card>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {previewFile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 h-3/4 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              Preview: {previewFile}
            </h2>

            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Document Preview (Mock)
            </div>

            <button
              onClick={() => setPreviewFile(null)}
              className="mt-2 text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SIGN MODAL */}
      {showSign && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">

            <h2 className="text-lg font-semibold mb-4">
              E-Sign Document
            </h2>

            <div className="border h-32 flex items-center justify-center text-gray-400">
              Signature Pad (Mock)
            </div>

            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Confirm Signature
            </button>

            <button
              onClick={() => setShowSign(false)}
              className="mt-2 text-red-500"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
};