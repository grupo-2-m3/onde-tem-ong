import styled from "styled-components";

export const FormDonateStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 2px solid var(--Color-primary);
  border-radius: 8px;
  padding: 10px;
  background-color: var(--Color-terciary);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div > label {
    font-size: var(--font14);
    font-weight: 500;
  }
  .radios {
    display: flex;
    flex-direction: column;
  }
  .radios > div {
    display: flex;
    justify-content: space-around;
    gap: 25px;
  }
  #donate {
    border-radius: 8px;
    padding: 5px;
    outline: none;
    border: 2px solid var(--Color-primary);
    font-size: var(--font14);
    width: 55%;
  }

  .radioFieldDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65px;
  }
  .radioFieldDiv > label {
    width: fit-content;
  }
  .radioFieldDiv > div {
    display: flex;
    justify-content: space-between;
    width: 65%;
  }

  input[type="radio"] {
    display: grid;
    place-content: center;
    background-color: var(--Color-primary);
    width: 15px;
  }
  input[type="radio"]::before {
    outline: max(1px, 0.13em) solid;
    outline-offset: max(1px, 0.1em);
    background-color: var(--Color-primary);
  }
  input[type="radio"]:checked::before {
    transform: scale(1.2);
    outline: max(1px, 0.2em) solid;
    color: var(--Color-primary-50);
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: var(--Color-primary) 1em 1em var(--Color-primary);
  }
  > .valueDiv {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  > .optionDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > span {
      font-size: var(--font16);
      font-weight: 500;
    }

    > div {
      display: flex;
      gap: 30px;

      > div {
        display: flex;
        gap: 5px;

        > label {
          font-size: var(--font14);
          font-weight: 400;
        }
      }
    }
  }

  button {
    border-radius: 8px;
    color: var(--Withe);
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: var(--Color-secondary);
    }
  }
`;
