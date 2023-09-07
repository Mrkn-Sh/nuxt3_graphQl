import { LoginData } from "../types/interfaces";

// status
let isLoggedIn = false;
let loggedInUser = ''; 

export const auth = () => {
  return {
    login: (data: LoginData) => {
      if (data.email === "a@co.jp" && data.password === "a") { 
        isLoggedIn = true;
        loggedInUser = "a";
      } else {
        isLoggedIn = false;
      }
    },
    logout: () => {
      isLoggedIn = false;
      loggedInUser = '';
    },
    getLoginState: async () => {
      return isLoggedIn;
    },
    getLoggedInUser: () => {
      return loggedInUser; 
    },
  };
};
