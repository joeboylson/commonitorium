const express = require("express");

const {
  getAuthUrl,
  getAccessTokenFromCode,
  getGoogleUser,
  /*
  NOTE: 
  require specific file to avoid circular dependency
  */
} = require("../utils/auth");

const authenticationRouter = express.Router();

authenticationRouter.get("/auth-url", async (_, response) => {
  const authUrl = await getAuthUrl();
  response.send(authUrl);
});

authenticationRouter.get("/profile", async (request, response) => {
  try {
    response.send(request.session.user);
  } catch (e) {
    console.error(e);
    response.send(null);
  }
});

authenticationRouter.get("/post-login", async (request, response) => {
  const { code } = request.query;

  try {
    const tokens = await getAccessTokenFromCode(code);
    const googleUser = await getGoogleUser(tokens);
    request.session.user = googleUser;
    response.send(request.session.user);
  } catch {
    response.send(null);
  }
});

module.exports = {
  authenticationRouter,
};
