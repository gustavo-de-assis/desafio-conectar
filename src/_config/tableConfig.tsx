import { GdpDataType } from "@/_types/pib";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<GdpDataType>[] = [
  {
    accessorKey: "year",
    header: "Ano",
    size: 160,
    cell: ({ row }) => (
      <div className="w-10 m-auto">{row.getValue("year")}</div>
    ),
  },
  {
    accessorKey: "totalGdp",
    header: "Pib Total (USD bilhões)",
    size: 200,
    cell: ({ row }) => (
      <div className="w-10 m-auto">{row.getValue("totalGdp")}</div>
    ),
  },
  {
    accessorKey: "gdpPerCapita",
    header: "Pib per Capita (USD)",
    size: 200,
    cell: ({ row }) => (
      <div className="w-20 m-auto">{row.getValue("gdpPerCapita")}</div>
    ),
  },
];
