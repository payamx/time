import React, {useEffect, useState} from 'react';
import axios from "axios";
import { ImQuotesLeft } from "react-icons/im";

const Sentence = () => {
    const [text, setText] = useState<string|null>();
    const request = async () => {
        try {

            const response = await axios.get('https://api.keybit.ir/ayamidanid/');
            setText( JSON.stringify(response.data.text) )

        } catch (e) {
            console.log(e, "showlist error")
        }
    }

    useEffect(() => {
        let isMounted = true
        request().then(r => r);
        return () => {
            isMounted = false
        };
    }, []);




    return (
        <>
            <div className="md:flex md:flex-row  w-full items-center dark:bg-darktop dark:text-white">
                <div className="md:w-1/12 md:inline-block "><ImQuotesLeft size={42} className="text-[#c6c6c6]"/></div>
                <div className="md:w-11/12  inline-flex ">{text}</div>

            </div>

        </>
    );
};

export default Sentence;
