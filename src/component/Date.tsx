import React, {useEffect, useState} from 'react';
import axios from "axios";
import {TimeData} from '../Type/ApiTypes'

const Date = () => {

    const [data, setData] = useState<TimeData | null>();
    const request = async () => {
        try {

            const response = await axios.get('https://api.keybit.ir/time/')
            setData(response.data)

        } catch (e) {
            console.log(e , "can not fetch")
        }

    }
    useEffect(() => {
        request().then(r => r);

    }, []);


    return (
        <>
            <div className="text-white text-sm  p-3  ">
                <div className="md:flex md:flex-row h-full md:h-28 dark:bg-gray-800 bg-browntime">
                    <div className=" flex md:w-1/6 max-h-40 bg-darkbrown p-4 ">
                        <div className="md:w-1/4 self-center   w-full">تاریخ امروز</div>
                    </div>

                    <div className="border border-white sm:border-none "></div>

                    <div className="md:w-1/4   py-3">
                        <div className="md:border-b-2 border-b-amber-100 mx-8 py-2">خورشیدی</div>
                        <div className="pt-1">{data?.date.full.unofficial.usual.fa}</div>
                        <div>
                            <span>{data?.date.weekday.name} - </span>
                            <span>{data?.date.day.number.fa} </span>
                            <span>{data?.date.month.name}</span>
                        </div>
                    </div>

                    <div className="border border-white sm:border-none"></div>

                    <div className="md:w-1/4  dark:bg-gray-800 py-3">
                        <div className="md:border-b-2 border-b-amber-100 mx-8 py-2">میلادی</div>
                        <div className="pt-1">{data?.date.other.gregorian.usual.en}</div>
                        <div>August</div>
                    </div>

                    <div className="border border-white sm:border-none"></div>

                    <div className="md:w-1/4  py-3">
                        <div className="md:border-b-2 border-b-amber-100 mx-8 py-2">قمری</div>
                        <div className="pt-1">{data?.date.other.ghamari.usual.fa}</div>
                        <div>ماه صفر</div>
                    </div>

                    <div className="border border-white sm:border-none"></div>

                    <div className="md:w-1/4  py-3">
                        <div className="md:border-b-2 border-b-amber-100 mx-8 py-2"><span>برج فلکی </span></div>
                        <div className="pt-1">{data?.date.month.asterism}</div>
                        <div>سال {data?.date.year.animal}</div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Date;
