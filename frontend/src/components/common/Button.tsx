import type {
  ReactNode,
  ButtonHTMLAttributes,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: `
      bg-blue-600
      text-white
      shadow-sm
      hover:bg-blue-700
      hover:shadow-md
      focus:ring-4
      focus:ring-blue-100
    `,

    secondary: `
      bg-white
      border
      border-slate-300
      text-slate-700
      hover:bg-slate-50
      hover:border-slate-400
    `,

    danger: `
      bg-red-600
      text-white
      shadow-sm
      hover:bg-red-700
      hover:shadow-md
      focus:ring-4
      focus:ring-red-100
    `,
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-5
        py-2.5
        text-sm
        font-semibold
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        active:scale-[0.98]
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;