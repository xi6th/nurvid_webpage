import {Link, Button} from "@nextui-org/react";
import Image from 'next/image'


export default function Footer  () {
    return(
        <main>
            <div className="mt-40 h-60 text-white bg-black shadow-lg shadow-blue-300/40 rounded-lg border-2 ">
                <div className=" mx-60 grid grid-cols-4  items-center  justify-center">
                    <div className="mt-10">
                        <h4 className="text-lg font-bold  mb-2"> 
                        f9matrix
                        </h4>
                        <h4 className="text-sm mb-2">
                        2021 © f9matrix
                       </h4>
                        <h4 className="text-sm">
                        All rights reserved. 
                        </h4>

                    </div>
                    <div className="mt-10">
                    <h4 className="text-sm mb-2"> 
                        Services
                    </h4>
                        <h4 className="text-sm mb-2">
                        Products
                        </h4>
                        <h4 className="text-sm mb-2">
                        About Us                        
                        </h4>
                        <h4 className="text-sm mb-2">
                        Contact Us                        
                        </h4>
                    </div>
                    <div className="mt-10">
                    <h1 className="text-sm mb-2"> 
                        Instagram
                    </h1>
                    <h4 className="text-sm mb-2">
                        Facebook 
                       </h4>
                        <h4 className="text-sm mb-2">
                        Twitter                        
                        </h4>
                        <h4 className="text-sm mb-2">
                        LinkedIn                        
                        </h4>
                    </div>
                    <div className="">
                    <h1 className="text-sm mb-2 "> 
                    Privacy Policy                        
                    </h1>
                        <h4 className="text-sm mb-2">
                        Terms of Service                        
                        </h4>
                    </div>
                </div>
            </div>

 

        </main>
    )
}
