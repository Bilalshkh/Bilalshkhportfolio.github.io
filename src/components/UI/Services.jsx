import React from "react"; 

const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        What I do help:
                    </h2>
                    <p className="lg:max-w-[600] lg:mx-auto text-headingColor font-[500] text=[16px] leading-7">
                    This Mern Stack Developer course learned from banoQabil.pk.
                    </p>
                </div>


                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-grey-700 antialised text-sm font-semibold">
                            {/*=========vertical line running through the middle=========*/}
                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform
                            -transform-x-1/2"></div>

                            {/*==========left card==========*/}
                            <div className="mt-6 sm:mt-0 sm:mt-12">
                                <div className="flex-item-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded
                                            shadow group hover:bg-primaryColor cursor-pointer easi-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                                group-hover:font-[600] text-2xl">Frontend Developer
                                                </h3>

                                                <p className="text-[15] text-smallTextColor group-hover:text-white
                                                group-hover:font-[500] leading-7">
                                                    HTML, CSS, JAVASCRIPT, REACT+VITE
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*==========right card==========*/}

                            <div className="mt-6 sm:mt-0 sm:mt-12">
                                <div className="flex-item-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded
                                            shadow group hover:bg-primaryColor cursor-pointer easi-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                                group-hover:font-[600] text-2xl">Basic Graphics Designing.
                                                </h3>

                                                <p className="text-[15] text-smallTextColor group-hover:text-white
                                                group-hover:font-[500] leading-7">
                                                    CANVA, PHOTOSHOP, LIGHTROOM.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;