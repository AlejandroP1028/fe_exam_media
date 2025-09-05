"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown } from "lucide-react";
import type { SocialMediaRow } from "@/lib/types";
import { IconArrowDown } from "@tabler/icons-react";
interface SourcesTableProps {
  data: SocialMediaRow[];
}

export function SourcesTable({ data }: SourcesTableProps) {
  return (
    <div className=" bg-white shadow overflow-hidden">
      <Table>
        <TableHeader className="font-mono bg-[#EDECE5] rounded-tl-[18px] rounded-tr-[18px]">
          <TableRow className="rounded-tl-[18px] rounded-tr-[18px]">
            <TableHead className="w-12 text-center"></TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-4">
                X (TWITTER)
                <IconArrowDown className="h-3.75 w-3.75" />
              </div>
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-4">
                FACEBOOK
                <IconArrowDown className="h-3.75 w-3.75" />
              </div>
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-4">
                REDDIT
                <IconArrowDown className="h-3.75 w-3.75" />
              </div>
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              <div className="flex items-center gap-4">
                YOUTUBE
                <IconArrowDown className="h-3.75 w-3.75" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-sans">
          {data.map((row, i) => (
            <TableRow
              key={row.id}
              className={`${
                i % 2 == 0 ? "bg-[#FFFFFF]" : "bg-[#F5F4ED]"
              } text-[#141413] h-11`}
            >
              <TableCell className="text-center font-medium">
                {row.id}
              </TableCell>
              <TableCell className=" underline">{row.twitter}</TableCell>
              <TableCell className=" underline">{row.facebook}</TableCell>
              <TableCell className=" underline">{row.reddit}</TableCell>
              <TableCell className=" underline">{row.youtube}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
