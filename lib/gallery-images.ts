export function getGalleryThumbnail(src: string) {
  return src.startsWith("/images/gallery/")
    ? src.replace("/images/gallery/", "/images/gallery-thumbnails/")
    : src
}
