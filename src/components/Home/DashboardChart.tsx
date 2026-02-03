import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { parkingLots } from "@/data/ParkingsData";

export const description = "A stacked bar chart with a legend";

const chartData = parkingLots.map((p) => ({
  place: p.place,
  ocupados: p.ocupados,
  disponibles: p.disponibles,
}));

const chartConfig = {
  ocupados: {
    label: "Ocupados",
    color: "var(--chart-1)",
  },
  disponibles: {
    label: "Disponibles",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function DashboardChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart
        data={chartData}
        margin={{ top: 16, right: 24, left: 16, bottom: 24 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="place" tickLine={false} tickMargin={10} axisLine />
        <YAxis
          tickLine={false}
          axisLine
          tickMargin={8}
          domain={[0, 100]}
          tickFormatter={(value: number) => `${value}%`}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="ocupados"
          stackId="a"
          fill="var(--chart-1)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="disponibles"
          stackId="a"
          fill="var(--chart-2)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
