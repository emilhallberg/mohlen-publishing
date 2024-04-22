import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ name, children, ...rest }: Props) {
  return (
    <label
      htmlFor={name}
      className="grid grid-rows-[max-content_48px] text-sm color-orange-50"
    >
      {children}
      <div className="border-b border-orange-50 h-full">
        <input
          className="appearance-none bg-transparent border-none text-lg leading-tight focus:outline-none w-full h-full"
          name={name}
          {...rest}
        />
      </div>
    </label>
  );
}
