import { 
    useReactTable,
    getCoreRowModel,
    flexRender
} from "@tanstack/react-table";

// import { OrderedItems } from "../table_content/Table_type";
import { columns } from "../table_content/Table_columns";
import { getOrderedItems } from "../table_content/Table_data";

function ReactTable(){
    
    const data = getOrderedItems();
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return(
        <div>
            <table>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup=>(
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header=>(
                                        <td key={header.id}>
                                            {
                                                header.isPlaceholder ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map(row=>(
                            <tr key={row.id}>
                                {
                                    row.getVisibleCells().map(cell=>(
                                        <td key={cell.id}>
                                            {
                                                flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ReactTable;