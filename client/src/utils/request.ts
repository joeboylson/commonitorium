import { SERVER_URL } from "../constants";

export const toServerUrl = (url: string) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment) return url;

  return `${SERVER_URL}${url}`;
};
