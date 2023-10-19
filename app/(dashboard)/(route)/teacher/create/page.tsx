"use client"

import * as z from "zod";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { useRouter } from "next/router";

import {
Form, 
FormControl,
FormDescription,
FormLabel,
FormMessage
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    })
})
const CreatePage = () => {
    return ( 
        <div>
            create page 
        </div>
     );
}
 
export default CreatePage
