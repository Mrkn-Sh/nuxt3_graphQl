import { auth } from "~/composables/auth";


const excludeUrls = ["/login/index.html"];

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("middleware: to=" + to.fullPath + ", from=" + from.fullPath);
  
  if (!excludeUrls.includes(to.fullPath) && !sessionStorage.getItem('isLoggedIn')) {
    console.log("Not logged in.");
    return navigateTo("/login/index.html");
  }
});