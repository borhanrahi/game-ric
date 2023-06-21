const getCroppedImageUrl = (url: string, crop: number) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const width = 400;
  const height = 600;
  return (
    url.slice(0, index) + crop / width + ":" + crop / height + url.slice(index)
  );
};

export default getCroppedImageUrl;
