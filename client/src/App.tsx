import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import FourOhFour from "./pages/404";
import Admin from "./pages/Admin";
import GlobalSearch from "./pages/GlobalSearch";
import Login from "./pages/Login";
import PostLoginHandler from "./pages/PostLoginHandler";
import TopicTreeBrowser from "./pages/TopicTreeBrowser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* Global Search Page */}
          <Route index element={<GlobalSearch />} />

          {/* Topic Tree Page */}
          <Route path={"topic-tree"} element={<TopicTreeBrowser />} />

          {/* Login Page */}
          <Route path="login" element={<Login />} />

          {/* Admin Page */}
          <Route path="admin" element={<Admin />} />

          {/* Post-Login Helper Page */}
          <Route
            path="authenticate/post-login"
            element={<PostLoginHandler />}
          />

          {/* 404 */}
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
