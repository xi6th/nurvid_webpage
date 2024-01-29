import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {NavBartheme} from "../components/nabar";


export default function Navpage  () {
    return(        
        <Navbar shouldHideOnScroll className="rounded-3xl w-85 border-2 mx-40 my-10 shadow-lg shadow-blue-300/40">
            <NavbarBrand>
                <NavBartheme />
                <p className="font-bold text-inherit"> f9matrix </p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Product
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>



                <NavbarItem>
                    <Button className="ml-80 mr-6">
                        Login
                    </Button>
                </NavbarItem>
                <NavbarItem className="">
                    <Button as={Link} className="color-blue" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
