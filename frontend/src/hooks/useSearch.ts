import { useMemo } from "react";

const useSearch = <T,>(
  data: T[],
  search: string,
  fields: (keyof T)[]
) => {
  return useMemo(() => {
    if (!search) return data;

    return data.filter((item) =>
      fields.some((field) =>
        String(item[field])
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [data, search, fields]);
};

export default useSearch;