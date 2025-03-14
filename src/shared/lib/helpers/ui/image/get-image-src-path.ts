export const getImageSrcPath = (imageSrc: string) => {
  return `${process.env.APP_API_HOST}/${imageSrc}`;
};
