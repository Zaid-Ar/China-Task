import React from "react";
import MainForm from "./MainForm";
import SecondForm from "./SecondForm";
import { FormProvider, useForm } from "react-hook-form";
import { ProductFormData } from "./ProductFormData";

type Props = {
  onSave:(ProductFormData:FormData)=>void
 }

const Forms = ({onSave}:Props) => {



  const formMethods = useForm<ProductFormData>();
  const { handleSubmit } = formMethods;
  const onSubmit = handleSubmit((formDataJson: ProductFormData) => {
    const formData = new FormData()
    formData.append("nameAR", formDataJson.nameAR);
    formData.append("nameEN", formDataJson.nameEN);
    formData.append("descriptionAR", formDataJson.descriptionAR);
    formData.append("descriptionEN", formDataJson.descriptionEN);
    formData.append("price",formDataJson.price.toString())
    formData.append("brand",formDataJson.brand)
    formData.append("compareAt",formDataJson.compareAt.toString())
    formData.append("amount",formDataJson.compareAt.toString())
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }



    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    formData.append("mainImage", formDataJson.mainImage);
    formData.append("MainCategory",formDataJson.MainCategory)
    formData.append("SubCategory",formDataJson.SubCategory)
    formData.append("tag",formDataJson.tag)
    formData.append("unit",formDataJson.unit)
    formData.append("color",formDataJson.color)
    onSave(formData);
  
  });
  return (
    <>
      <FormProvider {...formMethods}>
        <form className="grid grid-Cols-5 gap-4" onSubmit={onSubmit}>
          <div className="col-start-1 col-end-2">
            <MainForm />
          </div>
          <div className="col-start-3 col-end-5">
            <SecondForm />
          </div>
          
          <button
         
            type="submit"
            className="col-start-1 col-end-2 bg-lime-200 rounded-lg focus:shadow-outline hover:bg-lime-600 text-black hover:text-white p-2 font-bold text-lg disabled:bg-gray-500"
          >
           Save
          </button>
      
        </form>
      </FormProvider>
    </>
  );
};

export default Forms;
