import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface ComplaintChartProps {
  title: string;
}

const data = [
  {
    name: "Pending",
    count: 12,
  },
  {
    name: "In Progress",
    count: 8,
  },
  {
    name: "Resolved",
    count: 25,
  },
  {
    name: "Rejected",
    count: 3,
  },
];

const ComplaintChart = ({
  title,
}: ComplaintChartProps) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">
        {title}
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="name" />

            <YAxis
              domain={[0, 100]}
              ticks={[
                0,
                20,
                40,
                60,
                80,
                100,
              ]}
            />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplaintChart;