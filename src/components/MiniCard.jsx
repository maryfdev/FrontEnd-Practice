import React from 'react'
import { styled } from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 150px;
    -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.58);
    margin-top: 30px;
`
const Image = styled.img`
    width:15px;
`
const Text = styled.p`
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
`

const MiniCard = () => {
  return (
    <>
      <Container>
         <Image src = {Search}></Image>
         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          sit amet consectetur adipisicing elit</Text>
      </Container>  
    </>
  )
}

export default MiniCard