import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import Lorem from './Lorem';
import Login from './Login';


function Pdfcont() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
        <div className='bottom'>
            <div className='up'>
                <span>Topic Name <IoIosArrowDropdownCircle size={26}/></span>
                <div>
                <FaRegEdit size={26} className='mo'/>
                <RiDeleteBin6Line size={26} className='mo'/>
                </div>
                <button className='mo2'  onClick={openLogin}> <MdAdd size={26}/><span>Add Content</span></button>
                {isLoginOpen && <Login onClose={closeLogin} />}
            </div>
            <div className='mo3'>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            <Lorem/>
            </div>
        </div>
    </>
  )
}

export default Pdfcont