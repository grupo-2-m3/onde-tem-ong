import styled from "styled-components";

export const StyledModalSeeMore = styled.div`
  margin-top: 40px;
  width: 800px;
  max-width: 90vw;
  max-height: 700px;
  overflow-y: scroll;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .loading {
    margin: 100px;
    width: 60px;
    height: 60px;
    align-self: center;
    justify-self: center;
  }

  .pics {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .backgroundPic {
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  .profilePic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    transform: translateY(-80px);
  }

  .infos {
    display: flex;
    justify-content: space-between;
    transform: translateY(-90px);

    h2 {
      color: var(--Black);
      font-size: var(--font20);

      > span {
        font-size: var(--font16);
        font-weight: 500;
      }
    }

    > .infosLeft {
      padding: 10px;
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .title {
        font-size: var(--font24);
      }

      p {
        font-size: var(--font16);
        font-weight: 500;
      }

      .bioDiv {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }

    > .infosRight {
      margin-top: 25px;
      width: 30%;
      display: flex;
      flex-direction: column;
      object-fit: cover;

      > ul {
        max-height: 350px;
        overflow-y: scroll;

        > li {
          display: flex;
          justify-content: space-between;
          padding: 5px;
          margin-top: 25px;
          gap: 10px;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--Black);
          box-shadow: 10px 1px 10px rgba(0, 0, 0, 0.25);

          > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            > p {
              font-weight: 500;
            }
          }

          > div > img {
            align-self: flex-start;
            width: 50px;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
