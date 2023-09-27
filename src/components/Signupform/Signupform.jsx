import React from 'react'

export default function Signupform() {
  return (
    <div className='px-5 py-20 md:px-20 md:py-10 font-[Mulish] md:w-[40%]'>
        <form className='flex flex-col w-full bg-white drop-shadow-3xl p-10 rounded-lg border border-slate-200'>
            <div className='flex flex-col'>
                <h1 className='text-[17px] font-[900]'>Sign In to Apenia</h1>
                <p className='text-[13px] mb-2 mt-2 text-gray-500'>To sign in, please type in the email address linked to your Apenia account.</p>

                <div className='text-[11px] mt-2 mb-5 flex flex-col'>
                    <label for="email" className='mb-3'>Email</label>
                    <input type="text" placeholder="Enter Email" name="email" className='mb-5 text-[13px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required/>

                    <label for="psw" className='mb-3'>Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" className='mb-5 text-[13px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required/>
                    
                    <p>Forgot Password? <span className='text-primary'>Reset it.</span></p>
                </div>

                <button className="bg-primary text-white  px-6 py-2 text-[12px] rounded-[8px] w-32">
                    Sign In
                </button>

            </div>
            
            <div className='text-[10px] mt-5'>
                <p>If you don't have a Kuda account, download the app <span className='text-primary'>here</span> and open an account in a few minutes.</p>
            </div>
        </form>
    </div>
  )
}
