import styled from "styled-components";

export const StyledHeaderFull = styled.div`
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    padding: 10px 0;
    background: var(--Withe);
    position: fixed;
    align-items: center;
    margin: 0 auto;
  }

  header > div > img {
    right: 15px;
    width: 50px;
    object-fit: cover;
  }

  .downMenu {
    border: 2px solid var(--Color-primary);
    position: absolute;
    width: 35%;
    min-width: 200px;
    top: 70px;
    right: 25px;
    display: none;
    border-radius: 8px;
    padding: 10px;
    background: var(--Withe);
    display: none;
    flex-direction: column;
    gap: 10px;
  }

  .downMenu > .goToProfile {
    border-bottom: 1px solid var(--Black50);
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    text-decoration: none;
    color: black;
    width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .downMenu > .goToProfile > img {
    width: 30px;
    object-fit: cover;
  }

  header > div:hover > .downMenu {
    display: flex;
  }
`;
