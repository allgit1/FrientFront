// 定义一些路由
// 每个路由都需要映射到一个组件。
import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue"
import EditUserPage from "../pages/UserEditPage.vue"
import UserResultPage from "../pages/SearchResultPage.vue"
import UserLoginPage from "../pages/UserLoginPage.vue"

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: TeamPage  },
    { path: '/user', component: UserPage  },
    { path: '/search', component: SearchPage  },
    { path: '/user/edit', component: EditUserPage  },
    { path: '/user/list', component: UserResultPage  },
    { path: '/user/login', component: UserLoginPage  }
]
export default routes;