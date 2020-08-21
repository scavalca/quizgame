import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    outline: solid red 1px;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
`;

export const Label = styled.label`
margin-bottom: 16px;
font-weight: bold;
font-size: 1.6rem;
text-transform: uppercase;
letter-spacing: 0.02em;
color: #2A2A2A;
text-align: center;
`;

export const Input = styled.input`
width: 100%;
margin-top: 16px;
padding: 16px;
box-shadow: 18px 18px 30px #d1d9e6, inset 10px 10px 30px rgba(255, 255, 255, 0.4);
background-color: #ECF0F3;
border: none;
border-radius: 8px;
font-weight: normal;
font-size: 1.8rem;
letter-spacing: 0.02em;
color: #2A2A2A;
::placeholder {
color: #a2a2a2;
}
:focus {
border: 2px solid #a6bba8;
}
`;
