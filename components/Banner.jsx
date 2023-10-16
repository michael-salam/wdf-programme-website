import Link from "next/link";

const Banner = () => {
    return (
        <p className="bg-accent text-white py-2 px-4 text-center text-sm">
            The first cohort of the Web Developer Foundations programme was concluded
            on the 8th of October, 2022. However, you can still{" "}
            <Link href="/get-resources" className="hover:text-primary font-bold underline transition-all">
                get all the recordings and resources
            </Link>{" "}
            at an affordable rate.
        </p>
    );
};

export default Banner;
