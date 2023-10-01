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
        <nav className='bg-primary text-white p-4'>
          <div className='flex justify-between items-center w-4/5 mx-auto'>
            <Link href="/" className='font-black'>
              <Image src={logo} alt="WDF Logo" />
            </Link>

            <ul className='flex gap-4 items-center'>
              <li><Link href='/' className='btn btn-sec'>Leave a review</Link></li>
              <li><Link href='/' className='btn btn-pri-light'>Get resources</Link></li>
            </ul>
          </div>
        </nav>
        <Banner />
        {children}
      </body>
    </html>
  )
}
