"use client";
import React, { useState } from "react";
import { downloadContents } from "@/handlers/handlers";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

function DownloadContent({ id }) {
  const [loading, setLoading] = useState(false);

  async function downloadHelper() {
    try {
      setLoading(true);
      const info = await downloadContents({
        id: id,
      });
      const url = window.URL.createObjectURL(new Blob([info]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resource.pdf"); 
      document.body.appendChild(link);
      link.click();
      link.remove();
      console.log(info);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      disabled={loading}
      onClick={downloadHelper}
    >
      {loading ? "Downloding....." : "Download"}
      
    </Button>
  );
}

export default DownloadContent;
