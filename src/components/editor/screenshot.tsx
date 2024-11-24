"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useEditor } from "./provider";
import { toBlob, toPng } from "html-to-image";

export const EditorScreenshot = () => {
  const [flashKey, setFlashKey] = useState<number | null>(null);

  const editor = useEditor();
  const phoneEl = editor((x) => x.phoneEl);

  return (
    <div>
      {flashKey != null && (
        <div
          key={flashKey}
          className="fixed pointer-events-none inset-0 z-[100] bg-white animate-flash"
        />
      )}
      <Button
        className="w-full"
        onClick={async () => {
          setFlashKey(Math.random());

          try {
            if (!phoneEl) throw new Error("Phone SVG not found");

            // Convert the SVG to a PNG
            const pngDataUrl = await toPng(phoneEl as any, {
              cacheBust: true,
              filter: (node) => {
                if (node?.getAttribute?.("data-role") === "bezel") return false;
                if (node?.getAttribute?.("data-role") === "screen_mask")
                  return false;
                return true;
              },
            });

            // Create an Image object to get the dimensions
            const img = new Image();
            img.src = pngDataUrl;
            await new Promise((resolve) => (img.onload = resolve));

            // Create a canvas to crop the image
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Set canvas size to image size minus 48px (24px on each side)
            canvas.width = img.width - 96;
            canvas.height = img.height - 96;

            // Draw the image on the canvas with negative offsets to crop
            ctx!.drawImage(img, -48, -48, img.width, img.height);

            // Convert the cropped canvas to a Blob
            const croppedBlob = await new Promise<Blob | null>((resolve) => {
              canvas.toBlob(resolve, "image/png");
            });

            if (!croppedBlob) throw new Error("Failed to create blob");

            // Create a link to download the cropped image
            const link = document.createElement("a");
            link.href = URL.createObjectURL(croppedBlob);
            link.download = "phone_screenshot.png";
            link.click();
          } catch (err: any) {
            console.error(err);
            toast.error(`Failed to take screenshot: ${err.message || err}`, {
              position: "top-center",
            });
          }
        }}
      >
        Screenshot
      </Button>
    </div>
  );
};
