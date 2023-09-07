import { auth } from "~/composables/auth";

const excludeUrls = ["/login/index.html"];

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("middleware: to=" + to.fullPath + ", from=" + from.fullPath);

  if (!excludeUrls.includes(to.fullPath)) {
    const isLoggedIn = await auth().getLoginState();

    if (!isLoggedIn) {
      console.log("expired");
      return navigateTo("/login/index.html")
    }
  }
});
