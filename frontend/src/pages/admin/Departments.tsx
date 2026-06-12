import { useState } from "react";

import SearchInput from "../../components/common/SearchInput";
import DepartmentTable from "../../components/department/DepartmentTable";

import { getDepartments } from "../../services/departmentService";
import useSearch from "../../hooks/useSearch";
import PageHeader from "../../components/common/PageHeader";

const Departments = () => {
  const departments = getDepartments();

  const [search, setSearch] = useState("");

  const filteredDepartments =
    useSearch(
      departments,
      search,
      ["name", "head"]
    );

  return (
    <div>
      <PageHeader
        title="Departments"
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Search departments..."
        buttonText="Add Department"
      />

      <div className="mb-6">
        <SearchInput
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search departments..."
        />
      </div>

      <DepartmentTable
        departments={
          filteredDepartments
        }
      />
    </div>
  );
};

export default Departments;