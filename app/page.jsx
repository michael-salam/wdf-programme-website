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

      {/* sales letter */}
      <section className="py-[10vh] px-4">
        <div className="max-w-[60ch] mx-auto text-xl">
          <h2 className="font-bold mb-8">Dear beginner web developer,</h2>
          <p className="mb-4">This may well be the most important thing you will read at this stage of your career.</p>
          <p className="mb-4">By the time you finish reading this letter, you will have the blueprint to getting through the beginner stage of web development as quickly as possible, yet with such a deep understanding that you will not constantly have to go back to basics.</p>
          <p className="mb-4">In October of 2020, I decided to learn web development. </p>
          <p className="mb-4">I was so excited and driven by the fact that I could write some code and see the results instantly, right in my face!</p>
          <p className="mb-4">"I did that", I would whisper under my breath, trying to keep myself from screaming. It was amazing, and I would spend all day learning and building. I pity my laptop at the time. It saw <span className="italic">shege</span> in my hands, for real.</p>
          <p className="mb-4">That was NOT enough though, and I'll tell you why. Let me introduce myself first.</p>
          <p className="mb-4">My name is Michael Salam. I am a web developer, a writer, and an educator. I am a community manager as well, and created a web developer community for people like you, called BetterDev, which grew from 0 to 650+ members in 7 months.</p>
          <p className="mb-4">Three years of learning and teaching web development both personally and through community has brought me to this point: Speaking to you through this letter to show you what I have realised with beginners over the years.</p>
          <p className="mb-4">THEY RUSH THROUGH THE BASICS</p>
          <p className="mb-4">I did it, and I still see many others doing the same thing.</p>
          <p className="mb-4">So many beginners do not understand foundational concepts, and skip some of them entirely. Because of this, they have knowledge gaps that MUST EVENTUALLY BE FILLED.</p>
          <p className="mb-4">I'm talking about things like responsive design, performance optimisation, security, version control, basic command line usage, debugging skills, accessibility, and many more.</p>
          <p className="mb-4">Neglecting the fundamentals of any skill WILL come back to haunt you later in your career. You will find yourself coming back to relearn concepts, running in circles, and never truly leaving the "beginner" stage.</p>
          <p className="mb-4">DO NOT BE AFRAID THOUGH!</p>
          <p className="mb-4">This realisation has led me to create a 6-week live online programme to solve just that!</p>
          {/* <p className="mb-4">I made it so that there would be live classes so that those enroled would be able to ask questions and solve problems with me in real time. Sometimes, a tutorial video is not enough, and a live chat works best. This programme brought that.</p> */}
          <p className="mb-4">The programme was designed such that beginners would not need to keep going back to learn concepts over again bacause everything they need to know as beginnners would be taken care of.</p>
          <p className="mb-4">We had 3 live online classes every week for 6-weeks, where we learned new concepts, tackled various tasks, and built projects together.</p>
          <p className="mb-4">I started a blog to complement what students were learning.</p>
          <p className="mb-4">Hand-picked YouTube videos were shared to help students understand certain concepts.</p>
          <p className="mb-4">Students could ask questions in real time and gain better understanding.</p>
          <p className="mb-4">It was a wonderful experience and everyone loved it.</p>
          <p className="mb-4">That programme is over.</p>
          <p className="mb-4">BUT!</p>
          <p className="mb-4">I have brought you here to benefit from the immense value the programme provided  .</p>
          <p className="mb-4">All the classes were recorded, and all the tasks/assignments, blog posts, YouTube videos and other resources were archived.</p>
          <p className="mb-4">I have created a package containing all these and more for anyone else who would want to be part of this experience.</p>
          <p className="mb-4">Just like during the live programme, I will not be giving you the resources and leaving you to figure everything out on your own. If I did that, it would be just another set of web development tutorial videos.</p>
          <p className="mb-4">Every week for 6 weeks, I will hop on a live meeting with you to interact, ask questions, give advice, build projects and more!</p>
          <p className="mb-4">You will get yourself access to a mentor who will pull you through that beginner stage so that you won't have to go back anymore.</p>
          <p className="mb-4">So, my dear beginner, with the <span className="font-bold">Web Developer Foundations Programme</span>, you will never be left in the dark as to what you should know as a beginner anymore.</p>
          <p className="mb-8">Strong foundations lead to a strong career. Click the button below to get in and take the first step to increasing your value in the marketplace!</p>
          <p className="text-right mb-4">To your success,</p>
          <p className="text-right font-bold">Michael Salam</p>
        </div>
      </section>

      <section className="bg-[#ebebeb] py-[10vh] px-4 text-center">
        <div className="max-w-[85%] sm:max-w-[60%] mx-auto">
          <h2 className="font-bold mb-4">
            What are you waiting for?
          </h2>
          <p className="text-xl">
            Get access now! Let's give you that career headstart you need.
          </p>
        </div>

        <Link
          href="/get-resources"
          className="big-shadow btn btn-pri-dark text-2xl mt-8 py-3 px-6"
        >
          Get resources
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
