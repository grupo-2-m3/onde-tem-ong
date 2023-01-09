import styled from "styled-components";

export const ProfileOngStyled = styled.div`
  width: 100vw;

  .infoUser {
    margin-top: 100px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .InfoAndEdit {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: var(--font20);
    }

    button {
      width: 25px;
      height: 25px;

      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  p {
    font-size: var(--font20);
    font-weight: 700;

    .spanName {
      font-size: var(--font16);
      font-weight: 400;
    }
  }

  .bioContainer {
    width: 100%;
  }

  .spanBio {
    font-size: var(--font16);
    font-weight: 400;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  .totalDiv {
    display: flex;
    justify-content: space-between;
  }
`;
