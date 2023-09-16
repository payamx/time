import React, {FormEvent, useEffect, useState, ChangeEvent} from 'react';
import axios from "axios";
import {prayerType, showlist} from "../Type/ApiTypes";
import date from "./Date";
import {  WiMoonWaxingCrescent1,WiMoonAltWaningGibbous4, WiHorizon ,WiHorizonAlt ,WiDaySunny ,WiMoonFirstQuarter} from "react-icons/wi";

const ReligiousTime = () => {


    const [list, setList] = useState<showlist[]>([]);
    const [city, setCity] = useState<string>("تهران");
    const [prayer, setPrayer] = useState<prayerType |null>();
    const ShowList = async () => {
        try {

            const response = await axios.get('https://api.keybit.ir/owghat/?showlist');
            setList(response.data)

        } catch (e) {
            console.log(e, "showlist error")
        }
    }

    useEffect(() => {
        let isMounted = true
        ShowList().then(r => r);
        return () => {
            isMounted = false
        };
    }, []);


    const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setCity(value);
    };


    const times = async () => {

        try {
            const response = await axios.get(`https://api.keybit.ir/owghat/?city=${city}`)

            setPrayer(response.data.result)


        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        let ismounted = true;
        times().then();
        return () => {
            ismounted = false;
        };
    }, [city]);





    return (
        <>

            <div className=" mx-auto ">

            </div>
            <div className=" inline-block font-bold border-b-4 py-6 text-browntime  mb-6 "> اوقات شرعی به افق شهرها
            </div>
            <div className="md:flex md:flex-row   md:justify-center mb-8 items-start">
                <div className=" px-3 py-2 ">
                    <select className="  md:w-auto px-8 border-2  border-gray-300 rounded bg-white  hover:bg-grey
                    dark:bg-darktop dark:text-white

                    "
                            value={city} onChange={selectChange}>

                        {list.map((item, index) =>

                            <option value={item.city} key={index}>{item.city}</option>
                        )}
                    </select>

                </div>

            </div>

            <div className="md:flex md:flex-row  md:justify-around md:mt-5  text-sm px-3 font-bold text-start content-center dark:text-white" >

                        <div className=" flex flex-col  items-start ">
                            <div className="mb-2 mt-1">
                                <span>
                                <WiHorizon size={40} className="inline-block ml-2 text-browntime"/>اذان صبح

                                </span>
                                <span className="px-2">  {prayer?.azan_sobh} </span>

                            </div>

                            <div className="mb-3">
                                <span>
                                <WiHorizonAlt size={40} className="inline-block ml-2 text-browntime" />طلوع خورشید

                                </span>
                                <span className="px-2"> {prayer?.tolu_aftab}</span>


                            </div>
                            <div className="mb-2">
                                <span>
                                <WiDaySunny size={40} className="inline-block ml-2 text-browntime" />اذان ظهر
                                </span>
                                <span className="px-2">{prayer?.azan_zohr} </span>

                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="my-2">
                                <span> <WiMoonWaxingCrescent1 size={35}  className="inline-block ml-2 text-browntime"/>غروب خورشید

                                </span>
                                <span className="px-2">{prayer?.ghorub_aftab} </span>
                            </div>
                            <div className="my-2">
                                <span>
                                <WiMoonAltWaningGibbous4 size={35} className="inline-block ml-2 text-browntime" /> اذان مغرب

                                </span>
                                <span className="px-2">{prayer?.azan_maghreb}</span>
                            </div>
                            <div className=" my-2">
                                <span><WiMoonFirstQuarter size={35} className="inline-block ml-2 text-browntime" />  نیمه شب

                                </span>
                                <span className="px-2">{prayer?.nimeshab} </span>
                            </div>
                    </div>

            </div>

        </>
    );
};

export default ReligiousTime;
