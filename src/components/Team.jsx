import React from "react";
import {FaAddressBook, FaAirFreshener} from "react-icons/fa"
const Team = () => {
    return(
        <div id="team">
            <div className="bg-gradient-to-br from-slate-700 to-purple-500 min-h-screen md:h-screen w-full">
            <div className="md:pt-20 pt-6 sm:px-40 px-8">
                    <div className="text-center text-white mb-4">
                        <h1 className="text-3xl sm:text-6xl font-bold">Our team</h1>
                        
                        <div className="text-4xl">___</div>
                        <p className="mt-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
                    </div>

                    <div className="md:flex md:justify-center md:space-x-8 md:mt-6">
                        <div className="bg-purple-500 h-96 w-60 mb-4" data-aos="zoom-in">
                            <div className="p-2">
                                <img src="../assets/sary/Fatigue-.jpg" className="object-cover h-60 " alt=""/>
                                <div className="text-center">
                                <p>___</p>
                                </div>
                            </div>
                            <div className="text-center text-slate-50 font-bold">
                                <h1>Andry</h1> <br />
                                <h1>ANDRIAMANAMIHAJA</h1>
                            </div>
                        </div>

                        <div className="bg-purple-500 h-96 w-60" data-aos="zoom-in">
                            <div className="p-2">
                                <img src="../assets/sary/Fatigue-.jpg" className="object-cover h-60 " alt=""/>
                                <div className="text-center">
                                <p>___</p>
                                </div>
                            </div>
                            <div className="text-center text-slate-50 font-bold">
                                <h1>Sandrine</h1> <br />
                                <h1>RAMAROSON</h1>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default Team;