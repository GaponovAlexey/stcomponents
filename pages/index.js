import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
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
  color: blue;
  background-color: #757575;
}
`

const theme = {
  colors: {
    primary: 'blue',
    secondary: 'red',
  },
  media: {
    phone: '(max-width: 425px',
    table: '(max-width: 768px) and (min-width: 425px)',
  }
}



export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme} >
        <Global />
        <Head>
          <title>styled-components</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='robots' content='all' />
          <p className='head'> hello from simulator console</p>
        </Head>
        <div>
          <Main />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  )
}
