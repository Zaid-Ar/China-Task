import React from "react";
import { ProductFormData } from "./ProductFormData";
import { useFormContext } from "react-hook-form";

const PriceForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();
  return (
    <div className="grid grid-cols-2 gap-4 mt-20">
      <div className="col-span-1">
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg"
            
          >
            Price
          </label>
          <input
            type="text"
            min={1}
            placeholder="AED"
            className=" border border-lime-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
            {...register("price", { required: "This field is required" })}
            required
          />
              {errors.price && (
         <span className="text-red-500">{errors.price.message}</span>
       )}
        </div>
        <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">
        Brand
        </label>
       <select
            {...register("brand", { required: "This field is required" })}
         className="border border-lime-400 bg-white  text-gray-500   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-3 "
       >
         <option value="" className="text-sm font-bold ">
           Select as Brand
         </option>
         {[1, 2, 3, 4, 5].map((selectedBrand) => (
           <option value={selectedBrand}>{selectedBrand}</option>
         ))}
       </select>
       {errors.brand && (
         <span className="text-red-500">{errors.brand.message}</span>
       )}
       </div>
 
      </div>
      <div className="col-span-1">
      <div className="mb-6">
          <label
            htmlFor="Compare-atPrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg"
          >
            Compare-at Price
          </label>
          <input
             type="text"
             min={1}
            placeholder="AED"
            className=" border border-lime-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register("compareAt", { required: "This field is required" })}
          />
  {errors.compareAt && (
         <span className="text-red-500">{errors.compareAt.message}</span>
       )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg"
          >
            Amount
          </label>
          <input
            type="text"
            placeholder="AED"
            className=" border border-lime-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register("amount", { required: "This field is required" })}
          />
            {errors.amount && (
         <span className="text-red-500">{errors.amount.message}</span>
       )}
        </div>
      </div>
    </div>
  );
};

export default PriceForm;
