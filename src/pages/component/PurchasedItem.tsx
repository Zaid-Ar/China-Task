
import Legion from "../../assets/legion.jpeg"
import { MdOutlineArrowForwardIos } from "react-icons/md";
const PurchasedItem = () => {
  return (
  


<div  className="grid grid-cols-6 items-center bg-white border border-gray-200 rounded-lg shadow mt-10">
  <div className="col-span-1">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Legion} alt=""></img>
    </div>
    <div className="col-span-3 justify-between p-4 leading-normal">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
    </div>

    <div className="col-span-2 ">
      <div className="grid grid-cols-7 py-10">
      <div className="col-span-1">
      <div className="inline-block h-[100px] min-h-[1em] w-0.5  self-stretch bg-lime-400"></div>
      </div>
       <div className="col-start-2 col-end-3">
               <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-lime-700 text-nowrap mt-8 focus:outline-none bg-lime-300 rounded-lg ">Rate Product</button>
       </div>
       <div className="col-start-6 pt-10  ">
       <MdOutlineArrowForwardIos className="text-lime-400" size={"2rem"} />
       </div>
       <div className="col-start-3 col-end-6">
              <p className="text-nowrap mt-2">Order Code : #4300994fw </p>
       </div>
    </div>
      
      </div>
    



</div>



  )
}

export default PurchasedItem