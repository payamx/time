import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {TimeData,Hadis} from "../Type/ApiTypes";

const Holiday = () => {


    const [apiData1, setApiData1] = useState<TimeData | null>(null);
    const [apiData2, setApiData2] = useState<Hadis | null>(null);



    useEffect(() => {

        const request = async () => {
            try {

                const response1 = await axios.get('https://api.keybit.ir/time/');
                const response2 = await axios.get('https://api.keybit.ir/hadis/');
                const response=await  axios.all([response1,response2]);

                setApiData1(response1.data);
                setApiData2(response2.data);
            } catch (e) {
                console.log(e , "can not fetch")
            }

        }


        request().then(r => r);
    }, []);



    return (
        <>
         <div className="my-20 h-fit px-6 text-start">
             <div className=" ">
                 <div className=" font-extrabold text-xl  border-b-2 text-browntime pb-6 "> مناسب های روز </div>
                 <div className="py-8"> {apiData1?.date.day.events.local?.text }</div>
                 <div className=" text-red-600">{apiData1?.date.day.events.local?.holiday ? 'تعطیل':'غیر تعطیل'}</div>

             </div>
             <div className="pb-12 ">
                 <div className=" font-extrabold text-xl  border-b-2 text-browntime pb-6 "> حدیث امروز </div>

                 <div className="my-4">{apiData2?.result.text}</div>
                 <div className="text-green-500 text-end pb-2">{apiData2?.result.person}</div>
                 <div className="text-end ">{apiData2?.result.source}</div>
             </div>

         </div>
        </>
    );
};

export default Holiday;
