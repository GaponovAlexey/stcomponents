import Head from 'next/head'
import styled, { keyframes } from 'styled-components'
import { Footer } from './base/Footer'
import { Header } from './base/Header'
import MyApp from './_app'

export default function Home() {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    font-size: 1.2rem;
  `
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `
  return (
    <div>
        <Header />
      <div className='content'>
        <Wrapper>
          <Rotate>Hello World!</Rotate>
        </Wrapper>
      </div>
        <Footer />
    </div>
  )
}
