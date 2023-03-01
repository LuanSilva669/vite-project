import styled from "styled-components";

export const Information = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 margin-top: 16px;
 margin-bottom: 16px;

`

export const Title = styled.h1`
 font-family: Cattedrale-Demo;
        color: white;
        font-size: 90px;
        display: flex;
        margin: 0;
` 

export const Description = styled.h2`
 font-family: cinzel;
        align-items: center;
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 32px;  
        flex-wrap: wrap;
        color: white;
        margin: 0;
`

export const Image = styled.img`
    height: 300px;
`

export const Line = styled.div`
     width: 100px;
    height: 2px;
    background: white;
    width: 400px;

    &.reverse {
        align-self: flex-end;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    background: #39014B;
    height: 100vh;
    display: flex;
    flex: column;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
`;



