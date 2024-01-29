import {Link, Button} from "@nextui-org/react";
import Image from 'next/image'


export default function DigitalTransformation  () {
    return(
        <main>
            <div className="mt-40">
                <div className="grid grid-cols-2 rounded-3xl w-85 border-2 mx-40 my-10 shadow-lg shadow-blue-300/40 items-center gap-40  justify-center">
                    <div className="mx-20">
                        <h1 className="text-3xl font-bold my-6 mr-10 "> 
                        Start your digital<br/> transformation with <br/> Lando today                   
                        </h1>
                        <h4>
                        Optimize your processes and achieve success.
                        </h4>
                        <div>
                        <Button className="font-sans rounded-2xl w-40 h-10 shadow-2xl text-color-white mr-6 my-10 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                            Get Started
                        </Button>
                        </div>

                    </div>
                    <div className="mx-20">
                        <Image 
                            src="/digitaltransformation.png"
                            width={350}
                            height={350}
                            alt="Get Started Today!"
                        />
                    </div>
                </div>
            </div>

 

        </main>
    )
}
