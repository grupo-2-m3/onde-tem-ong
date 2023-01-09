import styled from "styled-components";

export const ProfileOngStyled = styled.div`
  width: 100%;

  .container {
    width: 100%;
  }

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
  }

  .vanish {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .seeMore {
    border: none;

    text-decoration: underline;

    color: var(--Information);
    background: none;
  }

  .totalDiv {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: var(--font20);
      font-weight: 700;

      span {
        margin-left: 10px;

        font-size: var(--font16);
        font-weight: 700;

        color: var(--Black50);
      }
    }
  }

  .historicDonates {
    ul {
      height: 230px;
      display: flex;
      flex-direction: column;
      margin: 15px;
      padding: 5px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 20px;
        background: var(--Grey0);
      }

      &::-webkit-scrollbar-thumb {
        border: 3px solid var(--Grey10);
        border-radius: 20px;
        background-color: var(--Grey10);
      }

      li {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;

        border-bottom: 2px solid var(--Grey50);

        .donorUser {
          display: flex;
          gap: 15px;

          img {
            width: 40px;
            height: 40px;
          }

          p {
            font-size: var(--font16);
            font-weight: 500;
          }
        }

        span {
          font-size: var(--font16);
          font-weight: 700;
        }
      }
    }
  }

  @media (min-width: 430px) {
    .totalDiv {
      width: 426px;
    }

    ul {
      width: 399px;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
    }

    .totalContainer {
      margin-top: 100px;
    }

    .totalDiv {
      width: 356px;
    }

    ul {
      width: 326px;
    }
  }
`;
