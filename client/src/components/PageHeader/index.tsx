import { Drawer } from "@mui/material";
import { isEmpty } from "lodash";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuthenticatedUser } from "../../hooks/useAuthenticatedUser";
import { useTogglable } from "../../hooks/useToggleble";
import {
  DrawerNav,
  PageHeaderWrapper,
  PageTitle,
  ProfileWrapper,
} from "./StyledComponents";
import MenuIcon from "@mui/icons-material/Menu";
import LinkButton from "../LinkButton";

const PageHeader = () => {
  const { loading, user } = useAuthenticatedUser();

  const { active: drawerIsOpen, toggle: toggleDrawer } = useTogglable();

  return (
    <PageHeaderWrapper>
      <Drawer anchor={"top"} open={drawerIsOpen} onClose={toggleDrawer}>
        <DrawerNav>
          <Link to="/">
            <h3>Global Search</h3>
          </Link>

          <Link to="/topic-tree">
            <h3>Browse Topic Tree</h3>
          </Link>
        </DrawerNav>
      </Drawer>

      <PageTitle>
        <LinkButton onClick={toggleDrawer}>
          <MenuIcon />
        </LinkButton>

        <h2>Commonitorium</h2>
      </PageTitle>

      {!loading && (
        <div>
          {user && !isEmpty(user) ? (
            <ProfileWrapper>
              <img src={user.picture} alt="" />
              <p>
                {user.name} <br /> {user.email}
              </p>
            </ProfileWrapper>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      )}
    </PageHeaderWrapper>
  );
};

export default PageHeader;
