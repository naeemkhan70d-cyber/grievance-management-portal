import type { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({
  label,
  id,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <input
        id={id}
        className={`
          rounded-lg
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition-all
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;