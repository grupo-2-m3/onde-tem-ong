import styled from "styled-components";

export const CoverProfileStyled = styled.div`
width: 100vw;
height: 300px;

    width: 100%;
    height:300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position:relative;

& > img{
    width: 100%;
    height: 100%;
}

.imgUser{
    position:absolute;
    top: 160px;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    box-shadow: 3px 0px 38px -1px rgba(0,0,0,0.75);
}

.imgUser >img{
    width:100%;
    height: 100%;
    border-radius: 50%;
}
`