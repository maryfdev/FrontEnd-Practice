import React, { useState } from 'react'
import { styled } from 'styled-components'
import Pretty from '../img/Pretty-Woman.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    width: 50%;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100vh;
    display: ${(props) => props.open && 'none'};
`
const Video = styled.video`
    height: 300px;
    width: 400px;
    position: absolute;
    top: 40%;
    left: 10%;
    display: ${(props) => !props.open && 'none' };
`
const Rigth = styled.div`
    width: 50%;
    padding: 20px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    margin-top: 7%;
`

const Title = styled.h1`
    font-weight: bold;
`
const Desc = styled.p`
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
    color:#302f2f;
`
const MiniCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    padding-right:20px;
`
const Button = styled.button`
    width: 180px;
    background-color: darkblue;
    color: white;
    padding: 15px 5px;
    border: none;
    border-radius: 10px;
    margin-top: 50px;
    font-size: 20px;
    cursor:pointer;
`
const Icon = styled.img`
   width:15px; 
   margin-right: 5px;
`
const Service = () => {

  const[open,setOpen] = useState(false);

  return (
    <>
        <Container>
            <Left>
                <Image src={Pretty} open={open}></Image>
                <Video 
                    src="https://youtu.be/9_s_Essow6s"
                    open={open} 
                    autoPlay 
                    loop
                    controls
                />
            </Left>
            <Rigth>
                <Wrapper>
                    <Title>Simply start your startup with us</Title>
                    <Desc>
                    We provid best design, content and development 
                    for your website to grow your startup and build a successful business
                    </Desc>
                    <MiniCardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </MiniCardContainer>
                    <Button onClick={() => setOpen(true)}><Icon src={Play}></Icon> How it works </Button>
                </Wrapper>
            </Rigth>
        </Container>
    </>
  )
}

export default Service