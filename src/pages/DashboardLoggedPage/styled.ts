import styled from "styled-components";

export const StyledDashboard = styled.main`
  margin: 0 15px;
  margin-top: 25px;

  > div > section {
    display: flex;
    justify-content: space-between;
  }
  .searchDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 536px;
    margin: 0 auto;
    margin-bottom: 25px;
  }
  .ongsSection {
    display: flex;
    flex-direction: column;
  }

  .ongsSection > div {
  }
  .searchSection {
    display: flex;
    flex-direction: column;
  }
  form > input {
    border: 1px solid var(--Color-primary);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left: 5px;
    margin-right: 5px;
    height: 35px;
    width: 220px;
  }

  form > button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    background-color: var(--Color-primary);
    height: 34px;
    width: 25px;
  }
  .filterBtn {
    background-color: transparent;
    border: none;
  }

  .filterBtn > svg {
    width: 30px;
    height: 30px;
  }
  form > button > svg {
    color: var(--Withe);
  }
  .catogoriesFilterDiv {
    display: none;
  }

  .ongsList {
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;
    gap: 55px;
    border-radius: 8px;
  }
  .downPull {
    animation: pull linear 0.1s forwards;
  }

  @keyframes pull {
    20% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
  .popUpFilters {
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 115px;
    margin-bottom: 0px;
  }
  span {
    align-self: center;
    margin-bottom: 15px;
  }
  .popUpFilters > ul {
    display: flex;
    gap: 15px;
    overflow: auto;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    max-width: 536px;
    width: 100%;
    margin: 0 auto;
  }
  .popUpFilters > ul > button {
    display: flex;
    align-items: center;
    height: 50px;
    width: fit-content;
  }
  .searchNotFound {
    margin: 0 15px;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .searchNotFound > h3 {
    width: 50%;
  }
  .searchNotFound > #notFoundImg {
    width: 200px;
  }
  .hidden {
    display: none;
  }
  .block {
    display: block;
  }
  @media (min-width: 768px) {
    .ongsList {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .searchDiv {
      width: fit-content;
      margin: 0;
    }
    .searchSection {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 25px;
      justify-content: space-between;
    }
    .filterBtn {
      display: none;
    }
    .popUpFilters {
      display: flex;
      gap: 25px;
      flex-direction: row;
      align-items: center;
      overflow: auto;
      max-width: 45vw;
      border-radius: 8px;
    }
    .popUpFilters > ul {
      max-width: 100%;
      margin: 0 auto;
    }

    .catogoriesFilterDiv {
      display: flex;
      gap: 25px;
      flex-direction: row;
      align-items: center;
      overflow: auto;
      max-width: 45vw;
      border-radius: 8px;
    }
    .catogoriesFilterDiv > span {
      height: fit-content;
    }

    .categoriesList {
      display: flex;
      flex-direction: row;
      gap: 15px;
      width: 100%;
    }

    .categoriesList > button {
      width: fit-content;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .block {
      display: block;
      margin: 0 auto;
    }
    .spanResponsive {
      display: block;
      margin: 0 auto;
    }
  }
`;
