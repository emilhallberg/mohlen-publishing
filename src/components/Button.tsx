import { ButtonHTMLAttributes } from "react";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function Button({ children, ...rest }: Props) {
  return (
    <button
      className="px-3 py-4 border border-orange-50 text-sm text-orange-50 hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:border-orange-50"
      {...rest}
    >
      {children}
    </button>
  );
}
