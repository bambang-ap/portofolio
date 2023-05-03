import React, { ImgHTMLAttributes } from "react";

export default Img;

export function Img(
  props: Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "className">
) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={props.src} alt={props.alt} className={props.className} />
  );
}
