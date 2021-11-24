import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&: focus {
  outline: none
}
align-self: flex-end;
${props => props.primary && css ` 
color: ${props => props.color || 'white'};
background: ${props => props.background || 'white'};
` }
`

export const Button = (props) => {
  return (
    <StyledButton  {...props} />
  )
}
