import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon?: LucideIcon;
}

const StatsCard = ({
  title,
  value,
  icon: Icon,
}: StatsCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Icon size={22} />
            </div>
          )}

          <div>
            <p className="text-sm text-slate-500">
              {title}
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-slate-800">
          {value}
        </h3>
      </div>
    </div>
  );
};

export default StatsCard;