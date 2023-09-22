import React from 'react'
import Logo from "../../assets/Logos/logo-a.svg";
import { tabledata } from './tabledata'

function Table() {
  return (
    <>
        <div className='mt-20 '>
            <h1 className='font-[Mulish] font-[900] text-primary text-[32px] text-center'>
                Choose the freedom you need.
            </h1>
        </div>
        <div className='hidden md:flex justify-center pt-10 pb-10'>
            <table className='border-collapse text-left overflow-hidden rounded-lg bg-white drop-shadow-3xl'>   
                <div className='pb-10'>   
                    <tr className='border pb-10 text-primary'>
                        <th className='border-b-slate-400 p-20 pt-10 pb-3'></th>
                        <th className='border-b-slate-400 p-20 pt-10 pb-3 text-[18px] align-middle'>Other Banks</th>
                        <th className='border-b-slate-400 p-20 pt-10 pb-3 text-[18px] align-middle'>
                            <img src={Logo} alt="logo" className="md:cursor-pointer h-10"/>
                        </th>
                    </tr>                 
                        {tabledata.map((data, index)=>(
                            <tr className='border-t-[1px] pb-10 font-[Mulish] text-[12px] md:text-[14px]' key={index}>
                                <td className='border-b-slate-400 md:p-20 pt-4 pb-4 font-[700]'>{data.row1}</td>
                                <td className='border-b-slate-400 md:p-20 pt-4 pb-4'>
                                    <span className='flex items-center'>
                                        <span className='text-primary flex items-center mr-1'>
                                            <ion-icon name="remove-circle-outline"></ion-icon>
                                        </span>
                                        {data.otherbanks}
                                    </span>
                                </td>
                                <td className='border-b-slate-400 md:p-20 pt-4 pb-4'>
                                    <span className='flex items-center'>
                                        <span className='text-primary flex items-center mr-1'>
                                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                                        </span>
                                        {data.apenia}
                                    </span>
                                </td>
                            </tr>
                        ))}
                </div>
            </table>
        </div>

        
    </>
  )
}

export default Table