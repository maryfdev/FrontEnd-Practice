import React from 'react'
import { styled } from 'styled-components'
import App from '../img/Papp.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    position: relative;
`
const Left = styled.div`
    width: 70%;
    height: 100vh;
`
const Image = styled.img`
    width: 100%;
    height: 100vh;
`
const Right = styled.div`
    width: 50%;
    height:100vh;
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
`
const Title = styled.span`
    color:#333;
    font-size:70px;
`
const SubTitle = styled.span`
    color:#5f5e5e;
    font-size: 25px;
    margin-top: 20px;
    font-weight: bold;
`
const Desc = styled.p`
    color:#333;
    font-size: 20px;
    margin-top: 20px;
`
const Button = styled.button`
    background-color: darkblue;
    color:white;
    margin-top: 20px;
    padding:10px;
    width: 150px;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 20px;
`

const Features = () => {
  return (
    <Container>
        <Left>
            <Image src={App}></Image>
        </Left>
        <Right> 
            <Title>
            <b>Good</b> design
            <br />
            <b>Good</b> business
            </Title>
            <SubTitle>We know that good design means good business.</SubTitle>
            <Desc>
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly, achieve
            marketing goals, and look fantastic.
            </Desc>
            <Desc>
            We care your business and guarantee you to achieve marketing goals.
            </Desc>
            <Button>Learn More</Button>   
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Features