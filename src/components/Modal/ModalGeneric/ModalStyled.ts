import styled from "styled-components";

export const ModalStyled=styled.div`
    & .withoutBorder{
        border: none;
        background-color: transparent;
    }
`

export const ModalBodyStyled=styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    align-items:center;
    justify-content: center;
`


export const ModalDiv=styled.div`
    background-color: white;
    min-width: 30%;
    min-height: 30%;
    padding: 30px 20px;
    max-width: 50%;
    max-height: 50%;
    & button:hover{
        background-color: var( --Color-primary);
        color: white;
    }
    & .modal-header{
        margin-bottom: 18px;
        display: flex;
        justify-content: space-between;
        & p{
            text-transform: capitalize;
            font-size: 20px;
        }
        & button{
            background-color: transparent;
            font-size: 20px;
            color: red;
            border-style: none;
            padding: 3px;
        }
        & button:hover{
            background-color: red;
            border-radius:50%;
            color:white
        }
    }

`