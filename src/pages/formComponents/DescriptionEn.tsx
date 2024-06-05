import React, { useEffect} from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from './ProductFormData';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DescriptionEn = () => {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
      } = useFormContext<ProductFormData>();

      const myColors = [
        "purple",
        "#785412",
        "#452632",
        "#856325",
        "#963254",
        "#254563",
        "white"
      ];
      const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ align: ["right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [{ color: myColors }],
          [{ background: myColors }]
        ]
      };
      
      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "generateText",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align"
      ];
    
      useEffect(() => {
        register("descriptionEN", { required: true, minLength: 11 });
      }, [register]);
    
      const onEditorStateChange = (editorState: string) => {
        setValue("descriptionEN", editorState);
      };
    
  
      const descriptionContent = watch("descriptionEN");
  return (
    <>

<div className="mt-20">
<label htmlFor="descriptionEN" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left text-lg">Description in English</label>
<ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={descriptionContent}
        onChange={onEditorStateChange}
        className="h-32"
      />
       {errors.descriptionEN && (
         <span className="text-red-500">{errors.descriptionEN.message}</span>
       )}
</div>
</>
  )
}

export default DescriptionEn