import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

type Props = { children: ReactNode; reverse?: boolean } & ImageProps;

export default function Section({
  children,
  reverse = false,
  src,
  alt,
  ...rest
}: Props) {
  const image = (
    <Image
      className="w-full h-auto"
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="500"
      priority
      {...rest}
    />
  );

  const content = (
    <article className="grid auto-rows-max gap-4 mt-6 text-orange-50 text-justify lg:text-left">
      {children}
    </article>
  );

  if (reverse) {
    return (
      <section className="p-6 grid auto-rows-max gap-8 lg:gap-12 sm:grid-flow-col sm:grid-cols-[minmax(300px,3fr)_minmax(300px,_2fr)] max-w-[1080px] mb-24">
        {content}
        {image}
      </section>
    );
  }

  return (
    <section className="p-6 grid auto-rows-max gap-8 lg:gap-12 sm:grid-flow-col sm:grid-cols-[minmax(300px,2fr)_minmax(300px,_3fr)] max-w-[1080px] mb-24">
      {image}
      {content}
    </section>
  );
}
