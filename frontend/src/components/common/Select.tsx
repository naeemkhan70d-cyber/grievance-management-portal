interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  value: string;
  options: Option[];
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Select = ({
  label,
  value,
  options,
  onChange,
}: SelectProps) => {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-300 px-4 py-3"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;