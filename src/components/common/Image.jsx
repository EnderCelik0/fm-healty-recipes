export default function Image({
  variants,
  alt,
  sizes,
  priority = false,
  className,
  ...props
}) {
  const srcset = variants.map((v) => `${v.src} ${v.width}w`).join(", ");

  return (
    <img
      src={variants[0].src}
      srcSet={srcset}
      sizes={sizes}
      alt={alt}
      loading={`${priority ? "eager" : "lazy"}`}
      className={className}
      {...props}
    />
  );
}
