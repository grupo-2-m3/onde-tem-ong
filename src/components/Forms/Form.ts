import styled from "styled-components";

export const FormEditUserStyled = styled.form`
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
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  div > label {
    font-size: var(--font14);
    font-weight: 500;
  }

  div > input {
    border-radius: 8px;
    width: 28vw;
    outline: none;
    border: 2px solid var(--Color-primary);
    font-size: var(--font14);
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
