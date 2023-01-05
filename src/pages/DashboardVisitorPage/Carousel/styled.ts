import styled from "styled-components";

export const StyledCarousel = styled.ul`
  width: 90%;
  height: min-content;

  display: flex;
  justify-content: center;

  overflow-y: hidden;
  overflow-x: auto;

  position: absolute;
  z-index: 5;

  gap: 1.5rem;
  margin-top: 5%;
`;
