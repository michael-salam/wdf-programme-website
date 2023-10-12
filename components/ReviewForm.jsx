import { useState } from "react"

const ReviewForm = ({ setIsShowingForm, review, setReview }) => {
    const [reviewDetails, setReviewDetails] = useState({
        message: review.message,
        stars: review.stars
    })

    const handleSetRating = (e) => {
        setReviewDetails({ ...reviewDetails, stars: e.target.value })
    }

    const handleSubmitReview = (e) => {
        e.preventDefault()
        console.log(reviewDetails);
    }
    return (
        <>
            <div className="absolute inset-0 bg-black/10" onClick={() => setIsShowingForm(false)} />
            <form onSubmit={handleSubmitReview} className="p-8 w-[18rem] md:w-[22rem] text-black shadow-lg absolute bg-white left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-md">
                <h2 className="font-black mb-8">Leave a review</h2>

                <p>Choose rating</p>
                <div className="flex items-center justify-between mt-2 gap-2">
                    <div>
                        <label htmlFor="1" className={`px-4 py-2 text-lg btn ${reviewDetails.stars === "1" && "btn-pri-dark"}`}>1</label>
                        <input className="appearance-none" type="radio" name="rating" id="1" value="1" onChange={(e) => handleSetRating(e)} />
                    </div>
                    <div>
                        <label htmlFor="2" className={`px-4 py-2 text-lg btn ${reviewDetails.stars === "2" && "btn-pri-dark"}`}>2</label>
                        <input className="appearance-none" type="radio" name="rating" id="2" value="2" onChange={(e) => handleSetRating(e)} />
                    </div>
                    <div>
                        <label htmlFor="3" className={`px-4 py-2 text-lg btn ${reviewDetails.stars === "3" && "btn-pri-dark"}`}>3</label>
                        <input className="appearance-none" type="radio" name="rating" id="3" value="3" onChange={(e) => handleSetRating(e)} />
                    </div>
                    <div>
                        <label htmlFor="4" className={`px-4 py-2 text-lg btn ${reviewDetails.stars === "4" && "btn-pri-dark"}`}>4</label>
                        <input className="appearance-none" type="radio" name="rating" id="4" value="4" onChange={(e) => handleSetRating(e)} />
                    </div>
                    <div>
                        <label htmlFor="5" className={`px-4 py-2 text-lg btn ${reviewDetails.stars === "5" && "btn-pri-dark"}`}>5</label>
                        <input className="appearance-none" type="radio" name="rating" id="5" value="5" onChange={(e) => handleSetRating(e)} />
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="message" className="mb-2">Your thoughts</label>
                    <textarea onChange={(e) => { setReview({ ...reviewDetails, message: e.target.value }); console.log(review) }} className="p-4 border-2 border-neutral-text-dark rounded-md w-full h-[30%]" name="message" id="message"></textarea>
                </div>

                <button className="mt-4 btn btn-pri-dark w-full p-2">Submit</button>
            </form>
        </>
    )
}

export default ReviewForm