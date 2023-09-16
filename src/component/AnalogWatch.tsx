import React, {useEffect, useState} from 'react';
// @ts-ignore
import Clock from 'react-simple-clock';
// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css';
// import {AnalogClock} from "react-simple-analog-clock";

const AnalogWatch = () => {
    // let  Clock=require('react-simple-clock');
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });



    return (
        <>
            <div className="flex flex-row justify-center py-8  bg-white dark:bg-darktop " >
                <Clock live={true } hourMarkFormat="number"
                       size={230}
                       className=" text-gray-300 text-2xl Analog-watch bg-white dark:text-green-500

                       dark:shadow-inner
                       dark:shadow-cyan-400
                      "  />


            </div>
            <div className=" mx-8 pb-4 font-extrabold text-4xl font-glyphicons dark:bg-darktop dark:text-white

               shadow-lg" dir="ltr"> {formattedTime}</div>

        </>
    );
};

export default AnalogWatch;
