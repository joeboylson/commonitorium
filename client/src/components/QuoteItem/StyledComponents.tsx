import styled from "styled-components";

export const QuoteItemWrapper = styled("div")`
  border: 1px solid black;
  border-radius: 5px;
  display: grid;
  gap: 12px;
`;

export const HighlightedKeyValueWrapper = styled("div")`
  padding: 12px;
  border-bottom: 1px solid black;
`;

export const QuoteContent = styled("div")`
  padding: 0 12px;

  span {
    font-size: 18px;
    font-weight: bold;
    line-height: calc(18px * 1.5);
  }
`;

export const QuoteItemModalContentWrapper = styled("div")`
  display: grid;
  gap: 24px;

  > div:first-child {
    padding: 0;
  }
`;

export const QuoteItemFooter = styled("div")`
  padding: 0 12px 12px 12px;
`;
