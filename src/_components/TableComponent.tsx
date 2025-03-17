"use client";
import { columns } from "@/_config/tableConfig";
import { DataContext } from "@/_context/dataContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TableComponent() {
  const { gdpData } = useContext(DataContext);
  const table = useReactTable({
    data: gdpData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Card className="flex flex-col m-5 w-full lg:w-3/4 p-4 sm:p-6">
      <CardHeader className="justify-center pb-0 text-2xl text-center">
        <CardTitle>Evolução do PIB Brasileiro</CardTitle>
        <CardDescription className="text-center">1996 - 2022</CardDescription>
      </CardHeader>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className=" bg-gray-100 shadow-md">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-center text-[#211C84] text-lg"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className=" text-center text-xl">
              <TableCell colSpan={columns.length}>Sem resultados.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className=" flex items-center justify-center gap-2 sm:gap-4 py-4">
        {Array.from({ length: table.getPageCount() }, (_, idx) => (
          <Button
            key={idx}
            variant={
              table.getState().pagination.pageIndex === idx
                ? "default"
                : "outline"
            }
            size="sm"
            onClick={() => table.setPageIndex(idx)}
          >
            {idx + 1}
          </Button>
        ))}
      </div>
    </Card>
  );
}
