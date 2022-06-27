import { useRoutes } from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home";
import Detail from "./components/Detail";

export default function Router(){
    return useRoutes([
        {
            children: [
                {path: '/', element: <Home/> },
                {path: '/users', element: <Users/> },
                {path: '/detail/:login', element: <Detail/>}
            ]
        }
    ])
}