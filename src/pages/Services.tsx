import {Button, CardBody, CardFooter} from "@nextui-org/react";
import dynamic from "next/dynamic";

import Image from 'next/image'

export default function Services() {

const Card = dynamic(() => import("@nextui-org/react").then((mod) => mod.Card), {
  ssr: false,
});

    const list = [
        {
            title: "IT Consultancy",
            description: "Expert advice for your IT needs",
            image: "/ITConsultancy.png",
            price_description: "Competitive consulting fees"
        },
        {
            title: "Software Development",
            description: "Customized solutions for your business",
            image: "/SoftwareDevelopment.png",
            price_description: "Affordable pricing"
        },
        {
            title: "E-commerce Solutions",
            description: "Boost your online sales",
            image: "/E-commerceSolutions.png",
            price_description: "Competitive pricing"
        },
        {
            title: "Mobile App Development",
            description: "Reach your customers on the go",
            image: "/MobileAppDevelopment.png",
            price_description: "Flexible pricing options"
        },
        {
            title: "Web Design",
            description: "Create a stunning online presence",
            image: "/WebDesign.png",
            price_description: "Affordable rates"
        },
        {
            title: "Machine Learning Solutions",
            description: "Harness the power of data",
            image: "/MachineLearningSolutions.png",
            price_description: "Customized pricing"
        }
    ]
    return(
        <main>
            <div>
                <h1 className="text-3xl font-bold my-8 text-center "> 
                Our Services 
                </h1>
            </div>
            <div className="my-10 mx-80 grid grid-cols-3 ">
                {
                    list.map((item, index) => ( 
                        <Card className="hover:scale-125 transition duration-300 delay-150 hover:delay-1200 rounded-2xl border-2 mb-10 w-60 " shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody  className=" shadow-lg shadow-blue-300/40 ">
                                <Image
                                    className="flex items-center h-600 mb-4 rounded-2xl mt-4" 
                                    src={item.image}
                                    width={250}
                                    height={500}
                                    alt="Get Started Today!"
                                />
                                <p className="mb-2 ">{item.title}</p>
                                <p className="mb-2 text-start text-sm/4 ">{item.description}</p>
                                <b className="h-600 mb-10 text-default-500" >{item.price_description}</b>
                            </CardBody>
                        </Card>
                    ))
                }
            </div>
            <div className="text-sm rounded-s-full font-bold  text-center">
            <Button className="font-sans rounded-2xl h-10 w-40 shadow-2xl text-color-white mr-6 text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-800">
                Learn More
            </Button>
            </div>
    </main>
    )
}