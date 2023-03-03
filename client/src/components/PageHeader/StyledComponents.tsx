import styled from "styled-components";

export const PageHeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 12px;
`;

export const ProfileWrapper = styled("div")`
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: center;
  gap: 24px;
`;

export const DrawerNav = styled("nav")`
  width: 100vw;
  max-width: 500px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;

export const PageTitle = styled("div")`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 24px;
`;
