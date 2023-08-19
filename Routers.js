import Home from "./componets/Home.vue";
import SignUp from "./componets/SignUp.vue";
import { createRouter,createWebHistory } from "vue-router";
import Login from './componets/Login.vue'
const routes = [
 {
    name: "Home"
    componet: Home,
    path"/",
 },
 {
   name: "Login",
   componet: Login,
   path:"/sign-up",
 },
 {
    name:"Login",
    componet: Login,
    path: "/login",
 },

];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

    