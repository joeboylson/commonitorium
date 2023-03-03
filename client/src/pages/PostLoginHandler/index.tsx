import axios from "axios";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants";

const PostLoginHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { search } = window.location;
    const urlParams = new URLSearchParams(search);
    const code = urlParams.get("code");
    const url = `${SERVER_URL}/authenticate/post-login?code=${code}`;

    axios
      .get(url)
      .then(({ data }) => {
        if (isEmpty(data)) navigate("/login");
        navigate("/");
      })
      .catch(() => navigate("/login"));
  }, []);

  return <p>post-login handler</p>;
};

export default PostLoginHandler;
