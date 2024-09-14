import React from 'react'

function Cards({item}) {
    return (
        <>
            <div className='mt-4 p-3'>
                <div className="card bg-base-100 w-92 shadow-sm transform hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">Free</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="px-2 py-0 rounded-full outline outline-1 hover:text-white hover:bg-pink-600 duration-200 hover:cursor-pointer">${item.price}</div>
                            <div className="px-2 py-0 rounded-full outline outline-1 hover:text-white hover:bg-pink-600 duration-200 hover:cursor-pointer">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards