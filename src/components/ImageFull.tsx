import Image, { StaticImageData } from "next/image";
import React from "react";

// this img component will fill the relative parent
const ImageFull = ({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      style={{
        objectFit: "cover",
      }}
    />
  );
};

export default ImageFull;
