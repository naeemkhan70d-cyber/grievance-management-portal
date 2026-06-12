interface StatusBadgeProps {
  status:
    | "Pending"
    | "In Progress"
    | "Resolved"
    | "Rejected";
}

const StatusBadge = ({
  status,
}: StatusBadgeProps) => {
  const statusStyles = {
    Pending:
      "bg-yellow-100 text-yellow-700",

    "In Progress":
      "bg-blue-100 text-blue-700",

    Resolved:
      "bg-green-100 text-green-700",

    Rejected:
      "bg-red-100 text-red-700",
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
      {status}
    </span>
  );
};

export default StatusBadge;