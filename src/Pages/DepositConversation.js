import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DepositConversation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://server.bank.genzam.it/api/v1/depositUser")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="border p-5">
      <div className="overflow-scroll">
        <table className="table-fixed w-full">
          <thead className="w-full">
            <tr>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                Name
              </th>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                Subject
              </th>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                View
              </th>
              <th className="text-start border border-secondary p-1 font-medium w-40">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="max-h-10">
            {data.map((info) => {
              return (
                <tr key={info._id}>
                  <td className="text-start border border-secondary p-1 font-normal">
                    {info.name}
                  </td>
                  <td className="text-start border border-secondary p-1 font-normal">
                    {info.subject}
                  </td>
                  <td className="text-start border border-secondary p-1 font-normal">
                    <Link
                      to="/deposit-conversation-view"
                      state={{ name: info.name }}

                    >
                      View
                    </Link>
                  </td>
                  <td className="text-start border border-secondary p-1 font-normal">
                    {info.total > 0 ? `Unseen(${info.total})` : "Seen"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositConversation;
