import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
display: flex;
// flex-direction: 'row'};
// align-items: 'center'};
justify-content: 'space-between'};
`

export const Footer = () => {
  return (
    <Foot className='footer'>
      <div className='right'>footer</div> {' '}
      <div>rep</div>
    </Foot>
  )
}
