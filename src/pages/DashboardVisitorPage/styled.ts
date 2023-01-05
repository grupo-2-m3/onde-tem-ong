import styled from "styled-components";

interface iStyledDashboardVisitorPage {
  Imagen: {
    imagem: string;
  };
}

export const StyledDashboardVisitorPage = styled.div<iStyledDashboardVisitorPage>`
  width: 100%;
  height: 100%;

  .backImg3 {
    left: 0;
  }

  .backImg2 {
    z-index: 1;
    left: 0;
  }

  .backImg {
    z-index: 2;
    left: 0;
  }

  .backImg1 {
    left: 0;
  }

  .carousel {
    margin-top: 100px;
    width: 100%;

    display: flex;
    justify-content: center;

    > div {
      width: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;

      .home {
        z-index: 4;

        width: 60%;
        max-width: 600px;

        @media (min-width: 1000px) {
          margin-top: 5%;
        }
      }

      img {
        width: 100%;
        position: absolute;
      }
    }
  }

  .back_img {
    width: 100%;
    height: 100%;
  }

  .information {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-image: url(${({ Imagen }) => Imagen.imagem});
    background-repeat: no-repeat;
    background-size: cover;

    margin-top: 50%;
  }

  footer {
    width: 100%;
    min-height: 80px;

    display: flex;
    justify-content: center;

    background-color: var(--Black50);

    margin-top: 20px;

    div {
      gap: 10px;

      @media (min-width: 700px) {
        display: flex;
        align-items: center;
      }
      > div {
        display: flex;
        margin: 15px 0 15px 0;
      }
    }

    h3 {
      color: var(--Withe);

      width: 100%;

      text-align: center;

      margin-bottom: 20px;

      @media (min-width: 700px) {
        margin: 0;
      }
    }

    button {
      width: 30px;
      height: 30px;
      svg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      background: none;
      border: none;
    }
    .blue {
      color: var(--Blue);
    }
  }
`;
