import React from 'react'
import Forms  from '../pages/formComponents/Forms'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {
  const  navigate = useNavigate()
  const { mutate} = useMutation(apiClient.addMyProduct, {
    onSuccess: () => {
      navigate("/")
    },
    onError: () => {
      console.log({ message: "Error Saving this product", type: "ERROR" });
    },
  });

  const handleSave = (productFormData: FormData) => {
    mutate(productFormData);
  };
  return (
    <Forms onSave={handleSave}/>
  )
}

export default AddProduct