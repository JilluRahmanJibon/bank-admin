import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import ModalImage from "react-modal-image";

const DepositConversationView = () => {
  const [reFetch, setReFetch] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/deposit/${location.state.name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [reFetch]);
  const handleForm = (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    const info = {
      name: "Admin",
      message,
      to: location.state.name,
    };

    fetch(`http://server.bank.genzam.it/api/v1/deposit`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Success!",
            text: "Reply success!",
            icon: "success",
            confirmButtonText: "Thank you!",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
          e.target.reset();
          setReFetch(!reFetch);
        }
      })
      .catch((err) => {
        if (err.message) {
          console.log(err.message);
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

  const handleDownload = (info) => {
    fetch(`http://server.bank.genzam.it/images/${info}`)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = info;
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div>
      <div>
        {data.map((info) => {
          return (
            <div key={info._id} className="border p-3 my-2">
              <div className="flex items-center gap-1 mt-3">
                <p>
                  {new Date(info.milliseconds).toLocaleString().split(",")[0]}
                </p>{" "}
                |
                <p>
                  {new Date(info.milliseconds).toLocaleString().split(",")[1]}
                </p>
              </div>
              <p className="font-medium text-white/80 text-lg">
                {info.name}{" "}
                <span className="text-sm">
                  ( {info.name === "Admin" ? "Admin" : "Stuff"} )
                </span>
              </p>
              <p className="mt-3">{info.message}</p>
              {info.name === "Admin" ? undefined : (
                <>
                  <ModalImage
                    small={`http://server.bank.genzam.it/images/${info.image}`}
                    large={`http://server.bank.genzam.it/images/${info.image}`}
                    alt="Hello World!"
                    className="h-40 w-40"
                  />
                  <button
                    onClick={() => handleDownload(info.image)}
                    className="border p-1 mt-2"
                  >
                    Download
                  </button>
                </>
              )}
            </div>
          );
        })}
        <form onSubmit={handleForm}>
          <div className="mt-3">
            <textarea
              className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
              name="message"
              id="message"
              cols="20"
              rows="3"
              placeholder="Please write your message!"
            ></textarea>
          </div>
          <input
            className="w-full bg-info rounded text-primary drop-shadow-xl font-medium py-2 cursor-pointer mt-5 mb-2"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default DepositConversationView;
