import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

const WithdrawBalance = () => {
  const [isModal, setIsModal] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [searchId, setSearchId] = useState([]);
  const [id, setid] = useState('');

  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/getSearchId/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchId(data);
      });
  }, [inputValue]);

  console.log(searchId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = e?.target?.amount?.value;
    const info = {
      amount,
      id,
    };
    fetch(`http://server.bank.genzam.it/api/v1/withdrawByAdmin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        setInputValue('')
        setid('')
        if (data.isSuccess) {
          Swal.fire({
            title: "Successful",
            text: "WoW Successfully Submit your withdraw request",
            icon: "success",
            confirmButtonText: "Thank you",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
        }
        else {
          Swal.fire({
            title: "Error!",
            text: "User have not enough balance!",
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
    <div className='bg-secondary/50 border border-info/80 p-3'>
      <h2 className='text-2xl'>Minus from user balance</h2>
      <form action="" onSubmit={handleSubmit}>
        <section className="flex gap-5 mt-5">
          <div className="w-full">
            <label htmlFor="">
              <p className="text-info/80 font-medium">
                Customer Id <span className="text-danger">*</span>
              </p>
              <input
                className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                type="text"
                name="id"
                autoComplete="off"
                value={id?.length > 0 ? id : inputValue}
                onChange={(e) => { setInputValue(e?.target?.value); setIsModal(true) }}
              />
            </label>

            <div className="z-10 relative">
              <div className={`flex justify-center items-center absolute left-0 ${isModal && inputValue?.length > 0 ? 'block' : 'hidden'}`}>
                <div
                  className=" rounded-lg bg-white p-3 "
                  style={{ color: "black" }}
                >
                  {/* {
                  searchId?.map((info,index)=> {
                    return <p key={index} className="hover:cursor-pointer" onClick={()=>{setid(info?.id);setIsModal(false)}}> {info?.id} </p>
                  })
                 } */}
                  <p className="hover:cursor-pointer" onClick={() => { setid(searchId?._id); setIsModal(false) }}> {searchId?._id} </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-3">
            <div className="w-full">
              <label htmlFor="">
                <p className="text-info/80 font-medium">
                  Balance <span className="text-danger">*</span>
                </p>
                <input
                  className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                  type="text"
                  name='amount'
                />
              </label>
            </div>
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

export default WithdrawBalance;