interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({
  message = "No data found",
}: EmptyStateProps) => {
  return (
    <div className="flex items-center justify-center py-10">
      <p className="text-sm text-slate-500">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;