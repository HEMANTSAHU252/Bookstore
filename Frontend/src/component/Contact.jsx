import React from 'react'
// import { Link } from 'react-router-dom'

import { useForm  } from "react-hook-form"


function Contact() {
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
        <><div><h1 className='text-black text-5xl text-center mt-20 dark:text-white  '>Contact Us</h1></div>
    <div className=' md:flex  md:p-1 '>
    
    <div   className=" md:w-[600px]">
  <div className="bg-slate-800 rounded p-2 dark:bg-slate-400 dark:text-black m-8">

    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      
    <div className="form-group m-2">
    <span>Name</span>
    <input type="text" className="form-control w-80 border-2 outline-none bg-white text-black rounded p-1 m-2"
     placeholder="Enter your Name "
     {...register("name", { required: true })} />
     {errors.name && 
     <span className='text-sm text-red-500 '>
       This field is required
       </span>}
       <br />
      <span>Email</span>
      <input type="email" className="form-control w-80 border-2 outline-none bg-white text-black rounded p-1 m-2" 
      placeholder="Enter your email" 
      {...register("email", { required: true })} />
      {errors.email && 
      <span className='text-sm text-red-500'>
        This field is required
        </span>}
        <br />
      <span>Contact Number</span>
      <input type="text" className="form-control w-80 border-2 outline-none bg-white text-black rounded p-1 m-2"
       placeholder="Enter your Number"
       {...register("number", { required: true })} 
       />
       {errors.number && 
       <span className='text-sm text-red-500'>
         This field is required
         </span>}
         <br />
<span>Message</span>
          <br />
          <textarea
  placeholder="Type your message"
  className="textarea textarea-bordered border-2 textarea-lg w-full max-w-80 max-h-40 bg-white"
  {...register("message", { required: false })} 
  ></textarea>
    </div>
    <div className='flex justify-around mt-4'>
    <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 m-2 ">Submit</button>
 
    </div>
    </form>
  </div>
</div>
{/*  right side */}
<div className='border-2 w-[400px] h-[300px] md:ml-40 ml-10 mt-10 bg-slate-400 rounded-2xl'>
<h3 className='text-black text-center dark:text-white text-2xl '>Our Details </h3>
<div className='m-5 p-2 '>
    <p className='text-black text-lg m-4 dark:text-white'>Address: 123 zone-II, IT  Park Multai Betul  District Betul Madhya Pradesh</p>
    <p className='text-black text-lg m-4 dark:text-white'>Phone: (123) 456-7890</p>
    <p className='text-black text-lg m-4 dark:text-white'>Email:   BookStore@example.com</p>
</div>
</div>
    </div>
    </>
  )
}

export default Contact