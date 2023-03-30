import Home from "@/pages/Home";
import PostPage from "@/pages/PostPage";
import PostId from "@/pages/PostId";
import PostPageStore from "@/pages/PostPageStore";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/posts",
        component: PostPage,
    },
    {
        path: "/posts/:id",
        component: PostId,
    },
    {
        path: "/store",
        component: PostPageStore,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});
export default router;
