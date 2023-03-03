import { FC } from "react";
import { Link } from "react-router-dom";
import { BaseComponentProps } from "../../types";
import PageHeader from "../PageHeader";
import { PageWrapperContainer } from "./StyledComponents";

const PageWrapper: FC<BaseComponentProps> = ({ children }) => {
  return (
    <PageWrapperContainer>
      <PageHeader />
      {children}
    </PageWrapperContainer>
  );
};

export default PageWrapper;
