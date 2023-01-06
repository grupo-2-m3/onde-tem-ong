import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("assets/Background Mobile.svg");
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 2s ease;

  .background {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: rgba(111, 42, 134, 0.81);
  }

  .container {
    width: 100%;
    height: 100%;
    max-width: 1400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .RegisterMobile {
      width: 100%;
      text-align: center;
      border-radius: 50px 1px 50px 12px;
      background: rgba(232, 230, 233, 0.09);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px 1px 50px 12px;
    }

    .divBlockRight > img {
      margin-top: 20px;
      width: 241px;
    }

    .RegisterAndTitle {
      width: 100%;
    }

    .titleRegister {
      font-style: normal;
      font-weight: 400;
      font-size: var(--fon32);
      line-height: 59px;
      color: var(--Withe);
    }

    .formContainer {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    button {
      width: 100%;

      padding: 15px 0;

      border: 1px solid transparent;
      border-radius: 8px;

      color: white;
      background-color: var(--Color-primary);
    }
  }
  span {
    font-size: var(--font14);
    color: var(--Withe);
  }

  .LoginButton {
    width: 100%;

    padding: 15px 0;

    border: 1px solid var(--Withe);
    color: var(--Withe);
    border-radius: 8px;
    background-color: transparent;
  }

  .selectTypeUser {
    display: flex;
  }

  .labelSelectType {
    color: var(--Withe);
  }

  .divSelectCategory {
    width: 100%;
    margin-top: -10px;
  }

  .selectTypeUser > div {
    border-color: var(--Withe);
  }

  .LabelAndSelect {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--Color-primary);
    border-color: var(--Withe);
  }

  .divSelectCategory > div {
    border-color: var(--Withe);
  }

  .divSelectCategory label {
    color: var(--Withe);
  }

  .divSelectCategory select {
    height: 100%;
    width: 20px;
    border-bottom: 1px solid;
  }

  .divBlockLeft {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .divBlockLeft > div {
    border-color: var(--Withe);
  }

  .divBlockRight {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  @media (min-width: 390px) {
    background-image: url("assets/Background Desktop.svg");
    background-position: center;
    transition: background-image 2s ease;
  }

  @media (min-width: 768px) {
    height: 100vh;

    .RegisterMobile {
      width: 396px !important;
      padding: 17px 0px;
      margin-top: 97px;
      margin-bottom: 70px;
    }

    .RegisterAndTitle {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .background {
      height: 110vh;
    }

    .titleRegister {
      font-size: 56px !important;
      font-weight: 700 !important;
    }

    form {
      flex-direction: row;
      gap: 280px;
      width: 80vw;
    }

    .container {
      display: flex;
    }

    .divBlockLeft {
      width: 400px;
    }

    .divBlockRight {
      width: 400px;
    }

    button {
      height: 70px;
    }
  }
`;
