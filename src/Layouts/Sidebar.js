import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
    window.location.reload()
  }
  return (
    <div className="pt-20 bg-secondary/40 backdrop-blur-xl pb-[20rem]">
      <div className="mt-5"></div>
      <ul className="flex flex-wrap font-bold text-start">
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive
              ? "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full mt-5"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full mt-5"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Dashboard</p>
          </div>
        </NavLink>

        <NavLink
          to={`new-request`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.175 20H16q-.425 0-.713-.288T15 19q0-.425.288-.713T16 18h3.175l-.9-.9Q18 16.825 18 16.412t.3-.712q.275-.275.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T18.3 22.3q-.275-.275-.275-.7t.275-.7l.875-.9ZM11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm-6 8q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v8.35q-.475-.175-.988-.263T18.976 13q-2.5 0-4.237 1.75T13 19q0 .525.088 1.025t.262.975H5Z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">New Request</p>
          </div>
        </NavLink>
        <NavLink
          to={`pending-orders`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 13.5q.625 0 1.063-.438T8.5 12q0-.625-.438-1.063T7 10.5q-.625 0-1.063.438T5.5 12q0 .625.438 1.063T7 13.5Zm5 0q.625 0 1.063-.438T13.5 12q0-.625-.438-1.063T12 10.5q-.625 0-1.063.438T10.5 12q0 .625.438 1.063T12 13.5Zm5 0q.625 0 1.063-.438T18.5 12q0-.625-.438-1.063T17 10.5q-.625 0-1.063.438T15.5 12q0 .625.438 1.063T17 13.5ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Pending Orders</p>
          </div>
        </NavLink>
        <NavLink
          to={`payment`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 6h16v2H4zm0 6h16v6H4z"
                opacity=".3"
              />
              <path
                fill="currentColor"
                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Payments</p>
          </div>
        </NavLink>
        <NavLink
          to={`deposit-conversation`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">

            <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z" /></svg>
            <p className="drop-shadow-2xl w-40 text-start">Deposit Conversation</p>
          </div>
        </NavLink>
        <NavLink
          to={`deposit`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7H4Z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Deposit</p>
          </div>
        </NavLink>
        <NavLink
          to={`/minus-balance`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.72 5.72 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2m4 4V4h-4v2h4m0 11h8v2h-8v-2Z" /></svg>
            <p className="drop-shadow-2xl w-40 text-start">Minus Balance</p>
          </div>
        </NavLink>
        <NavLink
          to={`/notice-board`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="feNoticeActive0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g id="feNoticeActive1" fill="currentColor"><path id="feNoticeActive2" d="M15.085 4.853a2.501 2.501 0 1 1 2.572 3.142A5.99 5.99 0 0 1 18 10v6h1c.55 0 1 .45 1 1s-.45 1-1 1h-4v1a3 3 0 0 1-6 0v-1H5c-.55 0-1-.45-1-1s.45-1 1-1h1v-6a6.002 6.002 0 0 1 5-5.917V3a1 1 0 0 1 2 0v1.083a5.961 5.961 0 0 1 2.085.77ZM12 20a1 1 0 0 0 1-1v-1h-2v1a1 1 0 0 0 1 1Zm-4-4h8v-6a4 4 0 1 0-8 0v6Z" /></g></g></svg>
            <p className="drop-shadow-2xl w-40 text-start">Notice Board</p>
          </div>
        </NavLink>
        <div onClick={handleLogout} className="flex drop-shadow-2xl px-5 w-80 mx-auto bg-danger py-3 mt-5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.325 16.275q-.275-.325-.275-.737t.275-.688l1.85-1.85H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175l-1.85-1.85q-.3-.3-.3-.713t.3-.712q.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-3.6 3.6q-.325.325-.713.288t-.662-.313ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Z" /></svg>
          <p>Logout</p>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;