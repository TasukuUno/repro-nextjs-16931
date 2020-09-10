import Link from 'next/link'
import HelloWorld from '../components/hello-world'

export default function Home() {
  return (
    <div className="app">
      <HelloWorld />
      <h1>[OK] go to error page via client rendering</h1>
      <Link href='/abc'><a>/abc</a></Link>

      <h1>[NG] go to error page via server rendering</h1>
      <a href='/abc'>/abc</a>

      <h1>[OK] go to 404</h1>
      <Link href='/def'><a>/def</a></Link>
    </div>
  )
}
