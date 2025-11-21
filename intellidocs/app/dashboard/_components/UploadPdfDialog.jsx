import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function UploadPdfDialog({children}) {
  return (
    <Dialog>
  <DialogTrigger asChild >{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Choose a PDF File to Upload</DialogTitle>
      <DialogDescription asChild>
      <div className="mt-10">
  <div
    className="
      flex flex-col gap-4 p-6 rounded-xl border
      bg-gray-100/80 text-gray-900 border-gray-300

      dark:bg-gray-900/60 dark:text-gray-100 dark:border-gray-700

      shadow-sm backdrop-blur-sm
      transition-all duration-500
    "
  >
    

    <p className="text-lg font-semibold tracking-tight text-gray-600 dark:text-gray-400">
      Upload your file here
    </p>

    {/* Upload Button */}
    <label
      htmlFor="fileUpload"
      className="
        cursor-pointer w-fit flex items-center gap-2
        px-4 py-2 rounded-lg font-medium text-sm
        bg-gray-600 text-white hover:bg-gray-700

        dark:bg-purple-700 dark:hover:bg-purple-800

        shadow-md shadow-purple-600/20
        active:scale-95 transition-all duration-300
      "
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12"
        />
      </svg>

      Choose File
    </label>

    {/* Hidden Input */}
    <input id="fileUpload" type="file" className="hidden" />
  </div>
</div>


      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default UploadPdfDialog
