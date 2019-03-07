import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Posts from './components/Posts'
import Users from './components/Users'
import UsersHome from './components/users/UsersHome'
import UsersViewHome from './components/users/UsersViewHome'

const routes = [
    {path: "/", component: Home, name: "home"},
    {path: "/about", component: About},
    {path: "/posts", component: Posts},
    {path: "/posts/:id", component: Post, props: true, name: "signle-post"},
    {path: "/users", component: Users, children: [
        {path: "", component: UsersHome},
        {path: ":id", component: UsersViewHome, props: true},
    ]},
    {path: "*", component: Posts},
];

export default routes;