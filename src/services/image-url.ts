import placeholder from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImage = (url: string) => {
  if (!url) return placeholder;
  const index = url?.indexOf("media/") + 6;
  return url?.slice(0, index) + "crop/600/400/" + url?.slice(index);
};

export default getCroppedImage;
