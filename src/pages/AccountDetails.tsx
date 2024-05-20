import React from 'react'
import  DetailsForm  from './component/DetailsForm'
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../api-client";
import { useParams } from "react-router-dom";
const AccountDetails = () => {

  const { userId } = useParams();

  const { data: user } = useQuery(
    "fetchMyUserById",
    () => apiClient.fetchMyUserById(userId || ""),
    {
      enabled: !!userId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyUserById, {
    onSuccess: () => {
    
    },
    onError: () => {
    
    },
  });


  const handleSave = (userFormData: FormData) => {
    mutate(userFormData);
  };

  return (
    <>
    <div className='rounded-lg  text-center text-surface shadow-xl bg-neutral-100 gap-4 text-surface p-5 pb-20'>
        <p className='text-left text-2xl font-semibold '>Account Details:</p>
        <DetailsForm  onSave={handleSave} isLoading={isLoading} user={user}/>
        </div>
            <div className='grid grid-cols-9 gap-4'>

            <button type="submit"  className='col-start-3 col-end-7  block w-full p-4 font-medium text-white text-nowrap mt-8 focus:outline-none bg-red-600 rounded-lg '>
                 Delete User
                </button>
        
            </div>
            </>
  )
}

export default AccountDetails