import { createColumnHelper } from "@tanstack/react-table";
import { OrderedItems } from "./Table_type";

const columnHelper = createColumnHelper<OrderedItems>();

const columns = [
    columnHelper.accessor(
        "orderNumber",
        {
            header: ()=>"Order No",
            cell: (info)=>info.getValue()
        }
    ),
    columnHelper.accessor(
        "id",
        {
            header: ()=>"Product Id",
            cell: (info)=>info.getValue()
        }
    ),
    columnHelper.accessor(
        "category",
        {
            header: ()=>"Category",
            cell: (info)=>info.getValue()
        }
    ),
    columnHelper.accessor(
        "price",
        {
            header: ()=>"Price",
            cell: (info)=>info.getValue()
        }
    ),
    columnHelper.accessor(
        "quantity",
        {
            header: ()=>"Product Quantity",
            cell: (info)=>info.getValue()
        }
    ),
];

export {columns};