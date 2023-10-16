"use client"
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { faqs, reviews } from "@/data";

import Footer from "@/components/Footer";

// import images
import goldStar from "../assets/gold-star.svg";

export default function LandingPage() {
  const [visbleFAQ, setVisbleFAQ] = useState(null)

  const handleShowFAQ = (faqID) => {
    faqID !== visbleFAQ ? setVisbleFAQ(faqID) : setVisbleFAQ(null)
  }
  return (
    <main>
      <header className="text-center py-[10vh] w-[90%] md:w-4/5 mx-auto">
        <h1 className="mb-4">
          The Web Developer Foundations Programme
        </h1>
        <p className="text-xl max-w-[60ch] mx-auto">
          Give yourself a great start to mastering the skill of web development
          by conquering the fundamentals first.
        </p>
        <Link
          href="/get-resources"
          className="big-shadow btn btn-pri-dark text-2xl px-16 py-4 mt-8"
        >
          Get resources
        </Link>

        <div className="grid gap-8 auto-grid-template my-[10vh] text-black">
          {
            reviews.map(review => (
              <div key={review.id} className="max-w-xs mx-auto">
                <p>
                  {review.message}
                </p>
                <div className="flex items-center justify-center mt-2 gap-1">
                  {
                    [...Array(5)].map((star, index) => {
                      const currentRating = index + 1
                      return (
                        <Image key={index} className={currentRating > review.stars ? "opacity-30" : null} src={goldStar} alt="Gold star" />
                      )
                    })
                  }
                </div>
                <p className="text-xl font-bold mt-4">{review.name}</p>
              </div>
            ))
          }
        </div>

        <Link
          href="/"
          className="underline text-2xl text-primary hover:font-bold transition-all"
        >
          More reviews
        </Link>
      </header>

      <section className="bg-[#] py-[10vh] px-4 text-center">
        <div className="max-w-[85%] sm:max-w-[60%] mx-auto">
          <h2 className="font-bold mb-4">
            Haven’t left a review yet? Log in to leave one now!
          </h2>
          <p className="text-xl">
            If you were part of the first cohort, you can leave a review.
          </p>
        </div>

        <Link
          href="/login"
          className="big-shadow btn btn-pri-dark text-2xl mt-8 py-3 px-6"
        >
          Leave a review
        </Link>
      </section>

      <section className="my-[12vh] w-[90%] md:w-4/5 mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-bold">FAQs</h2>
          <p className="text-2xl">Click on a question to expand</p>
        </div>

        {
          faqs.map(faq => (
            <div key={faq.id} className="mb-4 last:mb-0">
              <button onClick={() => handleShowFAQ(faq.id)} className="border-b border-neutral-text-light text-neutral-text-dark flex justify-between items-center gap-4 w-full">
                <span className="font-semibold sm:text-xl text-left">
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
