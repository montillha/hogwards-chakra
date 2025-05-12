"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useCharacterContext } from "@/context/Character.Context";

const chartConfig = {
  total: {
    label: "total",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "Unknown"
  ];
function getMonth(date: string) {
  if (!date) return "Unknown";
  const parts = date.split("-");
  if (parts.length === 3) {
    const monthIndex = parseInt(parts[1], 10) - 1;

    return monthNames[monthIndex] || "Unknown";
  }
  return "Unknown";
}

export function BirthdayChart() {
  const { characters } = useCharacterContext() ?? { characters: [] };
  const monthCounts = characters.reduce(
    (acc: Record<string, number>, character) => {
      const month = getMonth(character.dateOfBirth);
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = monthNames.map((month) => ({
    month,
    total: monthCounts[month] || 0, 
  }));
  return (
    <Card>
      <CardHeader>
        <CardTitle>Characters Birthday Month</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="total"
              type="natural"
              stroke="var(--color-total)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-total)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
