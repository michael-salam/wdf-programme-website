import Image from 'next/image'
import Link from 'next/link'
// load font
import { League_Spartan } from "next/font/google"
// load styles
import './globals.css'
// import images
import logo from "../assets/wdf-logo.svg"
import Banner from '@/components/Banner'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Developer Foundations Programme',
  description: 'Give yourself a great start to mastering the skill of web development by conquering the fundamentals first.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={leagueSpartan.className}>
      <body>
        <div className='sticky top-0 z-50'>
          <nav className='bg-primary text-white p-4'>
            <div className='flex justify-between items-center flex-wrap gap-4 w-[95%] sm:w-4/5 mx-auto'>
              <Link href="/" className='font-black'>
                <Image src={logo} alt="WDF Logo" />
              </Link>

              <ul className='flex gap-4 items-center text-sm sm:text-base'>
                <li><Link href='/login' className='btn btn-sec py-1 px-4'>Leave a review</Link></li>
                <li><Link href='/get-resources' className='btn btn-pri-light py-1 px-4'>Get resources</Link></li>
              </ul>
            </div>
          </nav>
          {/* <Banner /> */}
        </div>

        {children}
      </body>
    </html>
  )
}
