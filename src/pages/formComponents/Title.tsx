import React from 'react'
import { ProductFormData } from './ProductFormData';
import { useFormContext } from 'react-hook-form';

const Title = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();
  return (
    <>
    <div className="mb-6">
        
    <label htmlFor="nameAR" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">Name in Arabic</label>
    <input   {...register("nameAR", { required: "This field is required" })} type="text"  className=" border border-lime-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
    {errors.nameAR && (
         <span className="text-red-500">{errors.nameAR.message}</span>
       )}
</div>
    <div className="mb-6">

    <label htmlFor="nameEN" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">Name in English</label>
    <input type="nameEN"   {...register("nameEN", { required: "This field is required" })} className=" border border-lime-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
</div> 
</>
  )

}

export default Title