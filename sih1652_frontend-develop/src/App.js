import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Container from './components/Container';
import Login from './components/Login';
import Form from './components/Form';
import Home from './components/Home';
import Signup from './components/Signup';
import Error from './components/Error';
import Loginper from './components/loginper';
import View from './components/view';
import Viewlog from './components/viewlog';
// import 'bootstrap/dist/css/bootstrap.min.css';


const appRouter=createBrowserRouter([
  {
  path: '/',
  element: <Container />,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
  

  ],
},
{
  path:"/form",
  element:<Form/>
},  {
  path:"/login",
  element:<Login/>
},
{
  path:"/signup",
  element:<Signup/>
},
{
  path:"/signup",
  element:<Signup/>
},
{
  path:"/loginper",
  element:<Loginper/>
},
{
  path:"/view",
  element:<View/>
},
{
  path:"/viewlog",
  element:<Viewlog/>
},
])


function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
