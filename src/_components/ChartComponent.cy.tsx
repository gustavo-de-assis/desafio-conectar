import React from "react";
import { DataContext } from "@/_context/dataContext";
import ChartComponent from "./ChartComponent";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from "recharts";

const mockData = [
  { year: 1996, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1997, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1998, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1996, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1997, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1998, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1996, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1997, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1998, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1996, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1997, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1998, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
  { year: 1999, totalGdp: 23479901098, gdpPerCapita: 89723 },
];

const MockDataProvider = ({ children }) => (
  <DataContext.Provider value={{ gdpData: mockData }}>
    {children}
  </DataContext.Provider>
);

describe("<ChartComponent />", () => {
  it("should render chart component", () => {
    cy.mount(
      <MockDataProvider>
        <ChartComponent />
      </MockDataProvider>
    );
    /*
    Não foi possível testar o plot do gráfico
    
    cy.get(".recharts-responsive-container", { timeout: 3000 }).should("exist");
    cy.get(".recharts-cartesian-axis").should("have.length", 2); */
  });
});
