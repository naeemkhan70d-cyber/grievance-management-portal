import {
  useMemo,
  useState,
} from "react";

import { Search, ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface SearchableSelectProps {
  label?: string;
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const SearchableSelect = ({
  label,
  value,
  options,
  placeholder = "Select Option",
  onChange,
}: SearchableSelectProps) => {
  const [open, setOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const selectedOption =
    options.find(
      (option) =>
        option.value === value
    );

  const filteredOptions =
    useMemo(() => {
      return options.filter(
        (option) =>
          option.label
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [options, search]);

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() =>
            setOpen(!open)
          }
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-lg
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-left
          "
        >
          <span>
            {selectedOption?.label ||
              placeholder}
          </span>

          <ChevronDown
            size={18}
          />
        </button>

        {open && (
          <div
            className="
              absolute
              z-50
              mt-2
              w-full
              rounded-lg
              border
              border-slate-200
              bg-white
              shadow-lg
            "
          >
            <div className="relative p-3">
              <Search
                size={18}
                className="
                  absolute
                  left-6
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search..."
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  py-2
                  pl-10
                  pr-3
                  outline-none
                "
              />
            </div>

            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length >
              0 ? (
                filteredOptions.map(
                  (option) => (
                    <button
                      key={
                        option.value
                      }
                      type="button"
                      onClick={() => {
                        onChange(
                          option.value
                        );

                        setOpen(
                          false
                        );

                        setSearch(
                          ""
                        );
                      }}
                      className={`
                        block
                        w-full
                        px-4
                        py-3
                        text-left
                        hover:bg-slate-100
                        ${
                          value ===
                          option.value
                            ? "bg-blue-50 text-blue-600"
                            : ""
                        }
                      `}
                    >
                      {
                        option.label
                      }
                    </button>
                  )
                )
              ) : (
                <p className="p-4 text-sm text-slate-500">
                  No results found
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchableSelect;