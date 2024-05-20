import React from 'react'
import  DetailsForm  from './component/DetailsForm'

const AccountDetails = () => {
  return (
    <div className='rounded-lg  text-center text-surface shadow-xl bg-neutral-100 gap-4 text-surface p-5 pb-20'>
        <p className='text-left text-2xl font-semibold '>Account Details:</p>
        <DetailsForm/>
        </div>
  )
}

export default AccountDetails