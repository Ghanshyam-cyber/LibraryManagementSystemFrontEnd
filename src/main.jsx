import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Login from "./Components/Cards/Login.jsx";
import Registration from "./Components/Cards/Registration.jsx";
import BooksTable from "./Components/Tables/BooksTable.jsx";
import UsersTable from "./Components/Tables/UsersTable.jsx";
import AddUser from "./Components/Cards/AddUser.jsx";
import AddBook from "./Components/Cards/AddBook.jsx";
import BookAssign from "./Components/Cards/BookAssign.jsx";
import BookRetrieve from "./Components/Cards/BookRetrieve.jsx";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={ <Layout /> }  >
//         <Route path='' element={ <Containt />} />
//         <Route path='about' element={ <About />} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", element: <Home />,
      },
      { path: "/about", element: <About />},
      { path: "/login", element: <Login />},
      { path: "/register", element: <Registration /> },
      { path: "/books/:managerId", element: <BooksTable /> },
      { path: "/users/:managerId", element: <UsersTable /> },
      { path: "/addUser/:managerId", element: <AddUser /> },
      { path: "/addBook/:managerId", element: <AddBook /> },
      {path: "/assign/:managerId", element : <BookAssign />},
      {path: "/return/:managerId" , element: <BookRetrieve />}

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
