import React, { useState } from "react";
//import {Link} from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";
import {FaTimes, FaBars, FaGithub,FaLinkedin,FaMailBulk,FaFacebook, FaRoad} from "react-icons/fa"
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav")
    nav.classList.toggle("bg-slate-900", this.window.scrollY > 0)
  })


const Navbar = () => {
  
    const [visible, setVisible] = useState(false)
    const navlinks = document.querySelectorAll(".navlink")
    navlinks.forEach((navlink) =>{
        navlink.addEventListener('click',() =>{
            setVisible(false)
        })
    })
    return(
        <div>
            <nav className="fixed w-full  md:px-40 text-white ">
                <div className="flex  justify-between items-center p-4">
                    <div className="logo flex space-x-2">
                        <button className=" bg-orange-600 p-2 font-bold text-xl"><i className="fab fa-creative-commons-nd"></i> </button>
                        <h1 className="text-2xl font-bold">Awayzz</h1>
                    </div>
                    <div className="hidden md:flex space-x-4 rounded-2xl font-semibold">
                       <div className="hover:border-b-2 text-gray-600 cursor-pointer">
                        <Link   activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className="hover:border-b-2 text-gray-600" >Home</Link>
                        </div>
                        <div className="hover:border-b-2 cursor-pointer">
                        <Link   activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}> About us</Link>
                        </div>
                        <div className="hover:border-b-2 cursor-pointer">
                        <Link   activeClass="active"
                            to="service"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}> Service</Link>
                        </div>
                        <div className="hover:border-b-2 cursor-pointer">
                        <Link  to="people"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}> Testimonials</Link>
                        </div>
                        <div className="hover:border-b-2 cursor-pointer">
                        <Link  to="contact"    activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}> Contact</Link>
                        </div>
                    </div>
                    <div className="menu">
                        <div onClick={()=>setVisible(!visible)} >
                            
                            <button className="bg-orange-500 p-3">
                                {visible ? <FaTimes/> : <FaBars/>}
                            </button>
                        </div>
                    </div>
                 
                </div>
            </nav>
                 <section className={visible ? 'bg-orange-500 fixed  h-screen z-30 transition  ease-in-out duration-700 translate-x-[0%]':'fixed left-[-100%] translate-x-[-100%] transition  ease-in-out duration-700'}>
                        <div className=" flex flex-col md:mt-6 md:px-40 mt-20 p-6 sm:py-10 sm:px-20">
                            <div className="sary flex justify-center space-x-1">
                                <div className="bg-white h-10 sm:w-full flex justify-center items-center">
                                    <h1 className="text-sm font-semibold">Lets go</h1>
                                </div>
                                <div className="bg-white h-10 w-1/2 flex justify-center items-center">
                                    <FaRoad/>
                                </div>
                            </div>
                            <div className="mb-16 menu flex flex-col sm:space-y-10 space-y-6 p-4 sm:text-2xl font-bold text-white text-center">
                                <Link to="home" smooth duration={500} className="navlink cursor-pointer hover:border-b-4 border-indigo-500 transition-all duration-100">Home</Link>
                                <Link to="about" smooth duration={500} className="navlink cursor-pointer hover:border-b-4 border-indigo-500 transition-all duration-100">About us</Link>
                                <Link to="service" smooth duration={500} className="navlink cursor-pointer hover:border-b-4 border-indigo-500 transition-all duration-100">Services</Link>
                                <Link to="people" smooth duration={500} className="navlink cursor-pointer hover:border-b-4 border-indigo-500 transition-all duration-100">Testimonials</Link>
                                <Link to="contact" smooth duration={500} className="navlink cursor-pointer hover:border-b-4 border-indigo-500 transition-all duration-100">Contact</Link>
                            </div>
                            <div>
                                <div className="flex justify-around">
                                
                                    <div className="text-white bg-blue-500 p-2  hover:scale-105">
                                      <a href=""><FaFacebook/></a> 
                                    </div>
                                    <div className="text-white bg-blue-800 p-2  hover:scale-105">
                                     <a href=""><FaLinkedin/></a>  
                                    </div>
                                    <div className="text-white bg-red-500 p-2  hover:scale-105">
                                      <a href=""><FaMailBulk/></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
        </div>
    )
}
export default Navbar;