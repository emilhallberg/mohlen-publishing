import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

type Props = { children: ReactNode } & ImageProps;

export default function Section({ children, src, alt, ...rest }: Props) {
  return (
    <section className="p-6 grid auto-rows-max gap-12 sm:grid-flow-col sm:grid-cols-[minmax(300px,2fr)_minmax(300px,_3fr)] max-w-[1080px] mb-24">
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
      <article className="grid auto-rows-max gap-6">
        <p className="text-orange-50 text-center lg:mt-12 text-2xl">* * *</p>
        <p className="mt-3 lg:text-lg text-orange-50">{children}</p>
      </article>
    </section>
  );
}
