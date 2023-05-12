import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PendingOrders = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/pendingOrder`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="overflow-scroll">
      <table className="table-fixed w-full">
        <thead className="w-full">
          <tr>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              No
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Date
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              TRX
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Payment
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Service
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Customer
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Recipient
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Amount
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Commission
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
                  {new Date(info.date).toLocaleString().split(',')[0]}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.trx}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.method}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.type}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.customer}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.recipient}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.amount}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {info.commission}
                </td>
                <td className="text-start border border-secondary p-1 font-normal">
                  {
                    info.approve ? "Approve" : 'Pending'
                  }
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;