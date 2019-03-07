import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/posts/:id", component: Post}
];

export default routes;