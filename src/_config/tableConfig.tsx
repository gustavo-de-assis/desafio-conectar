import { GdpDataType } from "@/_types/pib";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<GdpDataType>[] = [
  {
    accessorKey: "year",
    header: "Ano",
    size: 100,
    cell: ({ row }) => (
      <div className="text-center whitespace-nowrap min-w-[80px] sm:min-w-[100px]">
        {row.getValue("year")}
      </div>
    ),
  },
  {
    accessorKey: "totalGdp",
    header: "Pib Total (USD)",
    size: 200,
    cell: ({ row }) => (
      <div className="text-center whitespace-nowrap min-w-[120px]">
        ${row.getValue("totalGdp")} bi
      </div>
    ),
  },
  {
    accessorKey: "gdpPerCapita",
    header: "Pib per Capita (USD)",
    size: 200,
    cell: ({ row }) => (
      <div className="text-center whitespace-nowrap min-w-[120px]">
        ${row.getValue("gdpPerCapita")}
      </div>
    ),
  },
];
