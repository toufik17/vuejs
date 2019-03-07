import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Posts from './components/Posts'

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/posts", component: Posts},
    {path: "/posts/:id", component: Post, props: true}
    {path: "/posts/:id", component: Post, props: true}
];

export default routes;