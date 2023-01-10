import styled from "styled-components";

export const FormEditOngStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 2px solid var(--Color-primary);
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(111, 42, 134, 0.3);
  width: 265px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 20px 120px;
    width: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: center;

    > label {
      font-size: var(--font14);
      font-weight: 500;
      color: var(--Color-primary);
      width: 100%;
    }

    > input {
      border-radius: 6px;
      padding-left: 10px;
      height: 50px;
      width: 100%;
      outline: none;
      border: 2px solid var(--Color-primary);
      font-size: var(--font14);
    }
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
  @media (min-width: 768px) {
    width: 550px;
    padding: 20px;
    > div {
      width: 100%;
    }
    .submitEditOngBtn {
      height: 50px;
      margin-top: 10px;
      align-self: flex-end;
      font-size: var(--font20);
      font-weight: 500;
      background-color: var(--Color-primary);
      color: var(--Withe);
    }
  }
`;
