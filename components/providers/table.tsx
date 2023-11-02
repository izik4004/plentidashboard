"use client"

import {useState} from 'react'
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDownIcon, PlusIcon, StarIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import OrderDetail from './order-details';

  
interface TableProbs {
    headers: string[];
    data: { [key: string]: any }[];
    color: string
    showAdditionalContent: boolean
}
const Table: React.FC<TableProbs> = ({ data, headers, color, showAdditionalContent }) => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [modelContent, setModalContent] = useState<string | null>(null)
    const handleRowClick = (index:number) => {
        setSelectedRow(index === selectedRow ? null : index);
    }

    const openModal = (content:string) => {
        setModalContent(content)
    }

    const closeModal = () => {
        setModalContent(null)
    }
   
    return (

        <div className="inline-block w-full shadow-md rounded-lg overflow-hidden">

            <table className="min-w-full leading-normal ">
                {headers && (
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}
                                    className="px-5 py-3 border-b-2 bg-[#f6f7f6]  border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                                <th   className="px-5 py-3 border-b-2 bg-[#f6f7f6]  border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                )}
                {/* {showAdditionalContent && (
                    <div>
                        <div className="flex items-center rounded-md  space-x-10">

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="px-2 space-x-4 hover:bg-white border-0 ">
                                        <span>Top buyers</span>
                                        <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    alignOffset={5}
                                    className="w-[140px] bg-white ml-8"
                                    forceMount
                                >

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Future Ideas
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>My Stack</DropdownMenuItem>
                                    <DropdownMenuItem>Inspiration</DropdownMenuItem>
                                    <DropdownMenuSeparator />

                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="px-2 space-x-4 hover:bg-white border-0 ">
                                        <span>Top buyers</span>
                                        <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    alignOffset={5}
                                    className="w-[140px] bg-white ml-8"
                                    forceMount
                                >

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Future Ideas
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>My Stack</DropdownMenuItem>
                                    <DropdownMenuItem>Inspiration</DropdownMenuItem>
                                    <DropdownMenuSeparator />

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                )} */}
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {headers && headers.map((header, colIndex) => (
                                <td key={colIndex}
                             
                                className={header === 'status' ? `bg-${color}` : "px-5 py-5 border-b border-gray-200 bg-white text-sm"}
                                >
                                    {/* <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap "> */}
                                                {row[header]}
                                            {/* </p>
                                        </div>
                                    </div> */}
                                    
                                  
                                </td>
                            
                            ))}
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          
                          <OrderDetail/>
                         

                            {/* <span className="action-button underline cursor-pointer" onClick={() => openModal(row.orderID)}>View details</span> */}
                                
                            </td>
                               
                           
                          
                        </tr>
                    
                    ))}

                </tbody>
            </table>
{modelContent && (
    <div>
        <span onClick={closeModal}>&time;</span>
        hkhkjwljwekle;lekw;l
        {modelContent}
    </div>
)}
        </div>


    );
}

export default Table;