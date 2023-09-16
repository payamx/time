import React, {useCallback} from 'react';
import { Calendar } from "@react-shamsi/calendar";
import "@react-shamsi/calendar/dist/styles.css";
import moment from "moment-jalaali";
// import moment from "moment-jalaali";
const ShamsiCalender = () => {


    const onCalendarChange = useCallback((newDate: Date) => {
       const options = {
            year: "numeric",
            month: "numeric",
           day: 'numeric'
        };

        // @ts-ignore
        const GetFaYear=new Intl.DateTimeFormat('en-US-u-ca-persian', options).format(newDate);
    }, [Date]);

    return (
        <div className=" ">
            <Calendar    onChange={onCalendarChange}   />
        </div>
    );
};

export default ShamsiCalender;
