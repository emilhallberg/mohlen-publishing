import { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLSelectElement>, "className"> & {
  label: string;
};

export default function Select({ name, children, label, ...rest }: Props) {
  return (
    <label
      htmlFor={name}
      className="grid grid-rows-[max-content_1fr] gap-2 text-sm color-orange-50"
    >
      {label}
      <div className="border-b border-orange-50 h-full pt-1 pb-2">
        <select
          className="appearance-none bg-transparent border-none text-lg leading-tight focus:outline-none w-full h-full"
          name={name}
          {...rest}
        >
          {children}
        </select>
      </div>
    </label>
  );
}
