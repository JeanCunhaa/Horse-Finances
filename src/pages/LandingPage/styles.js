import styled from 'styled-components'
import {Link} from "react-router-dom";




export const MainLoginContainer = styled.div`
    width: 90vw;
    height: 95vh;
    background: #201b2c;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
      }
`;

export const LeftLoginContainer = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        color: #77ffc0;
    }

    img{
        margin-top: 5rem;
    }
    @media (max-width: 768px) {
        width: 50%;
        height: 100%;
        margin-top: 5rem;
      }

`;

export const RightLoginContainer = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        
      }

`;

export const CardLoginContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;

    h1{
        color: #00ff88;
        font-weight: 1000;
        margin: 0;
        padding-bottom: 2rem;
        font-style: italic;
        letter-spacing: 2px;
    }

    @media (max-width: 768px) {
        width:100%;
    }

`;

export const TextFieldContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 2rem;

    input ::placeholder{
        color: #f0ffff94;
    }

`;

export const CadastroContainer = styled.label`
    color: #f0ffffde;
    margin-bottom: 10px;
`;


export const BtnCadastroContainer = styled(Link)`
    width: 100%;
    padding: 16px 0px;
    margin: 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #2b134b;
    background: #00ff88;
    cursor: pointer;
    box-shadow: 0px 10px 40px -12px #00ff8052;
    font-family: Noto Sans, sans-serif;
    text-decoration: none;
    text-align: center;

`;

export const BtnEntrarContainer = styled(Link)`
    width: 100%;
    padding: 16px 0px;
    margin: 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #2b134b;
    background: #00ff88;
    cursor: pointer;
    box-shadow: 0px 10px 40px -12px #00ff8052;
    font-family: Noto Sans, sans-serif;
    text-decoration: none;
    text-align: center;

`;

export const EntrarContainer = styled.label`
    color: #f0ffffde;
    margin-bottom: 10px;
`;

export const FooterContainer = styled.label`
    background-color: #2f2841;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0.8rem;
    color: #00ff88;
`;

