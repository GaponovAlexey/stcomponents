import React from 'react'
import styled from 'styled-components'
import { Button } from './components/Button'
import { Console } from './components/Console'
import { Flex } from './components/Flex'
import { Title } from './components/Title'

const AppWraper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`


export const Main = () => {
  return (
    <AppWraper>
      <Flex justify='center'>
        <Title color={'green'}>console cmd 2021.Ulbi TV</Title>
      </Flex>
      <Flex direction='column' margin={'10px 0'} >
        <Console  />
        <Button primary background='black'  color={'green'}  >Send</Button>
      </Flex>
    </AppWraper>
  )
}
