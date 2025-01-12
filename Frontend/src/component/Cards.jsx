import React from 'react'

function Cards({ item}) {
   
  return (
    <>
    <div className='mt-4 my-3 '>
    <div className="card bg-base-100 w-92  md:text-sm pt-1  m-4 shadow-xl hover:scale-105 duration-200 dark:border">
  <figure>
    <img className=" w-70 "
      src={item.image}
      alt="books" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title lg:text-md">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p> {item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-4 ">${item.price}</div>
      <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-200 rounded-full cursor-pointer  p-4  border-[1px] ">BuyNow</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards