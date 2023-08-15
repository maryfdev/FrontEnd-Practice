import React from 'react'
import { styled } from 'styled-components'
import map from '../img/map.png'
import phone from '../img/phone.png'
import send from '../img/send.png'



const Container = styled.div`
    height: 90%;
    background: url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png');
`
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FormContainer = styled.div`
    width: 50%;
`
const Title = styled.h1`
   margin:50px;
   margin-top: 0;
   margin-left: 120px;
`
const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeftForm =styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const RightForm =styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
    margin-right: 20px;
    border-radius: 10px;
    border:1px solid #9f9e9e;
`
const TextArea = styled.textarea`
    width: 200px;
    height: 50%;
    padding: 20px;
    border-radius: 10px;
    border:1px solid #9f9e9e;
`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    font-size: 15px;
`
const AddressContainer =styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Address = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Image = styled.img`
    width:20px;
    margin-right: 50px;
`
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
`
const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>Questions? <br/> Let's Get In Touch</Title>
                <Form> 
                    <LeftForm>
                        <Input placeholder='Name'></Input>
                        <Input placeholder='Email'></Input>
                        <Input placeholder='Subject'></Input>
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='Your Message'></TextArea>
                        <Button>Submit</Button>
                    </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <Address>
                    <Image src={map}/>
                    <Text>123 Park Avenue St., New York, USA</Text>
                </Address>
                <Address>
                    <Image src={phone}/>
                    <Text>+1 631 1234 5678</Text>
                    <Text>+1 326 1234 5678</Text>
                </Address>
                <Address>
                    <Image src={send}/>
                    <Text>info@maryamdeveloper.ca</Text>
                    <Text>sales@maryamdeveloper.ca</Text>
                </Address>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact