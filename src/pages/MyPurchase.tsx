import React from 'react'
import PurchasedItem from './component/PurchasedItem'

const MyPurchase = () => {
  return (
    <div className='rounded-lg  text-center text-surface shadow-xl bg-neutral-100 gap-4 text-surface p-5 pb-20'>
        <p className='text-left text-2xl font-semibold'>My Purchase:</p>
        <div className='grid grid-cols-5 gap-4"'>
        <div className="col-start-2"> 
        <input type="search" id="search" className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5  text-lime-700 " placeholder="Search" required /></div>
        <div className="">    <select id="Conditions" className=" bg-gray-50 border ml-10 border-gray-300  text-sm rounded-lg block w-full p-2.5  text-lime-700">
      <option selected>Conditions</option>
      </select></div>
        <div className="ml-10"><div className="">    <select id="Lastweek" className=" bg-gray-50 border ml-10 border-gray-300 block w-full p-2.5  text-sm rounded-lg text-lime-700">
      <option selected>Last Week</option>
      </select></div></div>
       
        </div>
        <PurchasedItem/> 
      
      
         
          
    </div>
  )
}

export default MyPurchase