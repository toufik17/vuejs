import Home from './components/Home'
import Trays from './components/trays/Tray'
import About from './components/About'
import Post from './components/Post'
import Posts from './components/Posts'
import Users from './components/Users'
import UsersHome from './components/users/UsersHome'
import UsersViewHome from './components/users/UsersViewHome'
import NotFount from './components/NotFount'

const routes = [
    {path: "/", component: Home, name: "home"},
    {path: "/trays", component: Trays, name: "trays"},
    {path: "/about", component: About, beforeEnter:(to, from, next)=>{
            next();
        }
    },
    {path: "/posts", component: Posts},
    {path: "/posts/:id", component: Post, props: true, name: "signle-post"},
    {path: "/users", component: Users, children: [
        {path: "", component: UsersHome},
        {path: ":id", component: UsersViewHome, props: true},
    ]},
    {path: "*", component: NotFount},
];

export default routes;