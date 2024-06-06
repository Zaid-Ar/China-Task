import React from "react";
import { ProductFormData } from "./ProductFormData";
import { useFormContext } from "react-hook-form";
const Category = () => {
    const {
        register,
        formState: { errors },
      } = useFormContext<ProductFormData>();
  return (
    <div className="grid grid-cols-2 gap-4 mt-20">
         <div className="mt-10 col-start-1 col-end-1">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">
        Main Category
        </label>
       <select
            {...register("MainCategory", { required: "This field is required" })}
         className="border border-lime-400 mb-2 bg-white  text-gray-500   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-3 "
       >
         <option value="" className="text-sm font-bold ">
           Select Category
         </option>
         {[1, 2, 3, 4, 5].map((SelectedMainCategory) => (
           <option value={SelectedMainCategory}>{SelectedMainCategory}</option>
         ))}
       </select>
       {errors.MainCategory && (
         <span className="text-red-500">{errors.MainCategory.message}</span>
       )}
       </div>
       <div className="mt-10 col-start-2 col-end-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">
        Sub-Category
        </label>
       <select
            {...register("SubCategory", { required: "This field is required" })}
         className="border border-lime-400 bg-white  text-gray-500   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-3 "
       >
         <option value="" className="text-sm font-bold ">
           Select Sub-Category
         </option>
         {[1, 2, 3, 4, 5].map((SelectedSubCategory) => (
           <option value={SelectedSubCategory}>{SelectedSubCategory}</option>
         ))}
       </select>
       {errors.SubCategory && (
         <span className="text-red-500">{errors.SubCategory.message}</span>
       )}
       </div>
       <div className="mt-10 col-start-1 col-end-4">
        
        <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">Tag (optional)</label>
        <input   {...register("tag", { required: "This field is required" })} type="text"  className=" border border-lime-400  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        {errors.tag && (
             <span className="text-red-500">{errors.tag.message}</span>
           )}
    </div>
    <div className="mt-10 col-start-1 col-end-1">
        <label className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white text-left text-lg">
       Unit (optional)
        </label>
       <select
            {...register("unit", { required: "This field is required" })}
         className="border border-lime-400 bg-white  text-gray-500 mb-10  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-3 "
       >
         <option value="" className="text-sm font-bold ">
           Select Unit 
         </option>
         {[1, 2, 3, 4, 5].map((SelectedUnit) => (
           <option value={SelectedUnit}>{SelectedUnit}</option>
         ))}
       </select>
       {errors.unit && (
         <span className="text-red-500">{errors.unit.message}</span>
       )}
       </div>
       <div className="mt-10 col-start-2 col-end-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">
        Color (optional)
        </label>
       <select
            {...register("color", { required: "This field is required" })}
         className="border border-lime-400 bg-white  text-gray-500 mb-10  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-3 "
       >
         <option value="" className="text-sm font-bold ">
         Color
         </option>
         {[1, 2, 3, 4, 5].map((SelectedColor) => (
           <option value={SelectedColor}>{SelectedColor}</option>
         ))}
       </select>
       {errors.color && (
         <span className="text-red-500">{errors.color.message}</span>
       )}
       </div>
    </div>
  )
}

export default Category
