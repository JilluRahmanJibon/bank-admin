import React, { useEffect, useState } from "react";
import BarChart from "../Components/BarChart";
import { Link, useNavigate } from "react-router-dom";
import ServerAPI from "../API/ServerAPI";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([])
  const [reloader, setReloder] = useState(true);
  // const local = localStorage.getItem("user")
  // const json = JSON.parse(local)

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://server.bank.genzam.it/api/v1/fourInfoForAdmin")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("http://server.bank.genzam.it/api/v1/user")
      .then((res) => res.json())
      .then((data) => setUsers(data?.data?.data));
  }, []);

  // console.log(json);
  //   if (json?.role === 'user') {
  //     Swal.fire({
  //       title: "Error!",
  //       text: "You are not a admin!",
  //       icon: "error",
  //       confirmButtonText: "Try again",
  //       confirmButtonColor: "#374151",
  //       background: "#1f2937",
  //       color: "#fff",
  //     });
  //     return navigate("/login");
  //   } 

  // console.log(users);

  // delete user
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "info!",
      text: "Are you sure delete your user?",
      icon: "info",
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      confirmButtonColor: "#374151",
      background: "#1f2937",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${ServerAPI}/user/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Success ✔",
              text: "Successfully delete your user!",
              icon: "info",
              confirmButtonText: "yes!",
              confirmButtonColor: "#374151",
              background: "#1f2937",
              color: "#fff",
            });
            setReloder(!reloader);
          });
      } else {
        Swal.fire({
          title: "Info ☺",
          text: "Now safe your user!",
          icon: "info",
          confirmButtonText: "Thank you!",
          confirmButtonColor: "#374151",
          background: "#1f2937",
          color: "#fff",
        });
      }
    });
  };
  return (
    <section>
      <div className="flex gap-2 justify-evenly flex-wrap -z-50">
        <div className="bg-gradient-to-r from-secondary to-primary w-52 p-10 drop-shadow-xl rounded-xl border-info border text-center">
          <p className="font-bold text-2xl">Withdraw</p>
          <p className="mt-2 text-xl font-bold">{data[1]?.withdraw}</p>
        </div>
        <div className="bg-gradient-to-r from-danger/20 to-primary w-52 p-10 drop-shadow-xl rounded-xl border-info border text-center">
          <p className="font-bold text-2xl">Deposit</p>
          <p className="mt-2 text-xl font-bold">{data[2]?.deposit} </p>
        </div>
        <div className="bg-gradient-to-r from-info/20 to-primary w-52 p-10 drop-shadow-xl rounded-xl border-info border text-center">
          <p className="font-bold text-2xl">Commission</p>
          <p className="mt-2 text-xl font-bold">{data[3]?.commission}</p>
        </div>
        <div className="bg-gradient-to-r from-info/20 to-primary w-52 p-10 drop-shadow-xl rounded-xl border-info border text-center">
          <p className="font-bold text-2xl">Customers</p>
          <p className="mt-2 text-xl font-bold">{data[0]?.users}</p>
        </div>
      </div>
      <div className="overflow-scroll">
        <table className="table-fixed w-full mt-5">
          <thead className="w-full">
            <tr>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                No
              </th>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                Name
              </th>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                View profile
              </th>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                Delete user
              </th>
            </tr>
          </thead>
          <tbody className="max-h-10">
            {
              users?.map((info, index) => {
                return <tr key={index}>
                  <td className="text-start border border-secondary p-1 font-normal">
                    {index + 1}
                  </td>
                  <td className="text-start border border-secondary p-1 font-normal">
                    {info.username}
                  </td>
                  <td className="text-start border border-secondary p-1 font-normal">
                    <Link to={`/profile/${info._id}`} state={info}>View</Link>
                  </td>
                  <td className="text-start border border-secondary p-1 font-normal">
                    <button onClick={() => handleUserDelete(info._id)} className="bg-danger px-5 py-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>

      <div>
        <BarChart />
      </div>
    </section>
  );
};

export default Dashboard;
