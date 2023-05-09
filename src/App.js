import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home';
import Phone from './Component/Phone';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/phones')
        },
        {
          path: '/phones/:id',
          element: <Phone></Phone>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
