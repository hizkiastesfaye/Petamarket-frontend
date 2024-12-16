// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
import s2 from "../../../images/s2.jpg"



function Discount() {

    return (
        <div className="w-full md:mb-5 mb-2">
            <div className="bg-gray-200 w-[calc(80%)] md:h-60 h-32 mx-auto mb-20">
                <div className="flex justify-between h-full gap-2">
                    <div className="w-5/6 md:p-5 p-1 ">
                        <div >
                            <div className="bg-blue-400 text-white md:mb-5 mb-1 mt-3 items-center w-fit px-1 md:px-5">
                                <p className="md:text-2xl text-sm font-bold ">Limited Offer</p>
                            </div>
                            <p className="md:text-2xl text-sm md:font-bold md:mb-3 mb-1">Macbook pro</p>
                            <p className="md:text-lg text-sm ">Last call for upto 30% offer</p>
                        </div>
                        <div className="hidden md:block bg-blue-400 text-white rounded-lg mb-1 w-fit items-center mt-[calc(2%)] px-1 md:px-14">
                                <p className="md:text-2xl text-sm font-bold max-auto">Discover</p>
                        </div>
                    </div>
                    <div >
                        <img src={s2} alt="macbook" className="w-fit md:h-60 h-20 mt-1 md:mt-0"/>
                        <div className="block md:hidden bg-blue-400 text-white rounded-lg mb-1 w-fit items-center mt-[calc(10%)] px-1 md:px-14">
                                <p className="md:text-2xl text-sm font-bold max-auto">Discover</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Discount;
