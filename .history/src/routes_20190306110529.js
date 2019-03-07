import Home from './components/Home'
import About from './components/About'

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/posts/:id", component: About},
    
];

export default routes;