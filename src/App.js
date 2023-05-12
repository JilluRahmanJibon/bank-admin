import Swal from "sweetalert2";
import Login from "./Authentication/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import AdminRoutes from "./Routes/AdminRoutes";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const local = localStorage.getItem("user")
  const json = JSON.parse(local)

  const navigate = useNavigate();

 
  if (json?.role === 'user') {
    Swal.fire({
      title: "Error!",
      text: "You are not a admin!",
      icon: "error",
      confirmButtonText: "Try again",
      confirmButtonColor: "#374151",
      background: "#1f2937",
      color: "#fff",
    });
    localStorage.clear()
    navigate('/')
  }
  return (
    <div>
      <Routes>

        {
          !json?.email || json?.role === 'user' ? <Route path={"/"} element={<Login />}></Route> :
            <>
              {
                AdminRoutes?.map(({ Component, path }, index) => (
                  <Route key={index * 33494} path="/" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path={path} element={<Component />}></Route>
                  </Route>
                ))
              }
            </>
        }
      </Routes>
    </div>
  );
}

export default App;