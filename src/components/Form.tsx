import { FormHTMLAttributes } from "react";

type Props<Values> = Omit<FormHTMLAttributes<HTMLFormElement>, "className">;

export default function Form<Values>({ children, ...rest }: Props<Values>) {
  return (
    <form
      className="w-full p-6 py-12 max-w-[1080px] grid auto-rows-max gap-12 grid-cols-1"
      {...rest}
    >
      {children}
    </form>
  );
}
