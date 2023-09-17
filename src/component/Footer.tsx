import React from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";
import {Link} from "react-router-dom";

const Footer = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This provides a smooth scroll effect
        });
    };
    return (
        <>

            <div className="flex justify-center  h-20 pt-10  dark:bg-darkback hover:animate-bounce"  onClick={scrollToTop} >

                <IoIosArrowDropupCircle className="w-20 h-20 bg-mainbody text-browntime
                rounded-full dark:shadow-cyan-400 dark:shadow-inner dark:bg-darkback" />
            </div>

            <div className="bg-black text-white text-sm  overflow-hidden py-11">

                <div className="flex flex-row  py-4 flex-wrap justify-center">
                    <span className="pr-4"> ساعت وتقویم ایران </span>
                    <span className="pr-4" > تقویم سالیانه </span>
                    <span className="pr-4" > درباره تقویم جلالی </span>
                    <span className="pr-4" > فهرست کتابهای تایم </span>

                </div>
                <div className="flex flex-row space-x-2 py-4 flex-wrap justify-center">

                    <span className="pr-4" >انتقادها و پیشنهادها</span>
                    <span className="pr-4" >خدمات طراحی سایت</span>
                    <span className="pr-4" >هاست</span>
                    <span className="pr-4" > ثبت دامنه و سرور مجازی</span>
                </div>

            </div>
        </>
    );
};

export default Footer;
