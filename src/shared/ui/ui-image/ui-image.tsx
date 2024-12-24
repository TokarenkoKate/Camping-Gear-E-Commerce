interface UiImageProps extends React.HTMLProps<HTMLImageElement> {
  className?: string;
}

/**
 * TODO: add picture, source tag and set up srcSet;
 */
export const UiImage = (props: UiImageProps) => {
  const { src, alt, className } = props;

  return <img src={src} alt={alt} className={className} />;
};
