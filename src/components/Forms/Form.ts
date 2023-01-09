import styled from "styled-components";

export const FormStyled=styled.form`

    display: flex;
    flex-direction: column;
    gap: 15px;
    & div{
        display:flex;
        gap:10px;
        display: flex;
        flex-direction: row;
        & label{
            width: 10ch;
            display: flex;
            justify-content: center;
            text-transform: capitalize;
            color: var(--Color-primary);
        }
    }
    & input{
        border-radius: 10px;
        border-color: var(--Color-primary);
        outline: 0px;
        width: 50%;
        padding: 0px 15px;
    }
    & input[type='radio']{
        margin-right:20px;
    }
        
`