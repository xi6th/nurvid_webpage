
import {Link, Button} from "@nextui-org/react";
import Image from 'next/image'


export default function InnovativeSolutions ()  {
    return(
        <main>
            <div className="rounded-3xl w-85 mt-40  my-20 mx-20 grid grid-cols-2 items-center gap-2  justify-center">
            <div className="mx-20">
                    <Image 
                        src="/innovation_solution1.png"
                        width={350}
                        height={350}
                        alt="Get Started Today!"
                    />
                </div>

                <div className="mx-20">
                <p className="text-sm font-bold my-4">
                Innovative Solutions
                </p>
                <h1 className="text-3xl font-bold my-2 "> 
                Safeguarding your <br/>
                data and operations. 
                    </h1>
                    <p className="text-sm">
                    We prioritize the security of your data and utilize<br/>
                     advanced encryption protocols toensure the safety<br/> 
                    of your files in the cloud. Rest assured that your <br/>
                    data is protected with us. <br/>
                    </p>
                    <div>
                    <Button className="font-sans rounded-2xl w-40 h-10 shadow-2xl text-color-white mr-6 my-10 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                        Try Now
                    </Button>
                    </div>

                </div>

                {/* section 2 of the innovation page */}

                <div className="mt-20 mx-20 ">
                    <p className="text-sm font-bold my-4">
                    Cost-Effective Solutions
                    </p>
                    <h1 className="text-3xl font-bold my-2 "> 
                    Optimize your business <br/>
                    with smart cost-saving. 
                    </h1>
                    <p className="text-sm">
                    Our powerful tools and analytics help you reduce costs and save money <br/>
                    on your business operations. With our expertise in machine learning <br/>
                    and optimization algorithms, we analyze your workflows and identify areas <br/>
                    for improvement.
                    </p>
                    <div>
                    <Button className="font-sans rounded-2xl w-40 h-10 shadow-2xl text-color-white mr-6 my-10 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                        Try Now
                    </Button>
                    </div>

                </div>
                <div className="mx-40 pb-30">
                    <Image 
                        src="/innovation_solution2.png"
                        width={350}
                        height={350}
                        alt="Get Started Today!"
                    />
                </div>

            </div>
 

        </main>
    )

}