import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from "../widgets/Nav/Nav";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
//import DeckPage from '../pages/DeckPage/DeckPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      /*{
        path: '/tasks',
        element: <TasksPage />
      },*/
      {
        path: '/registration',
        element: <RegistrationPage />
      },
      
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
