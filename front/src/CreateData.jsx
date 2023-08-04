import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateData = () => {
  const [name,setName]=useState()
  const [note,setNote]=useState()
  const navigate=useNavigate()

  const submit=e=>{
    e.preventDefault();
    axios.post("http://localhost:3000/create",{name, note})
    .then(r=>{
      console.log(r);
      navigate('/');
    })
    .catch(e=>console.log(e))
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div  className="mx-auto w-full max-w-[550px]">
        <h2 className="text-3xl font-bold ... flex justify-center">Add</h2>
        <form onSubmit={submit} action='/'>
        <div>
            <label htmlFor="" class="mb-3 block text-base font-medium text-[#07074D]">Name</label>
            <input type="text"  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-8" placeholder='Name' onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="" class="mb-3 block text-base font-medium text-[#07074D] mb-12px">Note</label>
            <input type="text"  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-8" placeholder='write here...' onChange={e=>setNote(e.target.value)}/>
        </div>
        <div>
            <button className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600'>submit</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreateData
