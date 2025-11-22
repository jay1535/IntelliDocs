import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf"


const PDFUrl = 'https://fortunate-avocet-422.convex.cloud/api/storage/0f9060d2-c486-4861-8f7d-833b6953224e'
export async function GET(req) {
    const resp = await fetch(PDFUrl);
    const data = await resp.blob();
    const loader = new WebPDFLoader(data);
    const docs = await loader.load();

    let pdfTextContent = "";
    docs.forEach(doc=>{
        pdfTextContent = pdfTextContent + doc.pageContent; 
    })
    return NextResponse.json({result: pdfTextContent})
}