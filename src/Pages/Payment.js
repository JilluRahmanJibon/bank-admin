import React, { useEffect, useState } from 'react';

const Payment = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/paymentHistory`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data)
  return (
    <div className="overflow-scroll">
      <table className="table-fixed w-full">
        <thead className="w-full">
          <tr>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              No
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Id
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Amount
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="max-h-10">
          {
            data?.map((info, index) => {
              return <tr key={index}>
                <td className="text-start border border-secondary p-1 font-normal">
                  {index + 1}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.id}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.amount}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.status}
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Payment;