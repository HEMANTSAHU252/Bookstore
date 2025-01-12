import React from 'react'
import { Link } from 'react-router-dom'
import { useForm  } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-white dark:text-black">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      < Link to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}
      >✕</Link>
    
    <h3 className="font-bold text-lg">LOGIN!</h3>
    <div className="form-group m-2">
    <div className='mt-4 space-y'>
      <span>Email</span>
      <br />
      <input type="email" className="form-control w-80 outline-none text-black bg-white rounded p-1 m-2" 
      placeholder="Enter your email" 
      {...register("email", { required: true })} />
      <br />
      {errors.email && 
      <span className='text-sm text-red-500'>
        This field is required
        </span>}
      </div>
      <div className='mt-4 space-y'>
      <span>Password</span>
      <br />
      <input type="password" className="form-control w-80 outline-none bg-white text-black rounded p-1 m-2" 
      placeholder="Enter your password" 
      {...register("password", { required: true })} 
      />
       <br />
      {errors.password && 
      <span className='text-sm text-red-500'>
        This field is required
        </span>}
</div>
    </div>
    <div className='flex justify-around mt-4'>
    <button type='submit'  className="bg-pink-500 text-white rounded-md px-3 py-1 m-2 "
    onClick={() => document.getElementsByTagName("button").replaceWith("Logout")}
    >Login</button>
<p className='mt-4'>Not registered?{" "} 
  <Link to="/signup" 
  className='underline text-blue-500 cursor-pointer'>
    Signup</Link>{" "}</p>

    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login