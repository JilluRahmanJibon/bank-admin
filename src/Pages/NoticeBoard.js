import React from "react";
import Swal from "sweetalert2";

const NoticeBoard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const header = e.target.header.value;
    const body = e.target.body.value;
    const footer = e.target.footer.value;
    const info = {
      header,
      body,
      footer
    };

    fetch(`http://server.bank.genzam.it/api/v1/notice`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        Swal.fire({
          title: "Successful",
          text: "WoW Successfully Submit your Notice",
          icon: "success",
          confirmButtonText: "Thank you",
          confirmButtonColor: "#374151",
          background: "#1f2937",
          color: "#fff",
        });
      });
  };
  return (
    <div className="bg-secondary/50 border border-info/80 p-3">
      <h2 className="text-2xl">Notice Board</h2>
      <form action="" onSubmit={handleSubmit}>
        <section>
          <div className="mt-3">
            <div className="w-full">
              <input
                className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                type="text"
                name="header"
                placeholder="Type header.."
              />
            </div>
          </div>
          <div className="mt-3">
            <textarea
              className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
              name="body"
              id="message"
              cols="20"
              rows="3"
              placeholder="Type body.."
              required
            ></textarea>
          </div>
          <div className="w-full">
            <input
              className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
              type="text"
              name="footer"
              placeholder="Type footer.."
            />
          </div>
          <input
            className="w-full bg-info rounded text-primary  font-medium py-2 cursor-pointer mt-5 mb-2"
            type="submit"
            value="Submit"
          />
        </section>
      </form>
    </div>
  );
};

export default NoticeBoard;
