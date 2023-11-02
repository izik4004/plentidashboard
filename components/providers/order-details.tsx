import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { Button } from "../ui/button";


const OrderDetail = () => {
    return (
        <Dialog>
            <DialogTrigger>View details</DialogTrigger>
            <DialogContent className='bg-white'>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        <div>
                            <div className="flex space-x-4">
                                <Image
                                    width={200}
                                    height={100}
                                    src="/productDetail.png"
                                    alt="Placeholder Image"
                                    className="object-fit rounded-lg "
                                />
                                <div className="w-full flex justify-between ">
                                    <div className="w-1/2">Category</div>
                                    <div className="w-1/2 text-end bg-red-500 ">Category</div>
                                </div>
                            </div>
                            <div>
                                <div className="pt-8">
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9]">Customer's name:</p>
                                        <span className="font-semibold">Kanyinsola Balogun</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Phone Number:</p>
                                        <span className="font-semibold">080665544236</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Amount:</p>
                                        <span className="font-semibold">N2,500</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Product name:</p>
                                        <span className="font-semibold text-[12px]">
                                            Buy 2 cups of ice cream for N3000 and earn up to N100 cashback and other free goodies.
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Address:</p>
                                        <span className="font-semibold">100B Kanyinsola Balogun Street Festac</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Offer type:</p>
                                        <span className="font-semibold bg-red-500">Airtime</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Order ID:</p>
                                        <span className="font-semibold">PA6788</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                        <Button className="">Okay</Button>
                        </div>
                        
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}

export default OrderDetail;