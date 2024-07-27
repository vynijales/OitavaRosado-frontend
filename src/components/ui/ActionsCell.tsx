import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react";

import Link from "next/link";

export function ActionsCell({row}: {row: any}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
        {/* <DropdownMenuItem onClick={() => navigator.clipboard.writeText(id)}>
          Copy name {id}
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href="#" className="">Editar</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="#" className="text-red-500">Excluir</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};