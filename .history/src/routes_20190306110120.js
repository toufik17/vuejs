import Home from './components/Home'
import About from './components/About'

const router = new VueRouter({
    mode: "history",
    routes : [
      {path: "/", component: Home},
      {path: "/about", component: About}
    ]
  })