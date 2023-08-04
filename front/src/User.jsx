import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from  'axios'

const User = () => {

    const [user,setUser] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000')
      .then(r=>setUser(r.data))
      .catch(e=>console.log(e))
    },[])

    const Delete=(id)=>{
      axios.put('http://localhost:3000/del/'+id)
      .then(r=>{
        console.log(r)
        window.location.reload()
      })
      .catch(e=>console.log(e))
    }

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      crud operation
    </h1>
    <div className=''>
      <table className='w-full border-separate border border-slate-500 ...'>
        <thead>
            <tr>
                <th className='border border-slate-600 bg-gray-600 p-2 text-white font-bold'>Name</th>
                <th className='border border-slate-600 bg-gray-600 p-2 text-white font-bold'>Note</th>
                <th className='border border-slate-600 bg-gray-600 p-2 text-white font-bold'>Alter/Delete</th>
            </tr>
        </thead>
        <tbody>
            {
            user.map(u =>{
                return (<tr>
                    <td className="border border-slate-700 md:pl-16 lg:pl-32">{u.name}</td>
                    <td className="border border-slate-700 md:pl-16 lg:pl-32">{u.note}</td>
                    <td className="border border-slate-700 md:pl-16 lg:pl-32">
                        <Link to={`./alter/${u._id}`} className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-[#2563eb] text-white hover:[#1e3a8a]' >Edit</Link>
                        <button onClick={e=>Delete(u._id)} className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-[#b91c1c] text-white hover:[#7f1d1d]' >Delete</button>
                    </td>
                </tr>
            )})
            }
        </tbody>
      </table>
    </div>
    <Link to='/create' className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600'>Add</Link>
    </div>
  )
}

export default User
