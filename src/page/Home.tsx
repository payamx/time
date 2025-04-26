import React from 'react';
import Date from "../component/Date";
import ReligiousTime from "../component/ReligiousTime";
import Scentence from "../component/scentence";
import AnalogWatch from "../component/AnalogWatch";
import ShamsiCalender from "../component/ShamsiCalender";
import Holiday from "../component/Holiday";
import DownloadPage from "../component/DownloadPage";
import DateConvert from "../component/DateConvert";

const Home = () => {


    return (

        <>
            <div className=" font-vazir  dark:shadow-cyan-400 shadow-2xl   md:w-9/12
            rounded md:mx-auto  " id="top">


                <div className="bg-white border border-gray-300 shadow-xl dark:border-darkback rounded dark:bg-darktop

                ">
                    <div>
                        <Date/>
                    </div>

                    <div className="md:flex md:flex-row  h-full mt-5 mx-3 w-screen md:w-auto text-2xl items-center  ">
                        <div className=" md:w-2/5   ">

                            <AnalogWatch/>

                        </div>
                        <div className="md:w-3/5   py-4">
                            <ReligiousTime/>
                        </div>

                    </div>
                    <div className=" md:flex md:flex-row h-full p-4  my-12 ">
                        <Scentence/>
                    </div>

                </div>

                <div className="bg-grey md:flex md:flex-row w-full h-full  dark:bg-darktop dark:text-white">
                    <div className=" md:w-1/2 h-fit flex flex-row justify-center mx-auto py-4">
                        <ShamsiCalender/>

                    </div>
                    <div className="md:w-1/2">

                        <Holiday/>
                    </div>
                </div>


                <div className=" w-full bg-white   shadow-xl rounded   " >
                    <DateConvert/>

                </div>


                <div className="w-full bg-white border border-gray-300 dark:border-darkback shadow-xl rounded my-6
                 dark:bg-darktop dark:text-white">
                    <DownloadPage/>
                </div>


            </div>

        </>


    );
};

export default Home;
