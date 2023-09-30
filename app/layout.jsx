import './globals.css'

export const metadata = {
  title: 'Web Developer Foundations Programme',
  description: 'Give yourself a great start to mastering the skill of web development by conquering the fundamentals first.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
