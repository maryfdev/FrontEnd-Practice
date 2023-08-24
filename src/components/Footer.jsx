import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 10%;
    background-color: #989696;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px;

    @media only screen and (max-width: 480px){
        padding: 10px;
    }
`
const List = styled.ul`
    list-style: none;
    display: flex;
`
const ListItem = styled.li`
    margin-right: 20px;

    @media only screen and (max-width: 480px){
        font-size: 10px;
    }
`
const CopyRight = styled.span`
    font-size: 16px;
    @media only screen and (max-width: 480px){
        font-size: 10px;
    }
`



const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <List>
                <ListItem>Support</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>About me</ListItem>
            </List>
            <CopyRight>Credit to Lama Tutorial. Developed by Maryam Developer Ⓒ</CopyRight>
        </Wrapper>
    </Container>
  )
}

export default Footer