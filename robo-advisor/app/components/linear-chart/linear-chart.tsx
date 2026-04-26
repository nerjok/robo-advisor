import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { ChartInfo } from "~/containers/step1/utils";

function LinearChart(data3: { chartData: ChartInfo }) {
  const lineColors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#17becf",
    "#7f7f7f",
  ];

  const properties = Object.entries(data3.chartData[0]).reduce(
    (acc, [key, value], index) => {
      if (typeof value === "number" && key !== "name") {
        acc[key] = lineColors[index] ?? "#e377c2";
      }
      return acc;
    },
    {} as Record<string, string>,
  );

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={data3.chartData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" stroke="#666" />
        <YAxis
          tick={false}
          label={{
            value: "Investment",
            angle: -90,
          }}
          width="auto"
          stroke="#666"
        />
        <Tooltip
          cursor={{
            stroke: "#666",
          }}
          contentStyle={{
            backgroundColor: "#fff",
            borderColor: "#ccc",
          }}
        />
        <Legend />
        {properties &&
          Object.entries(properties).map(([key, color]) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={color}
              dot={{
                fill: color,
              }}
              activeDot={{ r: 8, stroke: color }}
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LinearChart;
