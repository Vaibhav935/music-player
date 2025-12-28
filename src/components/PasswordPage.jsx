import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'

const PasswordPage = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#121212] text-white flex justify-center pt-25">
      <div className='w-85'>
        <div>
            <ChevronLeft size={30} className='text-gray-400 cursor-pointer' />
        </div>
            <h1 className='font-bold text-2xl my-4 '>Log in with a password</h1>
        <form className='flex flex-col gap-2 mt-8'>
            <p className='text-sm font-bold'>Email or username</p>
            <input
            type="text"
            className={`border w-full h-12 text-2xl rounded  px-1  border-gray-500`}
          />
          <p className='text-sm font-bold'>Password</p>
          <input
            type="text"
            className={`border w-full h-12 text-2xl rounded  px-1  border-gray-500`}
          />
          <button className="bg-[#22D963] text-lg font-bold h-12 rounded-full text-black w-full mt-5 cursor-pointer hover:scale-103 hover:bg-[#38d770]">
            Log in
          </button>
        </form>
          <p onClick={() => navigate("/")} className="text-center font-bold mt-15 cursor-pointer hover:scale-105 ">Log in without password</p>

      </div>
    </div>
  )
}

export default PasswordPage
