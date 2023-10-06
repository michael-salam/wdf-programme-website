import Link from "next/link"
import logo from "../assets/wdf-logo.svg"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="flex items-center justify-between bg-primary text-white p-[1%]">
            <Link href="/" className='font-black'>
                <Image src={logo} alt="WDF Logo" />
            </Link>
            <span>&copy; 2023</span>
        </div>
    )
}

export default Footer