import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import  Button  from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
    font-size:30px;
    font-weight:600;
    color: white;
    
`;



const StyledApp = styled.div`
    background-color: red;
    padding: 2px;
`;

export const App = () => {
  return (
    <>
    <GlobalStyles/>
    <StyledApp>
        <H1> The wild oasis</H1>
        <Button onClick={()=> alert("Pikachu")}>Check in</Button>
        <Button onClick={()=> alert("Pikachu")}>Check in</Button>
        <Input type='number' placeholder='Number of guests'/>

    </StyledApp>
    </>
    
  )
}