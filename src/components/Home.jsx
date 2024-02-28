import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import AOS from "aos";
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(()=>{
        AOS.init()
    },[])

    return(
        <div id="home">
            <section className="bg-[url('../public/assets/sary/foret.jpg')] bg-no-repeat bg-cover h-screen mix-blend-overlay text-white">
                <div className="sm:pt-40 pt-28 sm:px-40 px-2">
                    <div className="text-center items-center">
                        <div>
                            <div className="">
                                <div className="md:flex md:justify-center space-x-2">
                                    <input type="text" class="mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-lg md:w-80 p-2" placeholder="recherche" required />
                                    <button className="bg-blue-500 rounded px-2 text-sm md:px-6 text-white hover:bg-blue-400">recherche</button>
                                </div>
                                <div className="pb-10" data-aos="flip-up" >
                                    <p className="sm:text-6xl text-4xl font-semibold"><span className="text-orange-600">Let's</span>  make <span className="text-orange-600">your</span> best trip <span className="text-orange-600">ever</span></p>
                                    <h1 className="text-2xl font-bold">____</h1>
                                </div>
                               <div className="">
                                    <div className="">
                                        <p>Vanilla pay LT is a company established in Lithuania in June 2023. It is a tech startup working in the development of solutions for the promotion of tourism</p>
                                    </div>               
                               </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="sm:p-20 items-center">
                                <div className="flex justify-center space-x-2">
                                    <div>
                                        <button className="bg-white text-orange-600 hover:bg-black hover:border hover:border-orange-500 transition duration-300 sm:font-semibold sm:px-16 px-8 py-3 rounded-3xl text-sm">Sign up</button>
                                    </div>
                                    <div>
                                        <button className="bg-green-500 text-white hover:bg-orange-500 hover:border hover:border-white transition duration-300 sm:font-semibold sm:px-16 px-8 py-3 rounded-3xl text-sm">Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> 

            <section>

            </section>
        </div>
    )
}
export default Home;