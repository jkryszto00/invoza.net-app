import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./Pages/IndexPage.vue"),
    },
    {
        path: "/login",
        component: () => import("./Pages/Auth/Login.vue")
    },
    {
        path: "/register",
        component: () => import("./Pages/Auth/Register.vue")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
