import React from 'react'
import Image from "next/image";

interface CardProps {
    imageSrc: string;
    content: string;
    label: string;
    subtext: string;
    bgColor?: string,
    textColor?: string
    order:string
    order2:string
    labelColor: string
}


const Card = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h3>Sign up and get rewarded every time you shop</h3>
                <p>jlfjkhvkjwhskowikl</p>
            </div>
            <Image
                src="/createLogin.png"
                width={550}
                height={200}
                alt="logo"
                className=' '
            />
        </div>
    )
}

export default Card