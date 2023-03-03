const { google } = require("googleapis");
const axios = require("axios");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_AUTH_CLIENT_ID,
  process.env.GOOGLE_AUTH_CLIENT_SECRET,
  process.env.GOOGLE_AUTH_REDIRECT_URI
);

const getAuthUrl = async () => {
  const scope = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" ");

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope,
  });

  return authUrl;
};

const getAccessTokenFromCode = async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
};

const getGoogleUser = async (tokens) => {
  const _headers = {
    Authorization: `Bearer ${tokens.id_token}`,
  };

  return await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      { headers: _headers }
    )
    .then(({ data }) => data)
    .catch((error) => {
      console.error(error);
      return null;
    });
};

module.exports = {
  getAuthUrl,
  getAccessTokenFromCode,
  getGoogleUser,
};
