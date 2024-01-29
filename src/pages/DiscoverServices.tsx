import {Link, Button} from "@nextui-org/react";
import Image from 'next/image'


export default function DiscoverServices () {
    return(
        <main>
            <div className="mx-40 rounded-3xl w-90 border-2 my-60 shadow-lg shadow-blue-300/40 sm:">
            <div className=" grid grid-cols-2 items-center gap-20  justify-center">
                <div className="ml-60 mt-[-400px] ">
                    <Image 
                            className=""
                            src="/DiscoverServices.png"
                            width={400}
                            height={350}
                            alt="Get Started Today!"
                    />
                </div>
                <div className="pt-10">
                    <div className="pl-10 pr-20">
                        <h1 className="text-3xl/4 font-bold font-sans  "> 
                                Step 1 <br/>
                        </h1>
                        <h4 className="text-sm mt-4">
                            Connect with our specialists <br/>
                            for an introduction session.
                        </h4>
                    </div>
                    <hr className="mb-20 h-0.5 mr-40 mx-10  bg-gray-400 border-3 rounded md:my-10 dark:bg-gray-700"/>

                    {/* Step 2 */}
                    <div className="pl-10 pr-20 mb-10">
                        <h1 className=" text-3xl/4 font-bold font-sans "> 
                                Step 2 <br/>
                        </h1>
                        <h4 className="mt-4">
                            Connect with our specialists <br/>
                            for an introduction session.
                        </h4>
                    </div>
                    <hr className="mb-20 h-0.5 mr-40 mx-10  bg-gray-400 border-3 rounded md:my-10 dark:bg-gray-700"/>
                    {/* Step 3 */}
                    <div className="pl-10 pr-20 mb-10">
                        <h1 className=" text-3xl font-bold "> 
                                Step 3 <br/>
                        </h1>
                        <h4 className="mt-4">
                            Connect with our specialists <br/>
                            for an introduction session.
                        </h4>
                    </div>

                    {/* end of steps */}
                </div>
            </div>
            <div>
                {/* second section */}
                <div className="mx-20 mt-[-240px] mb-20">
                    <h1 className="text-4xl font-bold "> 
                    How to join our <br/>
                    innovative community                   
                    </h1>
                    <h4>
                    Optimize your company operations <br/>
                    in just 3 simple steps.
                    </h4>
                    <Button className="font-sans text-sm rounded-2xl w-40 h-10 shadow-2xl text-color-white mr-6 mt-8 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                        Discover our Services
                    </Button>
                </div>
                <div>
                </div>
            </div>
            </div>

        </main>
    )
}
