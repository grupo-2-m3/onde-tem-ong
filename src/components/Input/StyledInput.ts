import styled, {css} from "styled-components";

interface iPropsInput {
  styledColor?: string | boolean;
}

export const StyledInput = styled.div`
  width: 100%;

  display: flex;
  gap: 6.5px;
  flex-direction: column;
  padding-top: 6px;
  padding-bottom: 5px;

  border-bottom: 1px solid var(--Color-primary);

  label {
    ${(props: iPropsInput) => {
      if(props.styledColor){
        return css`
          color: var(--${props.styledColor as string});
        `
      }
    }}
    font-size: var(--font14);
  }

  input::placeholder {
    ${(props: iPropsInput) => {
      if(props.styledColor){
        return css`
          color: rgba(255, 255, 255, 0.6);
        `
      }
    }}
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
