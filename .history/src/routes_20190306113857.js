import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Posts from './components/Posts'
import Users from './components/Users'
import UsersHome from './components/users/UsersHome'

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/posts", component: Posts},
    {path: "/posts/:id", component: Post, props: true},
    {path: "/users", component: Users, children: [
        {path: "", component: UsersHome},
        {path: "/:", component: UsersHome},
    ]}
];

export default routes;