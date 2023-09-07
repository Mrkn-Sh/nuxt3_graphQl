import { useLoginStateCookie } from "../loginStateCookie";

export const login = (data) => {
  const loginState = useLoginStateCookie();
  // Perform login logic here (e.g., validate credentials)
  if (isValidCredentials(data.mail, data.password)) {
    loginState.setToken(data.mail);
    loginState.setUser(data.user);
    loginState.setMail(data.mail);
    // Update navigateTo to navigate as needed
    navigateTo("/v1/home/index.html");
    return true;
  }
  return false;
};

export const logout = () => {
  useLoginStateCookie().clear();
  // Update navigateTo to navigate as needed
  navigateTo("/login/index.html");
};

export const getLoginState = async () => {
  return useLoginStateCookie().state.value;
};

export const checkToken = async () => {
  const loginState = useLoginStateCookie();
  return !!loginState.token.value;
};

export const getIdToken = async () => {
  return useLoginStateCookie().token.value;
};

function isValidCredentials(email, password) {
  // Add your validation logic here
  return email === "user@example.com" && password === "password";
}
