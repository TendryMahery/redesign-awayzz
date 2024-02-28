import React from "react";
import {FaAddressBook, FaAirFreshener} from "react-icons/fa"
const About = () => {
    return(
        <div id="about">
            <div className="bg-gradient-to-br from-slate-700 to-purple-500 min-h-screen md:h-screen w-full">
                <div className="md:pt-20 pt-6 sm:px-40 px-8">
                    <div className="text-center text-white">
                        <h1 className="text-3xl sm:text-6xl font-bold">About us</h1>
                        <div className="text-4xl">___</div>
                    </div>

                    <div className="sm:pt-10 pt-3 md:grid md:grid-cols-2">
                        <div className="sm:w-96 mb-6  sm:h-96 w-60 h-80 bg-purple-500 p-6" data-aos="fade-right">
                            <img src="../assets/R3.png" alt=""/>
                            <p className="sm:p-6 text-white text-sm">Owayzz is a tourism social network serving as both a portfolio set and marketplace for tourism professionals. It also allows travel lovers to find the right deals and to share their experiences</p>
                            <div className="text-center mt-5">
                                <button className="bg-green-500 px-8 py-2 rounded hover:scale-105 transition duration-300 text-white">About</button>
                            </div>
                        </div>
                        <div className="grid grid-rows-2" data-aos="fade-left">
                            <div>
                                <div className="text-white">
                                    <div className="flex space-x-8">
                                        <FaAddressBook size={40}/>
                                        <h1 className="text-2xl font-semibold">Mission</h1>
                                    </div>
                                    <p className="ml-10 text-sm">Become the biggest social network for tourism</p>
                                </div>
                            </div>
                            <div>
                                <div className="text-white">
                                    <div className="flex space-x-8">
                                        <FaAddressBook size={40}/>
                                        <h1 className="text-2xl font-semibold">Goal</h1>
                                    </div>
                                    <p className="ml-10 text-sm">Promote tourism around the world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;