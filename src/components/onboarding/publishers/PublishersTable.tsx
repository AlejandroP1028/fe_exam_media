"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { PublisherRow } from "@/lib/types";
import { IconArrowDown } from "@tabler/icons-react";

interface PublishersTableProps {
  data: PublisherRow[];
}

export function PublishersTable({ data }: PublishersTableProps) {
  return (
    <div className="bg-white shadow overflow-hidden w-full rounded-lg">
      <Table className="min-w-full">
        <TableHeader className="font-mono bg-[#EDECE5]">
          <TableRow>
            <TableHead className="w-12 text-center"></TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-2 sm:gap-4">
                WEBSITE LINK
                <IconArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-2 sm:gap-4">
                PUBLICATION NAME
                <IconArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="font-sans">
          {data.map((row, i) => (
            <TableRow
              key={row.id}
              className={`${
                i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F4ED]"
              } text-[#141413] h-10 sm:h-11`}
            >
              <TableCell className="text-center font-medium">
                {row.id}
              </TableCell>
              <TableCell className="underline break-words">
                {row.website}
              </TableCell>
              <TableCell className="break-words">{row.publication}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
