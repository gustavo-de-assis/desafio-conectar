import React from "react";
import TableComponent from "./TableComponent";
import { DataContext } from "@/_context/dataContext";
import { columns } from "@/_config/tableConfig";

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

describe("<TableComponent />", () => {
  it("should render table component", () => {
    cy.mount(
      <MockDataProvider>
        <TableComponent />
      </MockDataProvider>
    );

    cy.get("thead th").should("have.length", columns.length);
    columns.forEach((column) => {
      cy.get("thead th").should("contain", column.header);
    });

    cy.get("tbody tr").should("have.length", 10);
    mockData.slice(0, 10).forEach((row, index) => {
      cy.get("tbody tr").eq(index).should("contain", row.year);
      cy.get("tbody tr").eq(index).should("contain", row.totalGdp);
      cy.get("tbody tr").eq(index).should("contain", row.gdpPerCapita);
    });
  });

  it("paginates the table correctly", () => {
    cy.mount(
      <MockDataProvider>
        <TableComponent />
      </MockDataProvider>
    );

    cy.get("button").contains("1").should("exist");
    cy.get("button").contains("2").should("exist");

    cy.get("button").contains("2").click();

    cy.get("button").contains("2").should("have.class", "bg-primary"); // Estilo do botão ativo
  });
});
