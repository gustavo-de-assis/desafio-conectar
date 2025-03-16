"use client";

import { DataContext } from "@/_context/dataContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useContext } from "react";
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from "recharts";
import { chartConfig } from "../_config/chartConfig";

export default function ChartComponent() {
  const { gdpData } = useContext(DataContext);

  return (
    <Card className="flex flex-col m-5 lg:w-1/2">
      <CardHeader className="justify-center pb-0 text-3xl">
        <CardTitle>Evolução do PIB Brasileiro</CardTitle>
        <CardDescription className="text-center">1996 - 2022</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="aspect-auto h-[600px]">
          <LineChart
            accessibilityLayer
            data={gdpData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <YAxis
              scale="log"
              domain={[500, 100000]}
              tickLine={false}
              axisLine={false}
              tickCount={6}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="totalGdp"
              type="monotone"
              stroke="var(--color-totalGdp)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="gdpPerCapita"
              type="monotone"
              stroke="var(--color-gdpPerCapita)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Fonte de dados:
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Instituto Brasileiro de Geografia e Estatística (IBGE)
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
