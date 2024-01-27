import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { GrDownload } from 'react-icons/gr';
import { IoShareSocial } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='hea'>
      <div className='header'>
        <div className='start1'>
          <h2> <IoIosArrowBack /> Chapter Name</h2>
        </div>
        
        <div className='mid'>
          <Link to="/Tep" className='chet'>Teach</Link>
          <Link to="/Worksheet" className='chet'>Worksheet</Link>
          <Link to="/Mindmap" className='chet'>Mind-Map</Link>
        </div>

        <div className='end'>
          <CiSearch size={26} className='icon' />
          <GrDownload size={26} className='icon' />
          <IoShareSocial size={26} className='icon' />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar