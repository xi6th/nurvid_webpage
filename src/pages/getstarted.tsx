import {Link, Button} from "@nextui-org/react";
import {NavBartheme} from "../components/nabar";
import Image from 'next/image'


export default function GetStarted ()  {
    return(
        <main>
            <div className=" w-85  my-40 mx-40 grid grid-cols-2 items-center gap-20  justify-center ">

            {/* <div className="mx-40 my-40 grid grid-cols-2 items-center gap-10  justify-center"> */}
                <div className="">
                    <p className="font-semi text-inherit text-sm  "> - Get Started Today!</p>
                    <h1 className="text-6xl font-bold my-8 ">
                    Discover the <br/>
                    power of <br/>
                    innovation.
                    </h1>
                    <h4>
                    Learn more about our services.
                    </h4>
                    <div>
                    <Button className="font-sans rounded-2xl w-40 h-10 shadow-2xl text-color-white mr-6 my-10 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                        Get Started
                    </Button>
                    <Button className="font-sans rounded-2xl w-40 h-10 shadow-2xl text-color-white mr-6 my-10 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                        Explore Now
                    </Button>
                    </div>

                </div>
                <div className="mx-10">
                    <Image 
                        src="/getstarted.png"
                        width={500}
                        height={500}
                        alt="Get Started Today!"
                    />
                </div>
            </div>
 

        </main>
    )
}
