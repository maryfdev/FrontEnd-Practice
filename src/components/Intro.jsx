import React from 'react'
import { styled } from 'styled-components'
import Girl from '../img/Girl.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc (100vh - 50px);
    padding:20px;
    display: flex;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding:150px 60px;
`

const Twrapper = styled.div`
    width:100%;
    margin-top:10px;
`
const Title = styled.h1`
    font-size: 60px;
    width: 60%;
`
const Desc = styled.p`
    width:60%;
    font-size: 20px;
    font-weight: bold;
    color:#474646;
`
const Info = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const Button = styled.button`
    padding: 20px;
    background-color: darkblue;
    color:white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    font-weight: bold;
`
const Contact = styled.div`
    width:60%;
`
const Phone = styled.h1`
    color: crimson;
`
const ContactText = styled.p`
    color:#000;
    font-size: 25px;
`

const Right = styled.div`
    width: 50%;
`
const Image = styled.img`
    width:100%;
    height: 100%;
`
const Intro = () => {
  return (
    <Container>
            <Left>
                <Twrapper>
                    <Title>Adventures in <br/> creative age</Title>
                    <Desc>Designing product and services have a real compact on the businesses. </Desc>
                </Twrapper>
                <Info>
                    <Button>
                        Start a Project
                    </Button>
                    <Contact>
                        <Phone>Call Us (012) 345 - 6789</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Girl}></Image>
            </Right>
            <AnimatedShapes/>
            
    </Container>
  )
}

export default Intro