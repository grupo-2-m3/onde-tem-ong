import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid var(--Color-primary);

  label {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    img {
      width: 24px;
      height: 24px;
    }

    input {
      padding: 12px 0;

      border: none;

      background: none;

      outline: none;
    }
  }
`;
