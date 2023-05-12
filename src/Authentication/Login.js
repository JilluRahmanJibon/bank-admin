import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthUser from "../Hooks/AuthUser";
import { useState } from "react";

const Login = () => {
  const { http, setToken, getToken } = AuthUser();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);


  if (getToken()) {
    // setRole(userInfo.role);
    return navigate("/");
  }

  //   handle login from for user
  const handleLoginForm = async (e) => {
    e.preventDefault();
    const username = e?.target?.username?.value;
    const password = e?.target?.password?.value;

    await http
      .post("/login", { username: username, password: password })
      .then((res) => {
        console.log(res.data)
        if (res?.data?.status === "success") {
          Swal.fire({
            title: "Success!",
            text: "Welcome to genzam bank!",
            icon: "success",
            confirmButtonText: "Thank you!",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });

          setToken(
            res.data.data.token,
            res.data.data.user
          );
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.message) {
          Swal.fire({
            title: "Error!",
            text: "Your email and password doe's not match!",
            icon: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
        }
      });
  };


  // forgot password 
  const forgotPassword = async (e) => {
    e.preventDefault()
    const email = e.target.email.value

    await http
      .post(`/forgot-password`, { email })
      .then((res) => {
        console.log(res.data)
        if (res?.data?.status === "success") {
          Swal.fire({
            title: "Success!",
            text: "Welcome to genzam bank!",
            icon: "success",
            confirmButtonText: "Thank you!",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });

          setToken(
            res.data.data.token,
            res.data.data.user
          );
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.message) {
          Swal.fire({
            title: "Error!",
            text:   `${err.message}`,
            icon: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
        }
      });
  }

  return (
    <div>
      <form
        onSubmit={handleLoginForm}
        className="md:w-1/2 shadow-xl rounded mt-[20vh] mx-auto my-auto border-secondary border-2 p-5"
      >
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-secondary p-2 w-full rounded outline-none"
            placeholder="username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-secondary p-2 w-full rounded outline-none"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="text-white bg-secondary px-5 py-2 rounded"
          >
            Submit
          </button>
          <a
            onClick={() => setShowModal(true)}
            className="text-white cursor-pointer underline mx-5"
          >
            Forgot password?
          </a>
        </div>
      </form>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <form onSubmit={forgotPassword} className="border-0 rounded-lg relative flex flex-col w-full bg-[#1F2937] shadow-xl  shadow-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-secondary border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Forgot Password
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-secondary p-2 w-full rounded outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-secondary border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"

                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Login;