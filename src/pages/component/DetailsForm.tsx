import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { countries } from './countries';

export type UserType = {
    _id:string;
    email: string;
    fullName: string;
    changePassword: string;
    phoneNumber:string;
    dateOfBirth:string;
    nationality:string;
    gender:string;
}


type Props = {
    user?: UserType;
    onSave: (formData: FormData) => void;
    isLoading: boolean;
  };
  

const DetailsForm = ({ onSave, isLoading, user }: Props) => {
  
  const initialValues :UserType ={
       _id: user?._id || "",
        fullName: user?.fullName  || '',
        email:  user?.email || '',
        changePassword: user?.changePassword ||'',
        phoneNumber: user?.phoneNumber || '',
        dateOfBirth:  user?.dateOfBirth || '',
        nationality: user?.nationality ||'',
        gender:  user?.gender || ""
    
}

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
   fullName: Yup.string()
   .min(2, 'Name must be minimum 2')
   .max(100, 'Name must not be more than 100 characters')
   .required('Name is required'),

   changePassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
    
    
    phoneNumber:Yup.string()

    .matches(/^(?:\+971|0)?(?:50|51|52|55|56|2\d{2}|600|800)(?:\d{7}|\d{6})$/, {
      message: "Invalid UAE number",
      excludeEmptyString: false,
    })
    .required(),

    dateOfBirth:Yup.date().nullable().min(new Date(1900, 0, 1)),
    nationality: Yup.string().required('Country is required'),
    gender:Yup.string().required("Gender is required")

   });

  const handleSubmit = async (values:UserType) => {
    try {

      const formData = new FormData();

      if (user) {
        formData.append("userId", user._id);
      }
      // Object.entries(values).forEach(([key, value]) => {
      //   if (Array.isArray(value)) {
      //     value.forEach((item, index) => {
      //       formData.append(`${key}[${index}]`, item);
      //     });
      //   } else {
      //     formData.append(key, value);
      //   }
      // });
      formData.append("fullName",values.fullName)
      formData.append("email",values.email)
      formData.append("changePassword",values.changePassword)
      formData.append("phoneNumber",values.phoneNumber)
      formData.append("dateOfBirth",values.dateOfBirth)
      formData.append("nationality",values.nationality)
      formData.append("gender",values.gender)
      onSave(formData);

    } catch (error) {
      // Handle form submission error
      console.error(error);

    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });




  return (
    <>
    <div>
  
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-9 gap-3'>
        
    
      <div className='col-start-1 col-end-3 text-left pt-5'>
      <label htmlFor="email">Email</label>
      </div>

      <div className='col-start-4 col-end-6 text-left pt-5'>
      <label htmlFor="changePassword">Change Password</label>
      </div>

      <div className='col-start-1 col-end-3 '>
          <input
            type="email"
            id="email"
            name="email"
            className={"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"} 
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error text-sm text-red-500 flex items-center mt-2">{formik.errors.email}</div>
          )}
        </div>

        <div className='col-start-4 col-end-6'>
          <input
            type="password"
            id="changePassword"
            name="changePassword"
            value={formik.values.changePassword}
            onChange={formik.handleChange}
            className={"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error text-sm text-red-500 flex items-center mt-2">{formik.errors.email}</div>
          )}
        </div>
        


        <div className='col-start-1 col-end-3 text-left pt-5'>
          <label htmlFor="fullName">Full Name</label>
      </div>
      <div className='col-start-4 col-end-6 text-left pt-5'>
          <label htmlFor="fullName">Phone Number</label>
      </div>
      <div className='col-start-7 col-end-9 text-left pt-5'>
          <label htmlFor="dateOfBirth">Date of birth</label>
      </div>
          <div className='col-start-1 col-end-3'>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            className={"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="error text-sm text-red-500 flex items-center mt-2">{formik.errors.fullName}</div>
          )}
        </div>
        <div className='col-start-4 col-end-6'>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            className={"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="error text-sm text-red-500 flex items-center mt-2">{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div className='col-start-7 col-end-9'>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            className={"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <div className="error text-sm text-red-500 flex items-center mt-2">{formik.errors.dateOfBirth}</div>
          )}
        </div>
     

        <div className='col-start-1 col-end-3 text-left pt-5'>
          <label htmlFor="nationality">Nationality</label>
      </div>

      <div className='col-start-4 col-end-6 text-left pt-5'>
          <label htmlFor="gender">Gender</label>
      </div>

      <div className='col-start-1 col-end-3'>
          <select
      
            id="nationality"
            name="nationality"
            value={formik.values.nationality}
            onChange={formik.handleChange}
            className={"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"}
          >
<option value="">Select a country</option>
    {countries.map(country => (
      <option key={country.code} value={country.code}>
        {country.name}
      </option>
    ))}

          </select>
          {formik.touched.nationality && formik.errors.nationality&& (
            <div className="error text-sm text-red-500 flex items-center mt-2">{formik.errors.nationality}</div>
          )}
        </div>
        <div className='col-start-4 col-end-6'>
          <select
      
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            className={"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base "}
          >
        <option value="">Select a Gender</option>
        <option value="M">Male</option>
         <option value="F">Female</option>

          </select>
          {formik.touched.gender && formik.errors.gender&& (
            <div className="error text-sm text-red-500 flex items-center mt-2">{formik.errors.gender}</div>
          )}
        </div>
        
        <button type="submit" disabled={isLoading} className='col-start-1 col-end-3  block w-full p-4 font-medium text-white text-nowrap mt-8 focus:outline-none bg-lime-600 rounded-lg '>
          Update
        </button>
      
      </form>
    </div>

</>  
);
};

export default DetailsForm;