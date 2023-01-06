import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font14);
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

export const Error = styled.div`
  position: relative;

  .ico {
    color: var(--Negative);
  }

  &:hover span {
    opacity: 1;
  }

  span {
    width: fit-content;

    padding: 10px;

    border-radius: 0.25rem;

    text-align: center;

    color: var(--Withe);

    background-color: var(--Negative);

    position: absolute;
    right: 35px;

    opacity: 0;

    transition: all 0.3s ease-in-out;

    &::before {
      content: "";

      position: absolute;
      top: 8px;
      right: -4px;

      border-style: solid;
      border-color: var(--Negative);
      border-width: 0px 7px 10px 4px;

      transform: rotate(46deg);
    }
  }
`;
