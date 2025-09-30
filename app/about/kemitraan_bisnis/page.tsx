import React from "react";
import { FileText, Download } from "lucide-react";

const kemitraanBisnisPage = () => {
    const documents = [
        {
            id: 1,
            title: "Proposal Kemitraan",
            description: "Dokumen berisi penawaran kerjasama bisnis.",
            file: "/docs/proposal-kemitraan.pdf",
        },
        {
            id: 2,
            title: "MOU (Memorandum of Understanding)",
            description: "Dokumen nota kesepahaman antar pihak.",
            file: "/docs/mou.pdf",
        },
        {
            id: 3,
            title: "Perjanjian Kerjasama",
            description: "Dokumen resmi perjanjian kerjasama bisnis.",
            file: "/docs/perjanjian-kerjasama.pdf",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mt-10 pt-20">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Kemitraan Bisnis
            </h1>
            <p className="text-gray-600 mb-8 text-center">
                Berikut adalah dokumen-dokumen yang dapat diakses terkait kemitraan bisnis:
            </p>

            <div className="grid gap-6">
                {documents.map((doc) => (
                    <div
                        key={doc.id}
                        className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-4">
                            <FileText className="w-10 h-10 text-orange-500" />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {doc.title}
                                </h2>
                                <p className="text-sm text-gray-500">{doc.description}</p>
                            </div>
                        </div>
                        <a
                            href={doc.file}
                            download
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            <Download className="w-5 h-5" />
                            Unduh
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default kemitraanBisnisPage;
