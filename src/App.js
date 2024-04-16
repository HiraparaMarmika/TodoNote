import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Rootlayout from "./pages/Rootlayout";
import Todoallpage, { loader } from "./pages/Todoallpage";
import Loginpage from "./pages/Loginpage";
import Registrationpage from "./pages/Registrationpage";
import PrivateRouts from "./Routes/PrivateRouts";
import Error from "./pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: (
        <PrivateRouts>
          <Rootlayout />
        </PrivateRouts>
      ),
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <Aboutpage />,
        },
        {
          path: "/todoall",
          element: <Todoallpage />,
          loader: loader,
        },
      ],
    },

    {
      path: "/reg",
      element: <Registrationpage />,
    },
    { path: "/login", element: <Loginpage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
