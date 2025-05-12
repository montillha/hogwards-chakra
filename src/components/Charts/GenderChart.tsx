
"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useCharacterContext } from "@/context/Character.Context"


const chartConfig = {
  total: {
    label: "total",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


export function GenderChart() {
  const { characters } = useCharacterContext() ?? { characters: [] };
  
  const genderCounts = characters.reduce((acc: Record<string, number>, character) => {
    const gender = character.gender || "undefined";
    acc[gender] = (acc[gender]|| 0) + 1;
    return acc;
  }, {});

  //ordem padrão
  const genderOrder = ["male", "female", "undefined"];

  const genderData = genderOrder.map((gender) => ({
    gender,
    total: genderCounts[gender] || 0,
  }));
  return (
    <Card>
      <CardHeader className="m-6">
      <CardTitle >Characters by Gender</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={genderData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="gender"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              /*tickFormatter={(value) => value.slice(0, 3)}*/
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="total" fill="var(--color-total)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
  
    </Card>
  )
}
