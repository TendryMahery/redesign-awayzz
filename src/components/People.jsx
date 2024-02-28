import React from "react";
import {FaThemeco, FaTransgender, FaTruckMonster} from "react-icons/fa"
const People = () =>{
    return(
        <div id="people">
            <div className="bg-slate-800 min-h-screen md:h-screen w-full">
                <div className="md:pt-20 pt-6 sm:px-40 px-8">
                    <div className="text-center text-white mb-4">
                        <h1 className="text-3xl sm:text-6xl font-bold">Awayzz</h1>
                        <div className="text-4xl">___</div>
                        <div className="mt-8">
                            <h1 className="text-2xl font-semibold text-orange-500">Why people believe in Us</h1>
                            Always render more and better service than
                                                    is expected of you, no matter what your ask may be.
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-16">
                        <div className="md:grid md:grid-cols-3 md:gap-6 ">
                            <div className="" data-aos="fade-right">
                                <div className="flex">
                                    <div>
                                        <img src="../assets/sary/Fatigue-.jpg" className="object-cover h-60 w-80" alt=""/>
                                    </div>
                                    <div className="bg-blue-500 h-60 w-80 text-center items-center flex flex-col">
                                        <h1 className="font-bold text-2xl text-white mt-28">Trust</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="2">
                                <div className="flex">
                                    <div>
                                        <img src="../assets/sary/Fatigue-.jpg" className="object-cover h-60 w-80" alt=""/>
                                    </div>
                                    <div className="bg-orange-500 h-60 w-80 text-center items-center">
                                        <h1 className="font-bold text-lg md:text-2xl text-white mt-28">Transparency</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="3" data-aos="fade-left">
                                <div className="flex">
                                    <div>
                                        <img src="../assets/sary/Fatigue-.jpg" className="object-cover h-60 w-80" alt=""/>
                                    </div>
                                    <div className="bg-white h-60 w-80 text-center items-center">
                                        <h1 className="font-bold text-2xl text-black mt-28">Pratical</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default People;