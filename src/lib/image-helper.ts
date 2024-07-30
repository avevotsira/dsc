// src/lib/image-helper.ts
import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

export async function getProcessedImages(images: ImageMetadata[]) {
  const processedImages = await Promise.all(
    images.map(async (image) => {
      const processed = await getImage({ src: image, format: "webp" });
      return processed.src;
    }),
  );
  return processedImages;
}
