import type { ReactNode } from "react";

export interface TableColumn<T> {
  header: string;
  accessor?: keyof T;
  render?: (row: T) => ReactNode;
}