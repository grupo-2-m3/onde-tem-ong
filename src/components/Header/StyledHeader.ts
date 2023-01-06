import styled from "styled-components";
// interface iStyledHeader {
//   noUser: string;
// }

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  > div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .image_logo {
    max-width: 180px;
    height: 60px;
  }
  .conteiner_anchors_image_user {
    height: 60px;
  }
  .div_img_user {
    width: 20%;
    height: 20%;

    min-width: 36px;
    min-height: 36px;

    max-width: 60px;
    max-height: 60px;

    border-radius: 50%;

    background-repeat: no-repeat;
    img {
      width: 100%;
      height: 1005;
    }

    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  }
  .conteiner_anchor {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .div_anchors {
    width: 0;
    height: 0;
    a {
      width: 0;
      height: 0;

      text-decoration: none;

      font-size: 0;
      font-weight: 0;

      background: none;
    }
    @media (min-width: 599px) {
      width: auto;
      height: min-content;

      display: flex;
      align-items: center;

      margin-right: 1rem;

      gap: 1rem;

      a {
        width: max-content;
        height: max-content;

        color: var(--Black50);
        font-size: 1rem;
        font-weight: 600;
        opacity: 50%;
      }
    }
  }

  button {
    background: none;
    border: none;
  }
`;
