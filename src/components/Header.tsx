import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Header({ children }: Props) {
  return (
    <header className="relative flex place-items-center h-screen animate-text bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 bg-clip-text text-transparent">
      <h1 className="lg:text-8xl md:text-6xl text-4xl text-center">
        {children}
      </h1>
    </header>
  );
}
