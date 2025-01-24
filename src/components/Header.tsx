import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Header({ children }: Props) {
  return (
    <header className="relative grid place-items-center animate-text bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 bg-clip-text text-transparent uppercase">
      <h1 className="lg:text-7xl md:text-4xl text-3xl text-center">
        {children}
      </h1>
    </header>
  );
}
