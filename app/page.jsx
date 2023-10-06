"use client"
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// import images
import goldStar from "../assets/gold-star.svg";
import { faqs } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  const [visbleFAQ, setVisbleFAQ] = useState(null)

  const handleShowFAQ = (faqID) => {
    faqID !== visbleFAQ ? setVisbleFAQ(faqID) : setVisbleFAQ(null)
  }
  return (
    <main>
      <header className="text-center py-24 w-4/5 mx-auto">
        <h1 className="font-black mb-4">
          The Web Developer Foundations Programme
        </h1>
        <p className="text-xl max-w-[60ch] mx-auto">
          Give yourself a great start to mastering the skill of web development
          by conquering the fundamentals first.
        </p>

        <div className="grid grid-cols-3 gap-4 my-16 text-black">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-xl font-bold mt-4">Dev Newton</p>
          </div>

          <div className="header-cta">
            <Link
              href="/"
              className="big-shadow btn btn-pri-dark text-2xl w-full py-5"
            >
              Get resources
            </Link>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-xl font-bold mt-4">Dev Nwafor</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-xl font-bold mt-4">Dev Freedom</p>
          </div>

          <div>
            <p>
              thisLorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-xl font-bold mt-4">Dev Sophia</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              impedit, quos consectetur quam animi molestias?
            </p>
            <div className="flex items-center justify-center mt-2 gap-4">
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
              <Image src={goldStar} alt="Gold star" />
            </div>
            <p className="text-xl font-bold mt-4">Dev Funmilayo</p>
          </div>
        </div>

        <Link
          href="/"
          className="underline text-2xl text-primary hover:font-bold transition-all"
        >
          More reviews
        </Link>
      </header>

      <section className="bg-[#ebebeb] py-16 text-center">
        <h2 className="font-bold">
          Haven’t left a review yet? Log in to leave one now!
        </h2>
        <p className="text-2xl">
          If you were part of the first cohort, you can leave a review.
        </p>

        <Link
          href="/"
          className="big-shadow btn btn-pri-dark text-2xl mt-8 py-3 px-6"
        >
          Leave a review
        </Link>
      </section>

      <section className="my-24 w-4/5 mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-bold">FAQs</h2>
          <p className="text-2xl">Click on a question to expand</p>
        </div>

        {
          faqs.map(faq => (
            <div key={faq.id} className="mb-4 last:mb-0">
              <button onClick={() => handleShowFAQ(faq.id)} className="faq-btn flex justify-between items-center text-white transition-all w-full px-4 py-2 rounded-md bg-primary">
                <span className="font-bold text-xl">
                  {faq.question}
                </span>
                <span className="font-black text-4xl">{visbleFAQ === faq.id ? "-" : "+"}</span>
              </button>
              <p className={`${visbleFAQ === faq.id ? "block" : "hidden"} mt-4 overflow-hidden transition-all`}>
                {faq.answer}
              </p>
            </div>
          ))
        }
      </section>
      <Footer />
    </main>
  );
}
