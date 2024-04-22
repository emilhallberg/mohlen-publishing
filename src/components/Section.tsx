import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

type Props = { children: ReactNode } & ImageProps;

export default function Section({ children, src, alt, ...rest }: Props) {
  return (
    <section className="p-6 grid auto-rows-max gap-8 lg:gap-12 sm:grid-flow-col sm:grid-cols-[minmax(300px,2fr)_minmax(300px,_3fr)] max-w-[1080px] mb-24">
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
      <article className="grid auto-rows-max gap-4">
        <span className="border-b border-orange-50 lg:mt-6 w-20 justify-self-center" />
        <p className="mt-3 text-orange-50 text-justify lg:text-left">
          {children}
        </p>
      </article>
    </section>
  );
}
