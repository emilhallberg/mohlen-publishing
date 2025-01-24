import { FormHTMLAttributes } from "react";

type Props = Omit<FormHTMLAttributes<HTMLFormElement>, "className">;

export default function Form({ children, ...rest }: Props) {
  return (
    <form
      className="w-full p-6 py-12 max-w-[1080px] grid auto-rows-max gap-12 grid-cols-1"
      {...rest}
    >
      {children}
    </form>
  );
}
