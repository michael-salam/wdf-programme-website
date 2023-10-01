import Link from "next/link"

const Banner = () => {
    return (
        <p className="bg-accent text-white p-2 text-center">The first cohort of the Web Developer Foundations programme was concluded on the 8th of October, 2022. However, you can still <Link href="/" className="font-bold underline">get all the recordings and resources</Link> at an affordable rate.</p>
    )
}

export default Banner