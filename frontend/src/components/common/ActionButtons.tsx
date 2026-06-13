import {
  Pencil,
  Trash2,
} from "lucide-react";

interface ActionButtonsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const ActionButtons = ({
  onEdit,
  onDelete,
}: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-2">
      {onEdit && (
        <button
          type="button"
          aria-label="Edit"
          onClick={onEdit}
          className="
            rounded-lg
            bg-blue-50
            p-2
            text-blue-600
            transition-all
            hover:bg-blue-100
            hover:scale-105
          "
        >
          <Pencil size={18} />
        </button>
      )}

      {onDelete && (
        <button
          type="button"
          aria-label="Delete"
          onClick={onDelete}
          className="
            rounded-lg
            bg-red-50
            p-2
            text-red-600
            transition-all
            hover:bg-red-100
            hover:scale-105
          "
        >
          <Trash2 size={18} />
        </button>
      )}
    </div>
  );
};

export default ActionButtons;