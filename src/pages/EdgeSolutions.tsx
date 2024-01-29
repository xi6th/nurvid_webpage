import {Link, Button} from "@nextui-org/react";
import {NavBartheme} from "../components/nabar";
import Image from 'next/image'

export default function EdgeSolutions () {
    return(
        <main className="">
            <div className="grid grid-cols-2 rounded-3xl w-85 border-2 mx-40 my-10 shadow-lg shadow-blue-300/40 items-center gap-40  justify-center">
                <div className="mx-20">
                    <h1 className="text-4xl font-bold my-6 "> 
                    Introducing <br/>
                    Cutting-Edge Solutions                    
                    </h1>
                    <h4>
                    Join our community and  <br/>
                    experience the future today!
                    </h4>
                    <div>
                    <Button className="font-sans rounded-2xl w-40 h-10 shadow-2xl text-color-white mr-6 my-10 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                        Get Started
                    </Button>
                    </div>

                </div>
                <div className="mx-20">
                    <Image 
                    className="mb-20"
                        src="/edge-solution.png"
                        width={350}
                        height={350}
                        alt="Get Started Today!"
                    />
                </div>
            </div>
 

        </main>
    )
}
