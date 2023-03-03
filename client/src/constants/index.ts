import { isEqual } from "lodash";

export const SERVER_URL = isEqual(process.env.REACT_APP_SERVER_URL, "NULL")
  ? ""
  : process.env.REACT_APP_SERVER_URL;
