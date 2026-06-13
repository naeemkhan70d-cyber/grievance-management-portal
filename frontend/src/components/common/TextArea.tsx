import type {
  TextareaHTMLAttributes,
} from "react";

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = ({
  label,
  className = "",
  ...props
}: TextAreaProps) => {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <textarea
        className={`
          w-full
          rounded-lg
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-500
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default TextArea;