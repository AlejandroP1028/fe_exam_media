"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { SocialMediaRow } from "@/lib/types";
import { IconArrowDown } from "@tabler/icons-react";

interface SourcesTableProps {
  data: SocialMediaRow[];
}

export function SourcesTable({ data }: SourcesTableProps) {
  return (
    <div className="bg-white shadow overflow-x-auto rounded-2xl">
      <Table className="min-w-[600px]">
        <TableHeader className="font-mono bg-[#EDECE5] rounded-tl-[18px] rounded-tr-[18px]">
          <TableRow>
            <TableHead className="w-12 text-center"></TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-2 md:gap-4">
                X (TWITTER)
                <IconArrowDown className="h-3.5 w-3.5" />
              </div>
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-2 md:gap-4">
                FACEBOOK
                <IconArrowDown className="h-3.5 w-3.5" />
              </div>
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-2 md:gap-4">
                REDDIT
                <IconArrowDown className="h-3.5 w-3.5" />
              </div>
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-2 md:gap-4">
                YOUTUBE
                <IconArrowDown className="h-3.5 w-3.5" />
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
              } text-[#141413] h-11`}
            >
              <TableCell className="text-center font-medium">
                {row.id}
              </TableCell>
              <TableCell className="underline break-all">
                {row.twitter}
              </TableCell>
              <TableCell className="underline break-all">
                {row.facebook}
              </TableCell>
              <TableCell className="underline break-all">
                {row.reddit}
              </TableCell>
              <TableCell className="underline break-all">
                {row.youtube}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
