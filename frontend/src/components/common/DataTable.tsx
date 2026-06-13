import EmptyState from "./EmptyState";

import type { TableColumn } from "../../types/table";

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  emptyMessage?: string;
}

const DataTable = <T,>({
  data,
  columns,
  emptyMessage = "No data found",
}: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
      <table className="min-w-[700px] w-full">
        <thead className="bg-slate-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-4 py-3 text-left"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map(
            (row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-slate-200 hover:bg-slate-50"
              >
                {columns.map(
                  (column) => (
                    <td
                      key={
                        column.header
                      }
                      className="px-4 py-3 whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(
                            row
                          )
                        : String(
                            row[
                              column.accessor as keyof T
                            ]
                          )}
                    </td>
                  )
                )}
              </tr>
            )
          )}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={
                  columns.length
                }
              >
                <EmptyState
                  message={
                    emptyMessage
                  }
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;