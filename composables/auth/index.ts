import { LoginData } from "../types/interfaces";

export const auth = () => {
  const isValidLogin = (data: LoginData): boolean => 
    data.email === "a@co.jp" && data.password === "a";

  return {
    login: (data: LoginData): boolean => {
      const loginSuccess = isValidLogin(data);
      if (loginSuccess) {
        sessionStorage.setItem('isLoggedIn', 'true'); 
      } else {
        sessionStorage.removeItem('isLoggedIn');
      }
      return loginSuccess;
    },
    logout: () => {
      sessionStorage.removeItem('isLoggedIn');
    },
    getLoginState: () => {
      return sessionStorage.getItem('isLoggedIn') === 'true';
    },
  };
};
