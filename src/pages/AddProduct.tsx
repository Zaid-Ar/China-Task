import React from 'react'
import Forms  from '../pages/formComponents/Forms'

const AddProduct = () => {
  const  navigate = useNavigate()
  const { mutate} = useMutation(apiClient.addMyProduct, {
    onSuccess: () => {
      navigate("/")
    },
    onError: () => {
      console.log({ message: "Error Saving Hotel", type: "ERROR" });
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