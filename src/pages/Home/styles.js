import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    outline: solid red 1px;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
`;

export const Question = styled.div`
    border: solid red 5px;
    display: block;
    padding: 0 50px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Answers = styled.ol`
    border: solid red 5px;
    padding: 0 50px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
