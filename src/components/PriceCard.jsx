import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.58);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
`
const PriceContainer = styled.div`
    display: flex;
    align-items:center;
`
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;;
`
const Type = styled.button`
    background-color: white;
    color: crimson;
    border-radius: 20px;
    padding: 15px;
    border-color: crimson;
    margin: 20px 0;
    font-size: 15px;
`
const List = styled.ul`
    list-style: none;
`
const ListItem = styled.li`
    padding: 10px 0;
`
const Button = styled.button`
    background-color: darkblue;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
`

const PriceCard = (props) => {
  return (
    <Container>
        <PriceContainer>
            $<Price>{props.price}</Price>/month
        </PriceContainer>
        <Type>{props.type} Plan</Type>
        <List>
            <ListItem>200 Hand-Crafted Templates</ListItem>
            <ListItem>Exclusive Support</ListItem>
            <ListItem>50+ PreBuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>
        </List>
        <Button>Join Now</Button>
    </Container>
  )
}

export default PriceCard