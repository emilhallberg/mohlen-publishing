import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type Props = { children: ReactNode } & DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export default function SubHeader({ children, ...rest }: Props) {
  return (
    <header
      className="relative grid animate-text bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 bg-clip-text text-transparent uppercase"
      {...rest}
    >
      <h2 className="lg:text-4xl md:text-3xl text-2xl">{children}</h2>
    </header>
  );
}
