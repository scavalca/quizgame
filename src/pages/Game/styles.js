import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Header = styled.header`
    font-size: 2.6rem;
    text-align: center;
    margin: 80px 0;
`;

export const Question = styled.article`
    display: block;
    padding: 0 50px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border-radius: 17px;
    font-size: 2.6rem;

    margin: 30px;
    width: 55%;
`;

export const Answers = styled.form`
    padding: 0 50px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
    border-radius: 17px;
    font-size: 1.8rem;

    margin: 30px;
    width: 35%;

    button {
        margin-top: 32px;
    }
    label {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
    }
`;

export const Radio = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    margin-right: 8px;
    :before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    margin: 1px;
    background-color: #ecf0f3;
    border: 1px solid #a6bba8;
    border-radius: 3px;
    }
    :hover:before {
    border-width: 2px;
    margin: 0;
    }
    :checked:before {
    background-color: #a6bba8;
    border-width: 2px;
    margin: 0;
    }
    :checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid #ecf0f3;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 7px;
    }
`;
