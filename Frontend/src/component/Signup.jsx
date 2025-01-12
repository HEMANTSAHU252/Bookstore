import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm  } from "react-hook-form"


function Signup() {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    
  return (
    <div className='  flex h-screen justify-center items-center '>
    <div   className=" w-[600px]">
  <div className="modal-box dark:bg-white dark:text-black m-5">

    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if tere is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()} 
      >✕</Link>
    <h3 className="font-bold text-lg">SIGNUP!</h3>
    <div className="form-group m-2">
    <span>Name</span>
    <input type="text" className="form-control w-80 outline-none bg-white text-black rounded p-1 m-2"
     placeholder="Enter your Name "
     {...register("name", { required: true })} />
     {errors.name && 
     <span className='text-sm text-red-500 '>
       This field is required
       </span>}
       <br />
      <span>Email</span>
      <input type="email" className="form-control w-80 outline-none bg-white text-black rounded p-1 m-2" 
      placeholder="Enter your email" 
      {...register("email", { required: true })} />
      {errors.email && 
      <span className='text-sm text-red-500'>
        This field is required
        </span>}
        <br />
      <span>Password</span>
      <input type="password" className="form-control w-80 outline-none bg-white text-black rounded p-1 m-2"
       placeholder="Enter your password" 
       {...register("password", { required: true })} 
       />
       {errors.password && 
       <span className='text-sm text-red-500'>
         This field is required
         </span>}

    </div>
    <div className='flex justify-around mt-4'>
    <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 m-2 ">Signup</button>
<p className='mt-4'>Have Account?{" "} 
    <button className='underline text-blue-500 cursor-pointer' 
    onClick={() => document.getElementById("my_modal_3").showModal()
    }
    >Login</button>{" "}
    <Login/>
    
    </p>


    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup