import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className={""}>
        <ul>
          <Link className={""}href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
