import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Noticias } from "../pages/Noticias";
import App from "../App";
import { Noticia } from "../pages/Noticia";


export const AppRoute = createBrowserRouter([
    {path:'/',element:<App/>, children:[
     {index:true,element:<Home/>},
    {path: 'noticias',element:<Noticias/>},
    {path: 'noticia/:id', element: <Noticia/>}
    ]}
])
   