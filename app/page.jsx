import Image from "next/image";
// import images
import goldStar from "../assets/gold-star.svg"
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-4/5 mx-auto">
      <header className="text-center py-16">
        <h1 className="font-black text-6xl mb-4">The Web Developer Foundations Programme</h1>
        <p className="text-2xl max-w-[60ch] mx-auto">Give yourself a great start to mastering the skill of web development by conquering the fundamentals first.</p>

        <div className="grid grid-cols-3 gap-4 my-16 text-black">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-2xl font-bold mt-4">Dev Newton</p>
          </div>

          <div>
            <button className="big-shadow btn btn-pri-dark text-2xl w-full h-1/2">Get resources</button>
          </div>


          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-2xl font-bold mt-4">Dev Nwafor</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-2xl font-bold mt-4">Dev Freedom</p>
          </div>

          <div>
            <p>
              thisLorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-2xl font-bold mt-4">Dev Sophia</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-2xl font-bold mt-4">Dev Funmilayo</p>
          </div>
        </div>

        <Link href="/" className="underline">More reviews</Link>
      </header>
    </main>
  );
}
