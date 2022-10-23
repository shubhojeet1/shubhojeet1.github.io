import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 h-4xl'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
      {item.despo}
      </p>
      <div className='flex flex-row items-center text-center'>
        <button className='mt-16 mr-5 py-3 px-5' style={{"backgroundColor":"green" ,"borderRadius":"10px","color":"#fff"}}><a href={item.source}>Source code</a></button>
        <button className='mt-16 mr-5 py-3 px-5' style={{"backgroundColor":"red","borderRadius":"10px","color":"#fff"}}><a href={item.live}>Live demo</a></button>
      </div>
    </div>
  );
};

export default Project;