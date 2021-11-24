import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Foot = styled.div`
  display: flex;
  color: black;
  background-color: grey;
  justify-content: end;
`


export const Footer = () => {
  return (
    <Foot>
      <Link href='https://github.com/kekelberi/stcomponents' >rep</Link>
    </Foot>
  )
}
