import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/contact/contact.jsx";
import User from "./components/User/User.jsx";
const router= createBrowserRouter([
  {
    path : '/',
    element :<LayOut/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path : 'about',
        element: <About/>
      }
      ,
      {
        path : 'contact',
        element: <Contact/>
      },
      {
        path : 'user/:id',
        element: <User/>
      }
    ]
  }
])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes path="/" element={LayOut}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:id" element={<User />} />
//     </Routes>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
