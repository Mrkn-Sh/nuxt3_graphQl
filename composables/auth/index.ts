import { LoginData } from "../types/interfaces";

// status
let isLoggedIn = false;

export const auth = () => {
  return {
    login: (data: LoginData) => {
      if (data.email === "a@co.jp" && data.password === "a") { 
        isLoggedIn = true;
      } else {
        isLoggedIn = false;
      }
    },
    logout: () => {
      isLoggedIn = false;
    },
    getLoginState: async () => {
      return isLoggedIn;
    },
  };
};
