
export const useLoginStateCookie = () => {
  const cookieState = useCookie<{ [key: string]: string }>("user_for_debug");
  const cookieToken = useCookie<string | null>("token_for_debug", {
    maxAge: 600,
  });
  cookieState.value = cookieState.value || {
    user: "",
    email: "",
  };
  return {
    state: readonly(cookieState), 
    token: readonly(cookieToken), 
    setUser: setUser(cookieState),
    setMail: setMail(cookieState),
    setToken: setToken(cookieToken),
    clear: clear(),
  };
};

const setUser = (cookie: Ref<{ [key: string]: string }>) => {
  return (user: string) => (cookie.value.user = user);
};

const setMail = (cookie: Ref<{ [key: string]: string }>) => {
  return (mail: string) => (cookie.value.email = mail);
};

const setToken = (cookie: Ref<string | null>) => {
  return (token: string) => (cookie.value = token);
};

const clear = () => {
  return () => {
    useCookie<{ [key: string]: string } | null>("user_for_debug").value = null;
    useCookie<string | null>("token_for_debug").value = null;
  };
};

export const login = (data: LoginData) => {
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

export const checkToken = async () => {
  const loginState = useLoginStateCookie();
  return !!loginState.token.value;
};

export const getIdToken = async () => {
  return useLoginStateCookie().token.value;
};

function isValidCredentials(email: string, password: string) {
  // Add your validation logic here
  return email === "user@example.com" && password === "password";
}
