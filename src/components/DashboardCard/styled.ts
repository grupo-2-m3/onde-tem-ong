import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 536px;
  border-radius: 8px;
  max-height: 350px;
  h2 {
    width: fit-content;
    font-size: 1.5rem;
    color: var(--Color-primary);
  }
  p {
    width: fit-content;
    font-size: 1rem;
  }
  .helpBtnsDiv {
    background-color: #ad72c066;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .helpBtnsDiv > button {
    background-color: #ad72c066;
    border: 1px solid var(--Color-primary);
    width: 32%;
    height: 65%;
    border-radius: 8px;
  }

  .backgroundAvatarDiv {
    width: 100%;
    height: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    object-fit: cover;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .backgroundAvatarDiv > img {
    width: fit-content;
  }

  .profileImgDiv {
    border-radius: 50%;
    width: 126px;
    height: 126px;

    overflow: hidden;
    display: flex;
    align-items: center;
    object-fit: contain;
    justify-content: center;
    transform: translate(25px, -40px);
  }

  .profileImgDiv > img {
    width: 100%;
  }

  @media (max-width: 400px) {
    h2 {
      width: fit-content;
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
    .profileImgDiv {
      width: 25vw;
      height: 25vw;
      transform: translate(5vw, -8vw);
    }
  }
  .ongInfoDiv {
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    padding-right: 15px;
  }

  @media (min-width: 768px) {
    width: 43vw;
    max-width: 536px;
    height: 315px;
    margin-left: 0;
    margin-right: 0;
  }
`;
