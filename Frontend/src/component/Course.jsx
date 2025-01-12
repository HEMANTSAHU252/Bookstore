import React from 'react'
import list from "../../public/list.json";
import Cards from '../../src/component/Cards';
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl p-1  container mx-auto md:px-20 px-4  '>
      <div className='mt-28 item-center justify-center text-center text-black'> 

    <h1 className='text-3xl  dark:text-white'>We're Delighted to have you <span className='text-pink-500'> Here! :) </span></h1>
    
    <p className='mt-12  dark:text-white'>Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eos dolore ullam, in voluptatem laboriosam.sit amet consectetur adipisicing elit. Cumque harum sequi repudiandae ipsam quis magni aut. Soluta hic, expedita nostrum itaque error nisi iusto rerum delectus. Necessitatibus, officiis hic, cumque dolorem error neque dicta ducimus quia doloremque quaerat ratione a.</p>
<Link to ='/'>
<button className='bg-pink-500 p-3 rounded-lg cursor-pointer hover:bg-pink-700 hover:text-white m-4'>Back</button>

</Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item) =>(
            <Cards key={item.id} item ={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course