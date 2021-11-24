import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { Footer } from './components/Footer'
import { Main } from './Main'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}
.head {
  color: red;
}
`

export default function Home() {
  return (
    <div>
      <Global />
      <Head>
        <title>styled-components</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='robots' content='all' />
        <p className='head'> hello from Header</p>
      </Head>
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  )
}
