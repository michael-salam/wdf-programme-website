import Image from "next/image"

import { features } from "@/data"

import accessibilityIcon from "@/assets/icon-accessibility.svg"
import gitIcon from "@/assets/icon-git.svg"
import gridIcon from "@/assets/icon-grid.svg"
import htmlIcon from "@/assets/icon-html.svg"
import mindIcon from "@/assets/icon-mind.svg"
import responsiveIcon from "@/assets/icon-responsive.svg"
import taskIcon from "@/assets/icon-task.svg"
import webIcon from "@/assets/icon-web.svg"
import cssIcon from "@/assets/icon-css.svg"
import Link from "next/link"
import Footer from "@/components/Footer"

const GetResources = () => {
    return (
        <main>
            <header className="text-center py-[10vh] w-[90%] md:w-4/5 mx-auto">
                <h1>Get All Resources from the Web Developer Foundations Programme</h1>
                <p className="text-xl max-w-[60ch] mt-4 mx-auto">Request for all the recordings, tasks, code, websites, videos and guides used during the web developer foundations programme, as well as a host of other perks!</p>
                <Link href="/" className="btn btn-pri-dark mt-4 px-8 py-4 text-xl big-shadow">Get first 3 lessons FREE</Link>

                <div className="flex flex-col sm:flex-row gap-8 mt-16 text-primary">
                    <div className="p-8 bg-[#ebebeb] rounded-md flex-1 flex flex-col justify-between">
                        {/* <h2 className="font-black">Basic</h2> */}
                        <ul className="my-4 text-left">
                            {features.map(item => (
                                <li className="bg-white p-4 my-2 rounded-md flex items-center gap-4" key={item.id}>
                                    {/* {item.isPremium ? <span className="text-red-600 font-black">&#128473;</span> : <span className="text-green-600 font-black">&#10003;</span>} */}
                                    <span>{item.feature}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="font-black text-3xl">&#8358;20,000</p>
                        <a href="/" className="btn btn-pri-dark text-xl p-4 mt-4">I want this</a>
                    </div>

                    {/* <div className="p-8 bg-primary rounded-md flex-1 flex flex-col justify-between">
                        <h2 className="font-black text-white">Premium</h2>
                        <ul className="my-4 text-left">
                            {features.map(item => (
                                <li className="bg-white p-4 my-2 rounded-md flex items-center gap-4" key={item.id}>
                                    <span className="text-green-600 font-black">&#10003;</span>
                                    <span>{item.feature}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="font-black text-3xl text-white">&#8358;20,000</p>
                        <a href="/" className="btn btn-pri-light text-xl p-4 mt-4">I want this</a>
                    </div> */}
                </div>
            </header>

            <section className="py-[10vh] bg-[#ebebeb]">
                <h2 className="font-bold text-center">Programme Content</h2>
                <div className="grid gap-8 mt-8 auto-grid-template text-left w-[90%] md:w-4/5 mx-auto">
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={webIcon} alt="Globe" className="w-8" /> <span>Understand the Web</span></h3>
                        <p>Explore the intricate layers of the internet and decode its workings.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={htmlIcon} alt="HTML5" className="w-8" /> <span>HTML and Semantics</span></h3>
                        <p>Learn to structure web content effectively with HTML while emphasizing the importance of semantic markup.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={mindIcon} alt="Mind" className="w-8" /> <span>Mindset Shift</span></h3>
                        <p>Transform your approach to problem-solving and learning in the world of web development.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={accessibilityIcon} alt="Accessibility" className="w-8" /> <span>Accessibility</span></h3>
                        <p>Ensure that your web creations are welcoming and usable for all individuals, regardless of their abilities.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={cssIcon} alt="CSS3" className="w-8" /> <span>CSS Fundamentals</span></h3>
                        <p>Master the art of styling web pages using Cascading Style Sheets.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={gridIcon} alt="Grid" className="w-8" /> <span>CSS Grid and Flexbox</span> </h3>
                        <p>Discover the power of modern layout techniques in web design.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={gitIcon} alt="Git" className="w-8" /> <span>Git and GitHub</span></h3>
                        <p>Harness the tools of version control to collaborate and manage your code efficiently.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={responsiveIcon} alt="Responsive website" className="w-8" /> <span>Responsive Web Design</span></h3>
                        <p>Create web interfaces that adapt gracefully to various screen sizes and devices.</p>
                    </div>
                    <div>
                        <h3 className="flex items-center mb-2 gap-2 font-bold text-lg"><Image src={taskIcon} alt="Task" className="w-8" /> <span>Project-Based Learning</span></h3>
                        <p> Gain practical skills and knowledge by working on real-world web projects.</p>
                    </div>
                </div>
            </section>

            <section className="my-[15vh] text-center w-[90%] md:w-4/5 mx-auto">
                <h2 className="font-bold">What are you waiting for?</h2>
                <Link href="/" className="btn btn-pri-dark mt-4 px-8 py-4 text-xl">Get first 3 lessons FREE</Link>
            </section>

            <Footer />
        </main>
    )
}

export default GetResources