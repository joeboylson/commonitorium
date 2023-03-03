import styled from "styled-components";

export const TopicTreePageWrapper = styled("div")`
  display: flex;
`;

export const TopicTreeVerticalMenuWrapper = styled("div")`
  padding-right: 72px;ss
`;

export const ResultsByTopicWrapper = styled("div")`
  display: flex;
  flex-direction: column;

  > * {
    padding-bottom: 24px;
  }
`;

export const BreadCrumbsWrapper = styled("div")`
  display: flex;

  button {
    margin-right: 6px;
  }
`;

export const QuotesResultsWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  max-height: 75vh;
  overflow-y: auto;
`;
