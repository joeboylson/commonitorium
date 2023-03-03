import styled from "styled-components";

export const ModalWrapper = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  background-filter: blur(3px);
  transition-duration: 300ms;
  opacity: 0;

  display: grid;
  place-items: center;

  &.visible {
    opacity: 1;
  }

  &.invisible {
    opacity: 0;
    pointer-events: none;
  }
`;

export const ModalBody = styled("div")`
  width: fit-content;
  width: 750px;
  background-color: white;
  border-radius: 5px;
  min-height: 56px;
`;

export const ModalContent = styled("div")`
  padding: 24px;
  min-height: calc(56px - 48px);
`;

export const ModalTitle = styled("h3")`
  border-bottom: 1px solid black;
  line-height: 54px;
  padding: 0 24px;
`;

export const ModalFooter = styled("div")`
  min-height: 56px;
  border-top: 1px solid black;
  display: grid;
  grid-template-columns: repeat(2, 120px);
  gap: 12px;
  direction: rtl;
  align-items: center;
  padding: 0 24px;

  button {
    height: 30px;
  }
`;
