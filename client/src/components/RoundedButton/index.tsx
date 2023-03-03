import styled from "styled-components";

export const RoundedButton = styled("button")`
  display: block;
  border: 0;
  outline: none;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 24px;
  padding: 4px 8px;
  min-width: 30px;

  transition-duration: 100ms;

  &[data-active="true"] {
    border: 1px solid #333;
    background-color: #333;
    color: white;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;
