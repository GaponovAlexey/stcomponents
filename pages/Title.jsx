import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
color: ${props => props.color};
`

export const Title = ({children, ...props}) => {
  return (
    <StyledTitle {...props} >
      {children}
    </StyledTitle>
  )
}
