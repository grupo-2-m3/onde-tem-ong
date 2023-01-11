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
    font-size: 1rem;
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
    height: 70px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .helpBtnsDiv > button,
  .helpBtnsDiv > div > button {
    background-color: #ad72c066;
    border: 1px solid var(--Color-primary);
    width: 115px;
    height: 45px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font14);
    padding: 0;
    color: black;
    font-weight: 400;
    gap: 10px;
  }

  .backgroundAvatarDiv {
    width: 100%;
    height: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .backgroundAvatarDiv > img {
    width: 100%;
  }
  .profileImgDiv {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    position: relative;
    z-index: -1;
    align-items: center;
    object-fit: contain;
    justify-content: center;
    transform: translate(1rem, -2rem);
  }
  .profileImgDiv > img {
    width: 135%;
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
    width: 44vw;
    max-width: 536px;
    height: 315px;
    margin-left: 0;
    margin-right: 0;

    .profileImgDiv {
      width: 115px;
      height: 115px;
      transform: translate(1rem, -3rem);
      display: flex;
      object-fit: cover;
      align-items: center;
    }

    h2 {
      width: fit-content;
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
