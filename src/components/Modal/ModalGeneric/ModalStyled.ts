import styled from "styled-components";

export const ModalStyled = styled.div`
  & .withoutBorder {
    border: none;
    background-color: transparent;
  }
`;

export const ModalBodyStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;

export const ModalDiv = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  > .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    > p {
      font-size: 20px;
      font-weight: 500;
      color: var(--Color-primary);
    }

    > button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      background: transparent;

      > .iconClose {
        color: var(--Color-primary);
        width: 100%;
        height: 100%;
      }
    }

    > button:hover .iconClose {
      color: var(--Color-primary-50);
    }
  }
`;
