import { useEffect, useState } from "react";

interface ImageViewProps {
  file: FileList | null;
}

export default function ImageView({ file }: ImageViewProps): [string | null, React.Dispatch<React.SetStateAction<string | null>>] {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    if (file && file[0]) {
      const newUrl = URL.createObjectURL(file[0]);

      if (newUrl !== imgSrc) {
        setImgSrc(newUrl);
      }
    }
  }, [file, imgSrc]);

  return [imgSrc, setImgSrc];
}
