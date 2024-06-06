import React from "react";
import MainForm from "./MainForm";
import SecondForm from "./SecondForm";
import { FormProvider, useForm } from "react-hook-form";
import { ProductFormData } from "./ProductFormData";
const Forms = () => {
  const formMethods = useForm<ProductFormData>();
  const { handleSubmit } = formMethods;
  const onSubmit = handleSubmit((Data: ProductFormData) => {
    console.log(Data);
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
        </form>
      </FormProvider>
    </>
  );
};

export default Forms;
