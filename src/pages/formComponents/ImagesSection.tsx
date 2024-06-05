import React, { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductFormData } from './ProductFormData';

const ImagesSection: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ProductFormData>();

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

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      'imageUrls',
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div>
      <div className="text-2xl font-bold mb-3">Images</div>
      <div className="border rounded p-4 flex flex-col gap-4">
        {existingImageUrls.length > 0 && (
          <div className="grid grid-cols-6 gap-4">
            {existingImageUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img src={url} alt="Uploaded preview" className="min-h-full object-cover" />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                  onClick={(event) => handleDelete(event, url)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal"
          {...register('imageFiles', {
            validate: (imageFiles: FileList | null) => {
              if (!imageFiles) return 'At least one image should be added';

              const filesArray = Array.from(imageFiles);
              const totalLength = filesArray.length + existingImageUrls.length;

              if (totalLength === 0) {
                return 'At least one image should be added';
              }

              if (totalLength > 6) {
                return 'No more than 6 images can be added';
              }
              return true;
            },
          })}
          onChange={handleFileChange}
        />
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
