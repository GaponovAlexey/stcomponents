import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from './Flex'
import { Line } from './Line'

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: nine;
  color: ${(props) => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }

`

export const Console = ({ color, ...props }) => {
  const [lines, setlines] = useState(['C/users/Alexey>'])

  const onKeyPress = e => {
    if(e.charCode == 13) {
      setlines([...lines, 'C/users/Alexey>'])
    }
  }
  return (
    <Flex>
      <Flex direction={'column'} margin='0 10px'>
        {lines.map((line) => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  )
}
