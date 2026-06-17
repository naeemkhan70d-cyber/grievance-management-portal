interface StatusBadgeProps {
  status:
    | "pending"
    | "assigned"
    | "in-progress"
    | "resolved"
    | "closed";
}

const StatusBadge = ({
  status,
}: StatusBadgeProps) => {
  const statusStyles = {
    pending:
      "bg-yellow-100 text-yellow-700",

    assigned:
      "bg-blue-100 text-blue-700",

    "in-progress":
      "bg-indigo-100 text-indigo-700",

    resolved:
      "bg-green-100 text-green-700",

    closed:
      "bg-slate-100 text-slate-700",
  };

  const statusLabel = {
    pending: "Pending",
    assigned: "Assigned",
    "in-progress":
      "In Progress",
    resolved: "Resolved",
    closed: "Closed",
  };

  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${statusStyles[status]}
      `}
    >
      {statusLabel[status]}
    </span>
  );
};

export default StatusBadge;