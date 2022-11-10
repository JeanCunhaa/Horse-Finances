import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const MainLoginContainer = styled.div`
    width: 100vw;
    height: 125vh;
    background: #201b2c;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        flex-direction: column;

        footer{
            margin-top: 8rem;
        }
      }
`;


export const RightLoginContainer = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 7rem;
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
    

`;

export const TextFieldContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 2rem;

    input{
        width:100%;
        border: none;
        border-radius;
        margin: 25px;
        padding: 15px;
        background: #514869;
        color: #f0ffffde;
        font-size: 12pt;
        box-shadow: 0px 10px 40px #00000056;
        outline: none;
        box-sizing: border-box;
    }

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

export const EntrarContainer = styled.label`
    color: #f0ffffde;
    margin-bottom: 10px;
`;

export const FooterContainer = styled.footer`
    margin-top: 1rem;
    @media (max-width: 768px) {
        margin-top: 5rem;
      }
    
`;


