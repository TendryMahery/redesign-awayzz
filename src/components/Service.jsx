import React from "react";

const Service = () => {
    return(
        <div id="service">
            <div className="bg-slate-800 min-h-screen md:h-screen w-full">
                <div className="md:pt-20 pt-6 sm:px-40 px-8">
                    <div className="text-center text-white mb-10">
                        <h1 className="text-3xl sm:text-6xl font-bold">Services</h1>
                        <div className="text-4xl">___</div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-6">
                        <div className="border-r-2 border-orange-500" data-aos="zoom-in-right">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white">Our services</h1>
                            <div className="mt-8 mb-8">
                                <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                                <div className="text-white ml-4">
                                    <p className="text-sm">Vanilla pay LT promotes tourism by giving online visibility for tourism professionals through its platform. The platform also goes with integrated online payment solution which will allow them to receive payments of their goods and services. Travellers will be able to find in this platform all the information necessary for their travel, pay on it and then share their experience</p>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white">Our services</h1>
                            <div className="mt-8">
                                <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                                <div className="text-white ml-4">
                                    <p className="text-sm">Get answers to common queries about our app's features,
                                                    usage, and troubleshooting. Your solutions are just a click away!.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-white space-y-20" data-aos="zoom-out">
                            <div>
                                <div className="bg-gray-200 h-3 w-full rounded mb-6">

                                </div>
                            Get answers to common queries about our app's features,
                            usage, and troubleshooting. Your solutions are just a click away!.
                            </div>
                            <div>
                            <div className="bg-gray-200 h-3 w-full rounded mb-6">

                            </div>
                            Get answers to common queries about our app's features,
                            usage, and troubleshooting. Your solutions are just a click away!.
                            </div>
                            <div>
                            <div className="bg-gray-200 h-3 w-full rounded mb-6">

                            </div>
                            Get answers to common queries about our app's features,
                            usage, and troubleshooting. Your solutions are just a click away!.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;