import { keys } from "lodash";
import { FC } from "react";
import styled from "styled-components";

interface DescriptionProps {
  data: Record<string, string | number>;
}

const DescriptionWrapper = styled("div")`
  border: 1px solid black;
`;

const DescriptionRow = styled("div")`
  display: grid;
  grid-template-columns: 200px 1fr;
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: 0;
  }
`;

const DescriptionKey = styled("p")`
  padding: 6px;
  font-weight: bold;
  border-right: 1px solid black;
`;

const DescriptionValue = styled("p")`
  padding: 6px;
`;

const Description: FC<DescriptionProps> = ({ data }) => (
  <DescriptionWrapper>
    {keys(data).map((_key) => {
      const _value = data[_key];

      return (
        <DescriptionRow>
          <DescriptionKey>{_key}</DescriptionKey>
          <DescriptionValue>{_value}</DescriptionValue>
        </DescriptionRow>
      );
    })}
  </DescriptionWrapper>
);

export default Description;
