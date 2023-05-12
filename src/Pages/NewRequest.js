import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NewRequest = () => {
  const [reFetch, setReFetch] = useState(false);
  const [data, setData] = useState([]);
  const [note, setNote] = useState({});
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("http://server.bank.genzam.it/api/v1/newRequest")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [reFetch]);
  console.log(data);

  const handleApprove = (info) => {
    const information = {
      amount: info.amount,
      commission: info.commission,
      customer: info.customer,
      date: info.date,
      message: info.message,
      method: info.method,
      recipient: info.recipient,
      trx: info.trx,
      type: info.type,
      previousId: info._id,
    };
    fetch(`http://server.bank.genzam.it/api/v1/requestApprove/${info._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Success!",
            text: "Approve success!",
            icon: "success",
            confirmButtonText: "Thank you!",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
          setReFetch(!reFetch);
        }
      })
      .catch((err) => {
        if (err.message) {
          Swal.fire({
            title: "Error!",
            text: "Something wrong!",
            icon: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
        }
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const text = e.target.note.value;
    const info = {
      amount: note.amount,
      approve: note.approve,
      commission: note.commission,
      customer: note.customer,
      date: note.date,
      message: note.message,
      method: note.method,
      note: text,
      recipient: note.recipient,
      trx: note.trx,
      type: note.type,
      previousId: note._id,
    };
    fetch(`http://server.bank.genzam.it/api/v1/requestDelete/${note._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setNote({});
        if (data) {
          Swal.fire({
            title: "Success!",
            text: "Delete success!",
            icon: "success",
            confirmButtonText: "Thank you!",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
          setReFetch(!reFetch);
        }
      })
      .catch((err) => {
        if (err.message) {
          Swal.fire({
            title: "Error!",
            text: "Something wrong!",
            icon: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
        }
      });
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      fetch(`http://server.bank.genzam.it/api/v1/searchNewRequest/${inputValue}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  return (
    <div className="mt-16 relative">
      <div>
        <label className="text-md" htmlFor="search">
          Search :{" "}
        </label>
        <input
          className="p-1 w-full border outline-none border-info bg-secondary rounded-md text-white"
          type="search"
          name=""
          id=""
          placeholder="Type amount or recipient.."
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      {/* table section */}
      <div className={`z-10 ${note._id ? "block" : "hidden"}`}>
        <div
          className={`flex justify-center items-center absolute top-2/4 left-0 right-0`}
        >
          <div className=" rounded-lg bg-secondary p-3 ">
            <form onSubmit={handleDelete}>
              <div className="w-full">
                <label htmlFor="">
                  <p className="text-info/80 font-medium">
                    Note <span className="text-danger">*</span>
                  </p>
                  <textarea
                    className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                    name="note"
                    id="message"
                    cols="20"
                    rows="3"
                    placeholder="Please write your message!"
                    required
                  ></textarea>
                </label>
              </div>
              <input
                className="w-full bg-info rounded text-primary  font-medium py-2 cursor-pointer mt-5 mb-2"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="overflow-scroll">
        <table className="w-full border-collapse  text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 text-sm py-4 font-medium text-gray-900"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 text-sm py-4 font-medium text-gray-900"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                TRX
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Payment
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Service
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Recipient
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Comission
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-gray-900"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {data?.map((info, index) => {
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <p className="font-normal text-sm text-gray-700">
                      {index + 1}
                    </p>
                  </th>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {new Date(info.date).toLocaleString().split(",")[0]}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {info.trx}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {info.method}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {info.type}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {info.customer}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {info.recipient}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {info.amount}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-sm  bg-green-600">
                      {info.commission}
                    </p>
                  </td>
                  <td className="px-6 py-4 ">
                    <span
                      className={`${info.approve ? "bg-info" : "bg-danger"
                        } text-sm font-medium mr-2 px-3 py-2  rounded-full `}
                    >
                      {info.approve ? "Approve" : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      {info.approve ? (
                        <div
                          className={`bg-danger p-3 rounded-l-lg cursor-pointer`}
                          onClick={() => setNote(info)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-3"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      ) : (
                        <>
                          <div
                            className={`bg-danger p-3 rounded-l-lg cursor-pointer`}
                            onClick={() => setNote(info)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-3"
                              x-tooltip="tooltip"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>

                          <div
                            className={`bg-info p-3 rounded-r-lg cursor-pointer`}
                            onClick={() => handleApprove(info)}
                          >
                            <svg
                              className="w-3 "
                              viewBox="0 0 101 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M34.2893 100.564C31.1958 100.564 28.2911 99.0392 26.5166 96.4813L2.71289 62.1746C-0.587311 57.4166 -0.305071 50.991 3.39849 46.5469C5.96309 43.4698 9.70777 41.8046 13.6958 41.9851C17.676 42.1634 21.2685 44.1539 23.5542 47.4474L35.1827 64.2066C35.336 64.4264 35.5505 64.4668 35.6638 64.4701C35.7783 64.4892 35.995 64.4488 36.1627 64.2414L84.6824 3.87243C86.5059 1.60497 89.3016 0.375931 92.2029 0.587873C95.0886 0.798695 97.6943 2.42359 99.1744 4.93326C100.952 7.9498 100.812 11.7558 98.8166 14.6299L48.9057 86.5671L42.0764 96.4623C40.3063 99.0269 37.3995 100.56 34.3015 100.563C34.2982 100.564 34.2937 100.564 34.2893 100.564ZM13.1235 46.4584C10.6745 46.4584 8.38769 47.5304 6.80092 49.4345C4.39077 52.3266 4.20743 56.5071 6.35423 59.6011L30.1579 93.9089C31.1158 95.2882 32.6214 96.081 34.2904 96.081C34.2926 96.081 34.2948 96.081 34.2971 96.081C35.9683 96.0788 37.475 95.2837 38.4295 93.8999L45.2622 84.0003L95.1764 12.0597C96.1709 10.6277 96.2409 8.73141 95.3553 7.22875C94.6064 5.96046 93.3407 5.171 91.8817 5.06334C90.4239 4.95905 89.0571 5.55339 88.136 6.69945L39.6141 67.0684C38.604 68.3243 37.095 69.0095 35.506 68.9546C33.9048 68.8963 32.4603 68.1046 31.5413 66.7802L19.9128 50.0199C18.4261 47.8769 16.0882 46.5817 13.4991 46.4662C13.3736 46.4606 13.248 46.4584 13.1235 46.4584Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
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

export default NewRequest;
