import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfileTable = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h1 className='text-center text-2xl'>{location.state.username}'s Profile</h1>
      <div className='flex flex-col gap-5 my-20'>
        <label htmlFor="address">Address
          <p className='w-full border border-info p-2 rounded'>
            {location.state.address ? location.state.address : "No address found!"}
          </p>
        </label>
        <label htmlFor="address">Balance
          <p className='w-full border border-info p-2 rounded'>
            {location.state.balance ? location.state.balance : "0"}
          </p>
        </label>
        <label htmlFor="address">Company
          <p className='w-full border border-info p-2 rounded'>
            {location.state.company ? location.state.company : "No company found!"}
          </p>
        </label>
        <label htmlFor="address">Company Address
          <p className='w-full border border-info p-2 rounded'>
            {location.state.companyAddress ? location.state.companyAddress : "No address found!"}
          </p>
        </label>
        <label htmlFor="address">Company City
          <p className='w-full border border-info p-2 rounded'>
            {location.state.companyCity ? location.state.companyCity : "No company city found!"}
          </p>
        </label>
        <label htmlFor="address">Created At
          <p className='w-full border border-info p-2 rounded'>
            {location.state.createdAt ? location.state.createdAt : "No created date found!"}
          </p>
        </label>
        <label htmlFor="address">Email
          <p className='w-full border border-info p-2 rounded'>
            {location.state.email ? location.state.email : "No email found!"}
          </p>
        </label>
        <label htmlFor="address">Phone
          <p className='w-full border border-info p-2 rounded'>
            {location.state.phone ? location.state.phone : "No phone found!"}
          </p>
        </label>
        <label htmlFor="address">Commission
          <p className='w-full border border-info p-2 rounded'>
            {location.state.totalCommission ? location.state.totalCommission : "No commission found!"}
          </p>
        </label>
        <label htmlFor="address">Deposit
          <p className='w-full border border-info p-2 rounded'>
            {location.state.totalDeposit ? location.state.totalDeposit : "No deposit found!"}
          </p>
        </label>
        <label htmlFor="address">Withdraw
          <p className='w-full border border-info p-2 rounded'>
            {location.state.totalWithdraw ? location.state.totalWithdraw : "No withdraw found!"}
          </p>
        </label>
        <label htmlFor="address">UpdatedAt
          <p className='w-full border border-info p-2 rounded'>
            {location.state.updatedAt ? location.state.updatedAt : "No updated date found!"}
          </p>
        </label>
      </div >

    </div>
  );
};

export default ProfileTable;