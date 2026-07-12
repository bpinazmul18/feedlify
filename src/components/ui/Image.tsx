import NextImage, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "width" | "height"> & {
  width?: ImageProps["width"];
  height?: ImageProps["height"];
};

export default function Image({
  width,
  height,
  style,
  sizes,
  ...props
}: Props) {
  if (width !== undefined && height !== undefined) {
    return <NextImage {...props} width={width} height={height} style={style} />;
  }

  return (
    <NextImage
      {...props}
      width={0}
      height={0}
      sizes={sizes ?? "100vw"}
      style={{ width: "100%", height: "auto", ...style }}
    />
  );
}
