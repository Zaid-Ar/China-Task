import React, { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductFormData } from './ProductFormData';
import { TbPhotoUp } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";
const ImagesSection: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ProductFormData>();
  const mainImageUrl = watch('mainImage');
  const existingImageUrls = watch('imageUrls') || [];
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const files = Array.from(fileList);
    const fileUrls: string[] = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        fileUrls.push(result);

        // Update the form state with new image URLs
        setValue('imageUrls', [...existingImageUrls, ...fileUrls]);
      };
      reader.readAsDataURL(file);
    });

    setValue('imageFiles', fileList);
  };
  
  
  const handleSelect = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
   mainImage: string
  ) => {
    event.preventDefault();
    setValue('mainImage', mainImage);
    
  };
   
  

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      'imageUrls',
      existingImageUrls.filter((url) => url !== imageUrl)
    );
    if (imageUrl === mainImageUrl) {
      setValue('mainImage', '');
    }
  };

  return (
    <div className='grid grid-cols-6 gap-4 w-full'>
      <div className='col-start-1 col-end-2'>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">Enter images for projects</label>
      </div>
      <div className="col-start-1 col-end-6 overflow-auto grid-cols-1 gap-4 items-center justify-center w-full h-96 border-2 border-gray-900 border-dashed rounded-lg cursor-pointer bg-gray-50 mb-6">
        {existingImageUrls.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 px-10 py-5">
            {existingImageUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img src={url} alt="Uploaded preview" className={`min-h-full object-cover border ${mainImageUrl=== url ? "border-blue-700":"border-gray-400"} `} />
                
                <button
                  className={`absolute  top-0 left-0  grid items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-gray-300`}
                  onClick={(event) => handleSelect(event, url)}
                >
       <MdAdd size="30px"  className='hover:text-lime-500'/>
                </button>
                <button
                  className="absolute  top-0 right-0  grid items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-gray-300"
                  onClick={(event) => handleDelete(event, url)}
                >
                  <MdDelete size="30px" className='hover:text-red-500'/>
                </button>
              </div>
            ))}
          </div>
        ): <div className=' grid w-full justify-center items-center h-full'><TbPhotoUp size="60px" /></div> }
       
      </div>
      <div className='col-start-1 col-end-3'>
      <label className="w-1/2 h-8   m-2 text-lg text-black transition-colors duration-150 bg-lime-200 rounded-lg focus:shadow-outline hover:bg-lime-600 cursor-pointer">
        Select Images
      <input
          type="file"
          
          multiple
          accept="image/*"
          className="hidden"
          {...register('imageFiles', {
            validate: (imageFiles: FileList | null) => {
              if (!imageFiles) return 'At least 5 image should be added';

              const filesArray = Array.from(imageFiles);
              const totalLength = filesArray.length + existingImageUrls.length;


              if (totalLength < 5) {
                return 'at least 5 images must be added';
              }
              return true;
            },
          })}
          onChange={handleFileChange}
          
        />
    </label>
    </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
