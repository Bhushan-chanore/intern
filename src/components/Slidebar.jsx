
import "../components/Slidebar.css"
import React, { useState } from 'react';
import { FaHome, FaChalkboardTeacher, FaChalkboard, FaVideo, FaQuestionCircle, FaBars } from 'react-icons/fa';
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Slidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        // ... your menu items
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHome size={26} />
        },
        {
            path: "/Tep",
            name: "Teach",
            icon: <FaChalkboardTeacher size={26} />
        },
        {
            path: "/Test",
            name: "Test",
            icon: <FaChalkboard size={26} />
        },
        {
            path: "/TakeClass",
            name: "Takeclass",
            icon: <FaVideo size={26} />
        },
        {
            path: "/Library",
            name: "Video Library",
            icon: <FaQuestionCircle size={26} />
        },
        {
            path: "/Doubts",
            name: "Doubts",
            icon: <IoPersonOutline size={26} />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "500px" : "70px" }} className="sidebar">
                <h5 className="tp" style={{ display: isOpen ? "block" : "none" }}>Chaudhary chottu Ram Public School</h5>
                <div className="top_section">
                    <div style={{ marginRight: isOpen ? "0px" : "0px", display: isOpen ? "block" : "none" }} className="bars">
                        <IoClose onClick={toggle} />
                    </div>
                    <span style={{ display: isOpen ? "block" : "none" }} className="logo">
                        Collapse
                    </span>
                    <div style={{ marginLeft: isOpen ? "30px" : "0px", display: isOpen ? "none" : "block" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>

                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Slidebar;
