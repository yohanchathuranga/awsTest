import Vue from "vue";
import Vuerouter from "vue-router";


import HelloWorld from "../components/HelloWorld.vue";


Vue.use(Vuerouter);
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld

    }
]
const router = new Vuerouter({
    mode: "history",
    routes,
});
export default router;