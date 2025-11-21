"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, FileText, XCircle, LoaderCircleIcon } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function UploadPdfDialog({ children }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  
  const shortenFileName = (name) => {
    if (!name) return "";
    if (name.length <= 20) return name;

    const ext = name.split(".").pop();
    const base = name.slice(0, 20);

    return `${base}...${ext}`;
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setFileName(selected.name.replace(".pdf", ""));
  };

  const removeFile = () => {
    setFile(null);
    setFileName("");
  };

  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);

  const onUpload = async () => {
    setLoading(true);
    const postUrl = await generateUploadUrl();

    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
    });
    const { storageId } = await result.json();

    console.log(storageId);
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="
          bg-white dark:bg-gray-900
          border border-gray-300 dark:border-gray-700
          shadow-xl rounded-xl
          transition-all duration-300
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Choose a PDF File to Upload
          </DialogTitle>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upload your PDF and give it a name.
          </p>
        </DialogHeader>

        <div className="mt-6 flex flex-col gap-6">
          {/* Upload Box */}
          <div
            className="
              p-5 rounded-xl border-2
              bg-gray-100 dark:bg-gray-950
              border-gray-300 dark:border-gray-800
            "
          >
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Select a file to upload
            </h2>

            <label
              htmlFor="filePDF"
              className="
                mt-3 inline-flex items-center gap-2 cursor-pointer
                px-4 py-2 rounded-lg text-sm font-medium
                bg-slate-700 hover:bg-slate-800 text-white
                dark:bg-purple-500 dark:hover:bg-purple-600
                shadow-md shadow-blue-600/20 
                active:scale-[0.97]
                transition-all duration-300
              "
            >
              <Upload className="w-5 h-5" />
              Choose PDF
            </label>

            <input
              id="filePDF"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* File Preview */}
            {file && (
              <div
                className="
                  mt-4 flex items-center justify-between p-3 rounded-lg
                  bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                "
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-purple-400" />

                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {shortenFileName(file.name)}
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>

                <button onClick={removeFile}>
                  <XCircle className="w-6 h-6 text-red-500 hover:text-red-600 transition" />
                </button>
              </div>
            )}
          </div>

          {/* File Name Input */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              File Name
            </label>

            <Input
              placeholder="Enter file name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="
                bg-gray-100 dark:bg-gray-800
                border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-gray-100
              "
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button type="submit" disabled={!file} onClick={onUpload}>
            {loading ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              "Upload"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
