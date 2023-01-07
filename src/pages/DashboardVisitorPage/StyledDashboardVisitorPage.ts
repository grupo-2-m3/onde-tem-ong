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
    left: 0;
  }

  .backImg {
    left: 0;
  }
  .imgBlur {
    background-image: none;
  }

  .backImg1 {
    position: absolute;
    left: 0;
  }

  .boxCarousel {
    width: 100%;

    display: flex;
    justify-content: center;

    h1 {
      color: var(--Withe);
      position: absolute;

      bottom: 20%;
    }

    .boxVectors {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;

      background-color: rgb(0, 0, 0, 0.3);

      .blur {
        width: 100%;
      }
      .home {
        width: 60%;
        color: var(--Blue);

        margin-top: 10%;

        @media (min-width: 600px) {
          top: 25%;
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
    flex-direction: column;

    width: 100%;
    height: 100%;

    background-image: url(${({ Imagen }) => Imagen.imagem});
    background-repeat: no-repeat;
    background-size: cover;

    margin-top: 50%;

    background-color: white;
  }

  footer {
    width: 100%;
    min-height: 80px;

    display: flex;
    justify-content: center;

    background-color: var(--Black50);

    margin-top: 50px;

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

      font-size: var(--font20);

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
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    min-height: 120px;

    @media (min-width: 900px) {
      width: 70%;
      margin-top: 60px;
    }

    overflow: hidden;

    cursor: grab;

    position: absolute;

    z-index: 5;
    > div {
      width: 100%;
    }

    button {
      width: 40px;
      height: 40px;

      border: none;
      background: none;

      position: absolute;

      svg {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      right: 0px;
      bottom: 40%;

      margin-right: 0px;

      transform: rotate(180deg);
    }

    .left {
      left: 0;
      bottom: 40%;

      z-index: 2;
    }
  }
  .marginsBottonHeader {
    height: 100px;
    width: 100%;

    background-color: var(--Black);

    opacity: 30%;
  }
`;
