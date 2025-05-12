import "./charts.css";
"use client"
import { Cell, Pie, PieChart } from "recharts"

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

import { useCharacterContext } from "@/context/Character.Context";

const chartConfig = {
  gryffindor: {
    label: "Gryffindor",
    color: "#C9302C", 
  },
  slytherin: {
    label: "Slytherin",
    color: "#006F2A", 
  },
  ravenclaw: {
    label: "Ravenclaw",
    color: "#003E5C", 
  },
  hufflepuff: {
    label: "Hufflepuff",
    color: "#F9A800", 
  },
  undefined: {
    label: "Undefined",
    color: "#635e5e", 
  },
} satisfies ChartConfig;

export function HouseChart() {
 
   const { characters } = useCharacterContext() ?? { characters: [] };

   const houseCounts = characters.reduce((acc: Record<string, number>, character) => {
    const house = character.house || "Undefined";
    acc[house] = (acc[house]||0)+1;
    return acc;
    
  }, {});

  const getHouseColor = (house: string) => {
    const houseKey = house.toLowerCase() as keyof typeof chartConfig
    return chartConfig[houseKey]?.color|| chartConfig.undefined.color
  }

  const houseData =  Object.keys(houseCounts).map((house)=>({
    house,
    total:houseCounts[house]
  }));

  return (
      <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle className="m-4">Characters by Hogwards House</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie 
            data={houseData}
            dataKey="total" 
            label 
            nameKey="house">
            {houseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getHouseColor(entry.house)} />
            ))}
         
         </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}

export default HouseChart