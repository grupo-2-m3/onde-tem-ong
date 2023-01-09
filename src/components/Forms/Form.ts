import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid var(--Color-primary);
  border-radius: 8px;
  padding: 15px;
  background-color: var(--Color-terciary);

  > .valueDiv {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;

    > label {
      font-size: var(--font16);
      font-weight: 500;
    }

    > input {
      padding: 10px;
      border-radius: 8px;
      outline: none;
      border: 2px solid var(--Color-primary);
      font-size: var(--font14);
      width: 100%;
    }
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

  > .makeDonation {
    width: 100%;
    border-radius: 8px;
    color: var(--Withe);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;

    :hover {
      background-color: var(--Color-secondary);
    }
  }
`;
