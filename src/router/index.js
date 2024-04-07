import { createMemoryHistory, createRouter } from "vue-router";

import ViewHome from "@/views/ViewHome.vue";
import Default from "@/layouts/default.vue";
import ViewPages from "@/views/ViewPages.vue";

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "",
        component: ViewHome,
        name: "ViewHome",
      },
      {
        path: "/pages",
        component: ViewPages,
        name: "ViewPages",
      }
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
