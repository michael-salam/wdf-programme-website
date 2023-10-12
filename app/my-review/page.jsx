"use client"

import Image from "next/image";

import goldStar from "@/assets/gold-star.svg";
import emptyState from "@/assets/empty-state-illustration.svg";
import { useState } from "react";
import ReviewForm from "@/components/ReviewForm";

const MyReview = () => {
    const [isShowingForm, setIsShowingForm] = useState(false)
    const [review, setReview] = useState({
        message: "This programme was everything I've been looking for. Easy to understand, personalised guidance, and so much more. Wonderful experience.",
        stars: "2",
    })
    return (
        <main className="w-[90%] md:w-4/5 mx-auto my-[10vh]">
            <p className="font-black text-4xl mb-8 text-neutral-text-dark">John Doe</p>
            {!review.message ? (
                <div>
                    <div className="text-center w-1/4">
                        <Image className="w-full" src={emptyState} alt="Empty state illustration" />
                        <p className="font-bold text-2xl">No review yet</p>
                    </div>
                    <button className="btn btn-pri-dark mt-8 px-4 py-2" onClick={() => setIsShowingForm(true)}>Leave one now</button>
                </div>
            ) : (
                <div className="text-xl max-w-[60ch]">
                    <p>{review.message}</p>
                    <div className="flex items-center mt-2 gap-1">
                        {
                            [...Array(5)].map((star, index) => {
                                const currentRating = index + 1
                                return (
                                    <Image className={currentRating > review.stars && "opacity-30"} src={goldStar} alt="Gold star" />
                                )
                            })
                        }
                    </div>
                    <button className="btn btn-pri-dark mt-8 px-4 py-2" onClick={() => setIsShowingForm(true)}>Edit</button>
                </div>
            )}

            {isShowingForm && <ReviewForm setIsShowingForm={setIsShowingForm} review={review} setReview={setReview} />}
        </main>
    )
}

export default MyReview