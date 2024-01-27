import React from 'react';
import { IoAdd } from 'react-icons/io5';
import Navbar from '../components/Navbar';
import ReactPlayer from 'react-player'
import MyWhiteboard from '../components/MyWhiteboard';
import Pdfcont from '../components/Pdfcont';

function Tep() {
    return (
        <>
            <Navbar />

            <div className='vid'>
                <div className='detail'>
                    <h1 className='head'>Your Videos</h1>
                    <span className='para'>Please Enter the video detail you will get to see it</span>
                    <button className='but'>
                        <IoAdd size={26} />
                    </button>
                </div>

                <div className='utube'>
                    <ReactPlayer 
                    // className="utube1"
                        width="280px"
                        height="220px"
                        controls="https://localhost:3000"
                        url="https://youtu.be/bL6dJjxm0x0?si=eG1LA-LiWAH85vza"
                    />
                </div>
            </div>

            <div className=' bot'>
            <Pdfcont/>
            <MyWhiteboard/>
            </div>

        </>
    );
}

export default Tep;
